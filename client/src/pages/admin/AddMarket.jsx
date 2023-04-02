import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, InputLabel, TextField, Typography } from '@mui/material';

export default function AddMarket() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            name:'',
            email:'',
            password:''
        }
    });

    async function onSubmit(data)
    {
        console.log(data)
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
                    <Button variant='contained' color="secondary" sx={{textTransform:"capitalize",width:"120px"}}>Create</Button>
                </form>
            </Box>
        </AdminLayout>
    )
}
