import React from 'react'
import Navigation from '../navigation/Navigation'
import { Box } from '@mui/material'
import bgimage from "../assets/bgimage.png"
import Login from './Login'

const Home = () => {
  return (
     <Box height={"100vh"} sx={{display:"grid",placeItems:"center"}}>
       <Login />
     </Box>
  )
}

export default Home