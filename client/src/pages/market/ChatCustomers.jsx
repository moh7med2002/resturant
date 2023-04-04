import React from 'react'
import MarketLayout from '../../components/market/MarketLayout'
import { Grid, Paper, useTheme } from '@mui/material'
import ChatUserItem from '../../components/reusableUi/message/ChatUserItem';
import ConversationBox from '../../components/reusableUi/message/ConversationBox';


export default function ChatCustomers() {
    const theme = useTheme();
  return (
    <MarketLayout>
        <Paper sx={{padding:"20px" , backgroundColor:"#ffffff", color:theme.palette.primary.main}} elevation={0}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <ChatUserItem/>
                    <ChatUserItem/>
                    <ChatUserItem/>
                    <ChatUserItem/>
                </Grid>
                <Grid item xs={9}>
                    <ConversationBox/>
                </Grid>
            </Grid>
        </Paper>
    </MarketLayout>
  )
}
