import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Message({you}) {
  return (
    <Box sx={{marginBottom:"12px",display:"flex",flexDirection:you?"row-reverse":"row",alignItems:"center", columnGap:"8px", }}>
            <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 46, height: 46 , backgroundColor:"white", color:"black"}}
            />
            <Typography sx={{fontSize:"15px",backgroundColor:!you?"#ff5722":"#42a5f5",width:"fit-content",color:"white",padding:"6px 10px",
            borderRadius:"4px"}}>
                {"hello"}
            </Typography>
    </Box>
  )
}
