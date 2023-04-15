import React from 'react'
import Layout from '../../components/client/Layout'
import { Container, Grid } from '@mui/material'
import Market from '../../components/client/Market'

export default function Markets() {
    return (
        <Layout>
            <Container sx={{marginY:"30px"}}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Market noRate={true}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market noRate={true}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market noRate={true}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market noRate={true}/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market noRate={true}/>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}
