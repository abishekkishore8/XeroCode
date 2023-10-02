import { Box, Button, InputBase, TextField, Typography, hexToRgb } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import logo from "../assets/logo4.png"
import google from "../assets/google.png"
import GitHub from "../assets/git.png"
import bottom from "../assets/Vector.png"
import hero from "../assets/bro.png"

const inputplace={
    ":& ::placeholder":{
        color:"red",
    },
    border: '1px solid grey',
    width:300,
    borderRadius:2
    
    
}
const buttoncss={
    background:"none",
    padding:"5px 10px 5px 5px",
    height:"30px",
    width:200,
    fontSize:"10px",
    color:"black",
    gap:2


}

const Login = () => {
  return (
    <Box height={"100vh"} sx={{display:"grid",placeItems:"center"}}>
   <Box display={"flex"} bgcolor={"white"} width={1000} height={600} sx={{borderTopRightRadius:20,borderBottomLeftRadius:20}}>
    <Box flexDirection={"column"} display={"flex"} alignItems={"center"}  flex={1} >
        <img height={50} width={100} src={logo} />

        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant='h3'>Hello!</Typography>
            <Typography variant='p'>Create your Account</Typography>

            <Box pt={3} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
                <InputBase  sx={inputplace} placeholder='first name' />
                <InputBase sx={inputplace} placeholder='last name' />
                <InputBase sx={inputplace} placeholder='email' />
                <InputBase sx={inputplace} placeholder='password' />
                <InputBase sx={inputplace} placeholder='confirm password' />
                <Button sx={{padding:"10px 122px"}} variant='contained'>SIGNUP</Button>
                <Typography>OR</Typography>
                <Box gap={1} display={"flex"}>

                <Button sx={buttoncss} variant='contained'>Signup With google <img style={{height:30,width:30}} src={google} /></Button>
                <Button sx={buttoncss} variant='contained'>Signup With GitHub <img style={{height:30,width:30}} src={GitHub} /></Button>
                </Box>
                
            </Box>

        </Box>
    </Box>
    <Box  overflow={"hidden"} flex={1} borderLeft={1}>
        <img style={{marginTop:100}} src={hero} />
        <img style={{position:"relative",bottom:-70,height:100,width:"500px"}} src={bottom}/>
    </Box>
   </Box>
   </Box>
  )
}

export default Login