import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {  Grid, Stack } from '@mui/material'
import AdminMarketBox from '../../components/admin/AdminMarketBox'
import Pagination from '@mui/material/Pagination';


export default function AllResturant() {
    return (
        <AdminLayout>
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={12} sm={9} md={5} lg={3}>
                    <AdminMarketBox/>
                </Grid>
                <Grid item xs={12} sm={9} md={5} lg={3}>
                    <AdminMarketBox/>
                </Grid>
                <Grid item xs={12} sm={9} md={5} lg={3}>
                    <AdminMarketBox/>
                </Grid>
                <Grid item xs={12} sm={9} md={5} lg={3}>
                    <AdminMarketBox/>
                </Grid>
            </Grid>
            <Stack justifyContent={"center"} flexDirection={"row"} marginTop={"40px"}>
                <Pagination count={10} color="secondary" onChange={(e,value)=>console.log(value)}/>
            </Stack>
        </AdminLayout>
    )
}
