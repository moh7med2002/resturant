import React from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { Grid } from '@mui/material'
import DepartmentBox from '../../components/market/DepartmentBox'
import { useSelector } from 'react-redux'
import { useDepartmentForMarket } from '../../hooks/market/useDepartmentsMarket'
import DepartmentSkelton from '../../components/skelton/DepartmentSkelton'


export default function MarketDepartments() {
    const {token} = useSelector(s => s.market);
    const {data , isLoading} = useDepartmentForMarket(token);
    return (
        <MarketLayout>
            {
                isLoading
                ?
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DepartmentSkelton/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DepartmentSkelton/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DepartmentSkelton/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <DepartmentSkelton/>
                    </Grid>
                </Grid>
                :
                <Grid container spacing={2}>
                    {
                        data?.departments.map(department=>{
                            return <Grid item xs={12} sm={6} md={4} lg={3} key={department.id+"edmb"}>
                            <DepartmentBox department={department}/>
                        </Grid>
                        })
                    }
                </Grid>
            }
        </MarketLayout>
    )
}
