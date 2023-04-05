import React, { useState } from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button,styled, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { useDepartmentForMarket } from '../../hooks/market/useDepartmentsMarket';

const Label = styled('label')({
    cursor:"pointer",
    display:"flex",
    columnGap:"6px",
    alignItems:"center"
})

const Image = styled('img')({
    width:"250px",
    height:"250px"
})

export default function AddProduct() {
    const { register,control, formState: { errors }, handleSubmit , reset} = useForm({
        defaultValues: {
            title:'',
            description:'',
            price:'',
            department:''
        }
    });

    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const {token} = useSelector(s => s.market);
    const [load , setIsLoad] = useState(false);
    const {data} = useDepartmentForMarket(token);

    const [image,setImage] = useState(null)

    async function onSubmit(data)
    {
        closeSnackbar();
        if(!image){
            enqueueSnackbar("upload image is required" , {variant:"error",autoHideDuration:4000});
            return;
        }
        setIsLoad(true);
        try{
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('price' , +data.price);
            formData.append('description' , data.description);
            formData.append('departmentId' , data.department);
            formData.append('image' , image);
            const res = await fetch(`${process.env.REACT_APP_API}api/market/product/create`,{
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
                throw new Error('create product failed falied')
            }
            enqueueSnackbar(resData.message,{variant:"success" , autoHideDuration:2000});
            setImage(null);
            reset({title:"" , price:"" , department:"" , description:""});            
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
                    <Box sx={{marginBottom:"26px"}}>
                        <InputLabel sx={{marginBottom:"6px",fontSize:"14px",color:"black"}}>Department</InputLabel>
                        <Controller
                        name="department"
                        control={control}
                        render={({ field }) =><FormControl fullWidth>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            MenuProps={{
                                elevation:.5,
                                PaperProps: {
                                    style: {
                                        maxHeight: 48 * 3 + 8,
                                        width: 120,
                                        },
                                    },
                            }}
                            {...register("department", { required: "department is required" })}
                            >
                                {
                                    data?.departments.map(dep=>{
                                        return <MenuItem key={dep?.id+"nrj"} value={dep?.id}>{dep.title}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                        }
                        />
                        {errors.department?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>this field is required</Typography>}
                    </Box>
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
                    <Box sx={{marginBottom:"30px"}}>
                        <Label htmlFor='image'>
                            <Typography>select Image</Typography>
                            <ImageOutlinedIcon sx={{marginX:"6px"}}/>
                        </Label>
                        <input type="file" accept='image/*' id='image' hidden onChange={(e)=>setImage(e.target.files[0])}/>
                    </Box>
                    {
                        image&&
                        <Box sx={{marginY:"30px"}}>
                            <Image src={URL.createObjectURL(image)}/>
                        </Box>
                    }
                    {
                        load
                        ?
                        <Button variant='contained' color="secondary" sx={{width:"120px", opacity:0.7}}>add...</Button>
                        :
                        <Button type="submit" variant='contained' color="secondary" sx={{textTransform:"capitalize",width:"120px"}}>Add Product</Button>
                    }
                </form>
            </Box>
        </MarketLayout>
    )
}
