import { Avatar, Box, List, ListItemButton, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ChatUserItem() {
  return (
    <ListItemButton sx={{backgroundColor:"#f7f7fc", marginBottom:"12px"}}>
        <Stack direction={"row"} alignItems={"flex-start"} columnGap={1}>
            <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 46, height: 46 ,  color:"black"}}
            />
            <Box>
                <Typography>mohamed</Typography>
                <Typography sx={{fontSize:"12px"}}>hello</Typography>
            </Box>
        </Stack>
    </ListItemButton>
  )
}
