import { Box, Paper , Typography, styled} from '@mui/material'
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

export default function AdminMarketBox() {
  return (
    <Paper sx={{padding:"20px 10px" , textAlign:"center"}} elevation={1}>
        <Image src={"https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        alt=""
        />
        <InfoWrapper>
            <Typography>Name : market name</Typography>
            <Typography>Email : market email</Typography>
        </InfoWrapper>
    </Paper>
  )
}
