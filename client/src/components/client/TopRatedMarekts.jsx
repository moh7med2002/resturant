import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Market from './Market'

export default function TopRatedMarekts() {
    return (
        <Box sx={{marginBottom:"20px"}}>
            <Container sx={{paddingY:"40px"}}>
                <Typography sx={{fontSize:"24px",fontWeight:"600",marginBottom:"32px"}}>Top Rated Markets</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Market/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market/>
                    </Grid>
                    <Grid item xs={3}>
                        <Market/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
