import React, { useState } from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

export default function AddDepartment() {
    const { register,control, formState: { errors }, handleSubmit , reset} = useForm({
        defaultValues: {
            title:'',
        }
    });

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {token} = useSelector(s => s.market);
    const [load , setIsLoad] = useState(false);

    async function onSubmit(data)
    {
        closeSnackbar();
        setIsLoad(true);
        try{
            const formData = new FormData();
            formData.append('title', data.title);
            const res = await fetch(`${process.env.REACT_APP_API}api/market/department/create`,{
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
                throw new Error('login falied')
            }
            enqueueSnackbar(resData.message,{variant:"success" , autoHideDuration:2000});
            reset({title:""});
        }
        catch(err){
            setIsLoad(false);
            console.log(err);
        }
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
                        {
                            load
                            ?
                            <Button variant='contained' color="secondary" sx={{width:"140px", opacity:0.7}}>add...</Button>
                            :
                            <Button variant='contained' type="submit" color="secondary" sx={{textTransform:"capitalize",width:"140px"}}>Add Department</Button>
                        }
                    </form>
                </Box>
            </MarketLayout>
    )
}
