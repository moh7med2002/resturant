import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Message from './Message'
import SendMessage from './SendMessage'

export default function ConversationBox() {
    return (
        <Box>
            <Stack direction={"row"} alignItems={"center"} columnGap={1}>
                <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 52, height: 52 , color:"black"}}
                />
                <Typography>mohammed</Typography>
            </Stack>
            {/* render message here */}
            <Box sx={{padding:"20px", borderRadius:"4px" , backgroundColor:"#f7f7fc" , marginY:"20px" , height:"400px" , overflowY:"auto"}}>
                <Message you={false}/>
                <Message you={true}/>
                <Message you={false}/>
                <Message you={true}/>
                <Message you={false}/>
                <Message you={true}/>
                <Message you={false}/>
                <Message you={true}/>
            </Box>
            <SendMessage/>
        </Box>
    )
}
