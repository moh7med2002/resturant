import React from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { Grid } from '@mui/material'
import DepartmentBox from '../../components/market/DepartmentBox'


export default function MarketDepartments() {
    return (
        <MarketLayout>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DepartmentBox/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DepartmentBox/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DepartmentBox/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DepartmentBox/>
                </Grid>
            </Grid>
        </MarketLayout>
    )
}
