import styled from '@emotion/styled';
import { Button, Stack } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';

const Input = styled('input')({
    backgroundColor:"transparent",
    outline:"none",
    border:"2px solid #f7f7fc",
    padding:"2px 5px",
    flex:1,
    borderRadius:"4px",
    height:"40px"
})

export default function SendMessage() {
    const { control, handleSubmit, formState: { errors },register , watch} = useForm({
        defaultValues: {
            message:'',
        }
        });
  return (
    <Stack direction={"row"} spacing={1}>
        <Input type="text" fullWidth 
        autoComplete='off'
        {...register("message", { required: "email Address is required" })}
        placeholder='input your message'
        />   
        {watch('message')&& <Button color='secondary' variant='contained'>
            <SendIcon/>
        </Button>}
    </Stack>
  )
}
