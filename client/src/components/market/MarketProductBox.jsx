import styled from '@emotion/styled';
import { Box, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react'

const Image = styled('img')({
    height:"180px",
    width:"320px",
    maxWidth:"100%",
    borderRadius:"4px"
});

const InfoWrapper = styled(Box)({
    borderRadius:"4px",
    textAlign:"start",
    padding:"12px 16px",
    backgroundColor:grey[200],
    width:"360px",
    maxWidth:"100%",
    margin:"10px auto"
})

export default function MarketProductBox() {
  return (
    <Paper sx={{padding:"20px 10px" , textAlign:"center"}} elevation={1}>
        <Image src={"https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=600"}
        alt=""
        />
        <InfoWrapper>
            <Typography>Name : milk</Typography>
            <Typography>Price : $ 22</Typography>
        </InfoWrapper>
    </Paper>
  )
}
