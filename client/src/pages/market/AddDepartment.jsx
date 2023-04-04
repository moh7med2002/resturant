import React from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';

export default function AddDepartment() {
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title:'',
        }
    });

    async function onSubmit(data)
    {
        console.log(data)
    }

    return (
            <MarketLayout>
                <Box sx={{marginY:"12px"}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{marginBottom:"30px"}}>
                            <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Title</InputLabel>
                            <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <TextField {...field} fullWidth/>}
                            {...register("title", { required: "title Address is required" })}
                            />
                            {errors.title?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                        </Box>
                        <Button variant='contained' type="submit" color="secondary" sx={{textTransform:"capitalize",width:"140px"}}>Add Department</Button>
                    </form>
                </Box>
            </MarketLayout>
    )
}
