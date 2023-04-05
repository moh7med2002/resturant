import React, { useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, InputLabel, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

export default function AddMarket() {
    const { register,control, formState: { errors }, handleSubmit , reset} = useForm({
        defaultValues: {
            name:'',
            email:'',
            password:''
        }
    });
    const [load , setIsLoad] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {token} = useSelector(s => s.admin);

    async function onSubmit(data)
    {
        closeSnackbar();
        setIsLoad(true);
        try{
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('password' , data.password);
            const res = await fetch(`${process.env.REACT_APP_API}api/admin/market/create`,{
                method : "POST",
                headers:{
                    "Authorization":token
                },
                body : formData
            });
            const resData = await res.json();
            setIsLoad(false);
            if(res.status!==200 && res.status!==201){
                enqueueSnackbar(resData.message,{variant:"error" , autoHideDuration:2000});
                throw new Error('create market falied')
            }
            enqueueSnackbar(resData.message,{variant:"success" , autoHideDuration:2000});
            reset({name:"" , email:"" , password:""});
        }
        catch(err){
            setIsLoad(false);
            console.log(err);
        }
    }

    return (
        <AdminLayout>
            <Box sx={{marginY:"12px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} sx={{marginBottom:"30px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Market name</InputLabel>
                            <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("name", { required: "name Address is required" })}
                            />
                            {errors.name?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{marginBottom:"30px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Market Email</InputLabel>
                            <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <TextField type="email" {...field} fullWidth/>}
                            {...register("email", { required: "email Address is required" })}
                            />
                            {errors.email?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Grid>
                    </Grid>
                    <Box sx={{marginBottom:"30px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Market Password</InputLabel>
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
                        <Button variant='contained' color="secondary" 
                        sx={{textTransform:"capitalize",width:"120px", opacity:0.7}}>
                            Create...
                        </Button>
                        :
                        <Button variant='contained' color="secondary" type='submit'
                        sx={{textTransform:"capitalize",width:"120px"}}>
                            Create
                        </Button>
                    }
                </form>
            </Box>
        </AdminLayout>
    )
}
