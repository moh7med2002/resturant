import { Box,Grid,Paper,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesMarket() {
    return (
        <Box>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={2}>
                    <Link to="/">
                        <Paper sx={{padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:"600"}}>
                            Drinks
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/">
                        <Paper sx={{padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:"600"}}>
                            Drinks
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/">
                        <Paper sx={{padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:"600"}}>
                            Drinks
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/">
                        <Paper sx={{padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:"600"}}>
                            Drinks
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/">
                        <Paper sx={{padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:"600"}}>
                            Drinks
                        </Paper>
                    </Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to="/">
                        <Paper sx={{padding:"10px",textAlign:"center",fontSize:"18px",fontWeight:"600"}}>
                            Drinks
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
