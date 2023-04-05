import { Box, Paper, Skeleton } from '@mui/material'
import React from 'react'

export default function MarketSkelton() {
  return (
    <Paper sx={{padding:"20px 10px" , textAlign:"center"}} elevation={1}>
        <Skeleton sx={{ height: 180 , borderRadius:"4px"}} animation="wave" variant="rectangular"/>
        <Box marginY={"10px"}>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
        </Box>
    </Paper>
  )
}
