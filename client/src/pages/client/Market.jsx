import React from 'react'
import Layout from '../../components/client/Layout'
import { Container, Typography,Box, Grid } from '@mui/material'
import CategoriesMarket from '../../components/client/CategoriesMarket'
import ProductBox from '../../components/client/ProductBox'

export default function Market() {
    return (
        <Layout>
            <Container sx={{marginY:"20px"}}>
                <CategoriesMarket/>
                <Box sx={{marginY:"60px"}}>
                    <Typography sx={{fontSize:"22px",color:"#283045",fontWeight:"700",marginBottom:"28px",textTransform:"capitalize"}}>Our Products</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductBox/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductBox/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductBox/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ProductBox/>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Layout>
    )
}
