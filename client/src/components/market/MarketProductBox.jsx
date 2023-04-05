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

export default function MarketProductBox({product}) {
  return (
    <Paper sx={{padding:"20px 10px" , textAlign:"center"}} elevation={1}>
        <Image src={`${process.env.REACT_APP_API}images/${product?.image}`}
        alt=""
        />
        <InfoWrapper>
            <Typography>Name : {product?.title}</Typography>
            <Typography>Price : $ {product?.price}</Typography>
            <Typography>Department : {product?.department?.title}</Typography>
        </InfoWrapper>
    </Paper>
  )
}
