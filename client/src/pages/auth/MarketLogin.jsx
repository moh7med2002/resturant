import { TextField,Box,Button, Typography, Grid , styled,InputLabel,Container} from '@mui/material'
import React , {useState} from 'react'
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import {useDispatch} from 'react-redux'
import loginImage from '../../images/marketLogin.jpeg'
import { useNavigate } from 'react-router-dom';
import { marketLogin } from '../../redux/marketSlice';

const Image = styled('img')({
    width:"100%",
    height:"100vh"
})

export default function MarketLogin() {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const [load , setIsLoad] = useState(false);
    const navigate = useNavigate();

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
            const res = await fetch(`${process.env.REACT_APP_API}api/market/login`,{
                method : "POST",
                body : formData
            });
            const resData = await res.json();
            setIsLoad(false);
            if(res.status!==200 && res.status!==201){
                enqueueSnackbar(resData.message,{variant:"error" , autoHideDuration:2000});
                throw new Error('login falied')
            }
            enqueueSnackbar(resData.message,{variant:"success" , autoHideDuration:2000});
            dispatch(marketLogin({market:resData.market , token:resData.token}));
            navigate('/market');
        }
        catch(err){
            setIsLoad(false);
            console.log(err);
        }
    };

    return (
        <Box>
            <Grid container spacing={2} sx={{height:"100vh"}}>
                <Grid item xs={12} md={6}>
                    <Container sx={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
                        <Typography sx={{textTransform:"uppercase",color:"#fc5a5a",
                        fontSize:"34px",marginBottom:"20px",fontWeight:"600",textAlign:"center"}}>Login as Market</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box sx={{marginBottom:"30px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Email</InputLabel>
                                <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <TextField type="email" {...field} fullWidth/>}
                                {...register("email", { required: "email Address is required" })}
                                />
                                {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                            </Box>
                            <Box sx={{marginBottom:"30px"}}>
                                <InputLabel sx={{marginBottom:"6px",fontSize:"13px"}}>Password</InputLabel>
                                <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <TextField type="password" {...field} fullWidth/>}
                                {...register("password", { required: "password Address is required" })}
                                />
                                {errors.password?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                            </Box>
                            {
                                load
                                ?
                                <Button variant="contained" sx={{opacity:0.7}}>Login...</Button>
                                :
                                <Button variant="contained" type="submit">Login</Button>
                            }
                        </form>
                    </Container>
                </Grid>
                <Grid item md={6} sx={{display:{md:"flex",xs:"none"}}}>
                    <Image src={loginImage}/>
                </Grid>
            </Grid>
        </Box>
    )
}