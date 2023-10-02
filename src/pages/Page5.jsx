import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import logo from "../assets/logo4.png"

const buttoncss={

    padding:"7px 90px",
    boxShadow:3,
    borderRadius:"2px"
}

const Page5 = () => {
  return (
    <Box display={"grid"} sx={{placeItems:"center",height:"100vh"}}>
        <Box sx={{borderRadius:5}} bgcolor={"white"} flexDirection={"column"} display={"flex"} alignItems={"center"}  flex={1} >
        <img height={50} width={100} src={logo} />

        <Box width={1000} height={300} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant='h3'>Hello!</Typography>
            <Typography variant='p'>Create your Account</Typography>

            
        <Box mt={10} gap={10} display={"flex"}>
            
            <Typography sx={buttoncss} variant='h6'>Xero Code</Typography>
            <Typography sx={buttoncss} variant='h6'>Xero Code</Typography>
            
        </Box>
        </Box>
    </Box>
    </Box>
  )
}

export default Page5