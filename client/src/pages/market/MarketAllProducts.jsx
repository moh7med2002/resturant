import React from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { Grid, Pagination, Stack } from '@mui/material'
import MarketProductBox from '../../components/market/MarketProductBox'
import { useSelector } from 'react-redux'
import { useProductsForMarket } from '../../hooks/market/useProductsmarket'
import MarketSkelton from '../../components/skelton/MarketSkelton'


export default function MarketAllProducts() {
    const {token} = useSelector(s => s.market);
    const {data , isLoading} = useProductsForMarket(token);
  return (
    <MarketLayout>
        {
            isLoading
            ?
            <Grid container spacing={2} justifyContent={"center"}>
                <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                    <MarketSkelton/>
                </Grid>
                <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                    <MarketSkelton/>
                </Grid>
                <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                    <MarketSkelton/>
                </Grid>
                <Grid item xs={10} sm={6} md={6} lg={4} xl={3}>
                    <MarketSkelton/>
                </Grid>
            </Grid>
            :
            <Grid container spacing={2}>
                {
                    data?.products?.map(product=>{
                        return <Grid item xs={10} sm={6} md={6} lg={4} xl={3} key={product?.id+"wv"}>
                        <MarketProductBox product={product}/>
                    </Grid>
                    })
                }
            </Grid>
        }
        <Stack justifyContent={"center"} flexDirection={"row"} marginTop={"40px"}>
            <Pagination count={10} color="secondary" onChange={(e,value)=>console.log(value)}/>
        </Stack>
    </MarketLayout>
  )
}
