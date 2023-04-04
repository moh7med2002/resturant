import React from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { Grid, Pagination, Stack } from '@mui/material'
import MarketProductBox from '../../components/market/MarketProductBox'


export default function MarketAllProducts() {
  return (
    <MarketLayout>
        <Grid container spacing={2} justifyContent={"center"}>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                <MarketProductBox/>
            </Grid>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                <MarketProductBox/>
            </Grid>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                <MarketProductBox/>
            </Grid>
            <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                <MarketProductBox/>
            </Grid>
        </Grid>
        <Stack justifyContent={"center"} flexDirection={"row"} marginTop={"40px"}>
            <Pagination count={10} color="secondary" onChange={(e,value)=>console.log(value)}/>
        </Stack>
    </MarketLayout>
  )
}
