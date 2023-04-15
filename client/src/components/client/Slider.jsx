import { Box ,styled} from '@mui/material'
import React from 'react'
import image from '../../images/slider-img-2.png'

const Image = styled('img')({
    width:"100%"
})

export default function Slider() {
    return (
        <Box>
            <Image src={image} />
        </Box>
    )
}
