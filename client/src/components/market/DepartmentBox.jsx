import { Box, Stack, Typography, styled, useTheme } from '@mui/material'
import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';

const Wrapper = styled('div')({
    padding:"20px 12px",
    borderRadius:"6px",
})

export default function DepartmentBox() {
    const theme = useTheme();
  return (
    <Wrapper sx={{backgroundColor:theme.palette.secondary.light}}>
        <Stack justifyContent={"center"} flexDirection={"row"} marginBottom={"18px"}>
            <CategoryIcon sx={{fontSize:"40px", color:"white"}}/>
        </Stack>
        <Box>
            <Typography sx={{color:"white", marginBottom:"6px"}}>Name : department</Typography>
            <Typography sx={{color:"white"}}> Products : 22</Typography>
        </Box>
    </Wrapper>
  )
}
