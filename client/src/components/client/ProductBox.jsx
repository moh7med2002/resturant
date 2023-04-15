import { Box,Button,Paper,Typography,styled } from '@mui/material'
import React from 'react'

const Image = styled('img')({
height:"140px",
})

export default function ProductBox() {
    return (
        <Paper sx={{padding:"10px"}}>
            <Box sx={{display:"flex",justifyContent:"center"}}>
            <Image src={'https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph'}/>
            </Box>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography sx={{marginTop:"16px",fontSize:"15px",fontWeight:"600"}}>Shamboo</Typography>
                <Typography sx={{fontWeight:"600",fontSize:"15px",marginTop:"4px",color:"#283045"}}>$3.2</Typography>
            </Box>
            <Button variant="contained" color="secondary" size="small" fullWidth sx={{textTransform:"capitalize",marginTop:"10px"}}>Add To Cart</Button>
        </Paper>
    )
}
