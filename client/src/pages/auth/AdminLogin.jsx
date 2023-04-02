import { Container,TextField,Box,Button, Typography, Grid , styled, Paper} from '@mui/material'
import React , {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import {useDispatch, useSelector} from 'react-redux'
import { adminLogin } from '../../redux/adminSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import loginImage from '../../images/login.jpeg'

const Image = styled('img')({
    maxWidth:"100%",
    height:"100vh"
})

export default function AdminLogin() {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [isLoad , setIsLoad] = useState(false);
    const {lang} = useSelector(s => s.theme);



    const { control, handleSubmit, formState: { errors },register } = useForm({
        defaultValues: {
            password:'',
            email:''
        }
        });
    const onSubmit = async (data) => {
        closeSnackbar();
        setIsLoad(true);
        try{
            const formData = new FormData();
            formData.append('email', data.email);
            formData.append('password' , data.password);
            const res = await fetch(`${process.env.REACT_APP_API}api/admin/login`,{
                method : "POST",
                body : formData
            });
            const resData = await res.json();
            setIsLoad(false);
            if(res.status!==200 && res.status!==201){
                console.log(lang);
                enqueueSnackbar(lang==="en"?resData.message_en:resData.message_ar,{variant:"error" , autoHideDuration:2000});
                throw new Error('login falied')
            }
            enqueueSnackbar(lang==="en"?resData.message_en:resData.message_ar,{variant:"success" , autoHideDuration:2000});
            dispatch(adminLogin({admin:resData.admin , token:resData.token}));
        }
        catch(err){
            setIsLoad(false);
            console.log(err);
        }
    };

    return (
        <>
        <Grid container sx={{height:"100vh" , overflow:"hidden"}}>
            <Grid item md={7} className="overlay" sx={{display:{md:"block", xs:"none"}}}>
                <Image src={loginImage} alt=""/>
            </Grid>
            <Grid item xs={12} md={5} sx={{height:"100%" , display:"flex", alignItems:"center" , justifyContent:"center" , backgroundColor:"#eee" , padding:"20px"}}>
                <Box sx={{width:"500px", maxWidth:"100%"}}>
                    <Paper sx={{padding:"20px 25px"}}>
                    <Typography variant='h4' marginBottom={"28px"}>{t('welcome')}</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{marginBottom:"20px"}}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <TextField {...field} label={t('email')} fullWidth/>}
                                {...register("email", { required: "Email Address is required" })}
                            />
                            {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t("required")}</Typography>}
                        </Box>
                        <Box sx={{marginBottom:"20px"}}>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <TextField type={"password"} {...field} label={t('passowrd')} fullWidth/>}
                                {...register("password", { required: "password Address is required" })}
                            />
                            {errors.password?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>{t('required')}</Typography>}
                        </Box>
                        {isLoad ?
                        <Button  fullWidth variant="contained" sx={{opacity:"0.7"}}>{t('login_btn')}...</Button>:
                        <Button type="submit" fullWidth variant="contained">{t('login_btn')}</Button>
                        }
                    </form>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}