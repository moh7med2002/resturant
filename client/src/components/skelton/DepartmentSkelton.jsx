import { Skeleton } from '@mui/material'
import React from 'react'

export default function DepartmentSkelton() {
  return (
    <div>
        <Skeleton sx={{ height: 155 , borderRadius:"4px"}} animation="wave" variant="rectangular"/>
    </div>
  )
}
