import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, InputLabel, TextField, Typography } from '@mui/material';

export default function AddProduct() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title:'',
            description:'',
            price:'',
            department:''
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
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Title</InputLabel>
                            <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title", { required: "title Address is required" })}
                            />
                            {errors.title?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Grid>
                        <Grid item xs={12} md={6} sx={{marginBottom:"30px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Price</InputLabel>
                            <Controller
                            name="price"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("price", { required: "price Address is required" })}
                            />
                            {errors.price?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Grid>
                    </Grid>
                    <Box sx={{marginBottom:"30px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Description</InputLabel>
                        <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <TextField multiline rows={2} {...field} fullWidth/>}
                        {...register("description", { required: "description Address is required" })}
                        />
                        {errors.description?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
                    <Button variant='contained' color="secondary" sx={{textTransform:"capitalize",width:"120px"}}>Create</Button>
                </form>
            </Box>
        </AdminLayout>
    )
}
