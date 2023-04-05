import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import {  Grid, Stack } from '@mui/material'
import AdminMarketBox from '../../components/admin/AdminMarketBox'
import Pagination from '@mui/material/Pagination';
import {useSelector} from 'react-redux'
import { useMarketsForAdmin } from '../../hooks/admin/useMarketsAdmin';
import MarketSkelton from '../../components/skelton/MarketSkelton';


export default function AllResturant() {
    const {token} = useSelector(s => s.admin);
    const {data , isLoading} = useMarketsForAdmin(token);
    return (
        <AdminLayout>
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
                    data?.markets.map(market=>{
                        return <Grid item xs={10} sm={6} md={6} lg={4} xl={3} key={market?.id+"sbeh"}>
                        <AdminMarketBox market={market}/>
                    </Grid>
                    })
                }
            </Grid>
            }
            <Stack justifyContent={"center"} flexDirection={"row"} marginTop={"40px"}>
                <Pagination count={10} color="secondary" onChange={(e,value)=>console.log(value)}/>
            </Stack>
        </AdminLayout>
    )
}
