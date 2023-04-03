import React, { useState } from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { useForm, Controller } from "react-hook-form";
import { Box, Button,styled, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

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
    const { register,control, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            title:'',
            description:'',
            price:'',
            department:''
        }
    });

    const [image,setImage] = useState(null)

    async function onSubmit(data)
    {
        console.log(data)
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
                                <MenuItem value={'male'}>dep1</MenuItem>
                                <MenuItem value={'female'}>dep2</MenuItem>
                                <MenuItem value={'male'}>dep1</MenuItem>
                                <MenuItem value={'male'}>dep1</MenuItem>
                                <MenuItem value={'male'}>dep1</MenuItem>
                                <MenuItem value={'male'}>dep1</MenuItem>
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
                    <Button variant='contained' color="secondary" sx={{textTransform:"capitalize",width:"120px"}}>Add Product</Button>
                </form>
            </Box>
        </MarketLayout>
    )
}
