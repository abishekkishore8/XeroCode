
import React, { useState } from 'react'
import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, Button, IconButton, Menu, MenuItem, Stack, Switch, TextField, Toolbar, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavMenu2 from "../components/NavMenu2"
import logo from "../assets/logo4.png"
import { InputBase } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccountBox, Email, LogoDev, Mail, Message, NotificationAdd, ReplayOutlined, SearchOutlined, ThreeDRotation } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//local icons
import amazon from "../assets/dasboard_icons/amazon.svg"
import gcp from "../assets/dasboard_icons/gcp2.svg"
import github from "../assets/dasboard_icons/github.svg"
import gitlab from "../assets/dasboard_icons/gitlab.svg"
import bitbucket from "../assets/dasboard_icons/bitbucket.svg"
import mongodb from "../assets/dasboard_icons/mongodb.svg"
import redish from "../assets/dasboard_icons/redis.svg"
import elephant from "../assets/dasboard_icons/elephant.svg"

import builder from "../assets/leftside/Buildercenter.svg"
import cluster from "../assets/leftside/clusters.svg"
import database from "../assets/leftside/database.svg"
import service from "../assets/leftside/serviceboard.svg"
import environment from "../assets/leftside/Environment.svg"
import workflow from "../assets/leftside/workflow.png"
import monitoring from "../assets/leftside/monitoring.png"
import security from "../assets/leftside/security.png"
import webhooks from "../assets/leftside/webhook.png"

const Dashboard = () => {

    const leftSideButton={
        "&:hover":{
            background:"white",
            
            
        },
       
       width:200,
       height:40,
       alignItems:"center",
       gap:5,
       paddingLeft:2
       
       
    }
    const [open, setOpen] = useState(false)
    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })
    const Search = styled("div")(({ theme }) => ({

        background: "white",
        padding: "0 10px",
        borderRadius: "5px",
        width: "40%"

    }))

    const Icons = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "20px",



    }))
    return (
        <Box paddingBottom={5} bgcolor={"rgb(156, 200, 247)"} >

            <AppBar sx={{ background: "rgb(156, 200, 247)", boxShadow: 0 }} position='sticky'>
                <StyledToolBar>
                    <Box display={"flex"} flex={1} justifyContent={"space-between"}>
                        <Box gap={20} display={"flex"}>
                            <img src={logo} />
                            <Box>

                                <Box height={52} borderRadius={20} flexDirection={"row"} sx={{ background: "white", display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 10px 0px" }} >
                                    <InputBase sx={{ marginLeft: "5px" }} />
                                    <Box sx={{ display: "grid", placeItems: "center", color: "white", background: "blue", height: 50, width: 60, marginRight: -1, borderRadius: 20 }}>
                                        <SearchOutlined sx={{ color: "white", }} />
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                        <Box gap={1} display={"flex"}>
                            <Box gap={2} borderRadius={20} padding={"5px 10px 5px "} bgcolor={"rgb(246,188,68)"} display={"flex"} alignItems={"center"}>
                                <Box sx={{ height: 40, width: 40, background: "white", borderRadius: 20, display: "grid", placeItems: "center" }}>
                                    <NotificationsNoneOutlinedIcon sx={{ color: "black" }} />
                                </Box>
                                <Typography color={"black"}>Upgrade Plan</Typography>
                            </Box>
                            <Box sx={{ height: 40, width: 40, background: "white", borderRadius: 2, display: "grid",placeItems: "center" }}>
                                <NotificationsNoneOutlinedIcon sx={{ color: "black" }} />
                            </Box>
                            <Box sx={{ height: 40, width: 40, background: "white", borderRadius: 2, display: "grid",placeItems: "center" }}>
                                <MailOutlineIcon sx={{ color: "black" }} />
                            </Box>
                            <Box sx={{ height: 40, width: 40, background: "white", borderRadius: 2, display: "grid",placeItems: "center" }}>
                                <SettingsIcon sx={{ color: "black" }} />
                            </Box>
                            <NavMenu2 iconname={<KeyboardArrowDownIcon />} header={"XeroCoders"} />
                            <Box sx={{ height: 40, width: 40, background: "white", borderRadius: 2, display: "grid",placeItems: "center" }}>
                                <AccountBox sx={{ color: "black" }} />
                            </Box>
                        </Box>

                    </Box>

                </StyledToolBar>
            </AppBar>

            <Box mt={5} justifyContent={"center"} gap={3} display={"flex"} flex={1}>
                <Box alignItems={"center"} mt={10} gap={3} flexDirection={'column'} display={"flex"} sx={{ borderRadius: 5,}} flex={1}>
                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={builder} /><Typography>Email</Typography>
                    </Box>
                    {/* ---- */}
                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={builder} /><Typography>Builder Center</Typography>
                    </Box>
                    {/* ---- */}

                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={service} /><Typography>Service Board</Typography>
                    </Box>
                    {/* --- */}
                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={cluster} /> <Typography>Clusters</Typography>
                    </Box>
                    {/* --- */}

                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={database} /> <Typography>Database</Typography>
                    </Box>


                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={environment} /> <Typography>Enivronment</Typography>
                    </Box>

                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={workflow} /> <Typography>Workflow</Typography>
                    </Box>

                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={monitoring} /> <Typography>Monitoring</Typography>
                    </Box>

                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={security} /> <Typography>Security</Typography>
                    </Box>
                    <Box sx={leftSideButton}  borderRadius={20} gap={5} display={"flex"}>
                        <img src={webhooks} /> <Typography>Web Hooks</Typography>
                    </Box>
                    </Box>


                <Box paddingBottom={10} flexDirection={"column"} bgcolor={"white"} display={"flex"} sx={{ borderRadius: 5, marginRight: 2, boxShadow: 3 }} flex={4}>


                    <Box display={"flex"} justifyContent={"space-between"} padding={2} margin={3} height={"20vh"} sx={{ background: "rgba(146, 192, 247,0.1)", borderRadius: 5 }}>
                        <Box display={'flex'} flexDirection={"column"} justifyContent={"space-evenly"}>
                            <Typography variant='h2'>Hi Arya</Typography>
                            <Typography variant='h6'>Welcome to XeroCode Ecosystem</Typography>
                        </Box>
                        <Box>

                            <Box gap={2} display={"flex"}>
                                <Typography>Test Mode</Typography>
                                <Switch />
                                <Typography>Production Mode</Typography>
                            </Box>
                        </Box>

                    </Box>
                    <Box padding={0} gap={2} display={"flex"}  >
                        <Box ml={6} flex={4}>
                            <Box>
                                <Typography variant='h6'>Step 1</Typography>
                                <Typography color={"gray"} variant='p'>Connect to cloud</Typography>

                                {/* main box */}
                                <Box gap={5} display={"flex"} mt={4}>
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>AWS</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(255,154,0,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(255,154,0,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={amazon} />
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>GCP</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(66,133,244,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(66,133,244,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={gcp} />
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                                <Typography mt={5} variant='h6'>Step 2</Typography>
                                <Typography color={"gray"} variant='p'>Connect to Source code</Typography>
                                {/* section 2 */}

                                <Box gap={5} display={"flex"} mt={4}>
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>Github</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(24,24,24,0.2) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(24,24,24,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={github} />
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* second */}
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>Gitlab</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(252,109,38,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(252,109,38,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={gitlab} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* third */}
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>BitBucket</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(66,133,244,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(66,133,244,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={bitbucket} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography mt={5} variant='h6'>Step 3</Typography>
                                <Typography color={"gray"} variant='p'>Connect to DataSource</Typography>
                                <Box gap={5} display={"flex"} mt={4}>
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>MongoDB</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(80,150,70,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(80,150,70,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={mongodb} />
                                            </Box>
                                        </Box>
                                    </Box>

                                    {/* second */}
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>RedisDB</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(216,44,32,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(216,44,32,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={redish} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* third */}
                                    <Box borderRadius={10} padding={2} justifyContent={"space-between"} boxShadow={10} width={"15vw"} height={"15vh"} display={"flex"}>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Typography variant='h5'>Postgresql</Typography>
                                            <Box>
                                                <FiberManualRecordIcon sx={{ color: "red" }} />
                                                <FiberManualRecordIcon sx={{ color: "green" }} />
                                                <CachedIcon />
                                            </Box>
                                        </Box>
                                        <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
                                            <Box borderRadius={5} sx={{ border: "1px rgba(66,133,244,1) solid", display: "grid", placeItems: "center" }} height={"14vh"} width={"7vw"} bgcolor={"rgba(66,133,244,0.1)"}>
                                                <img style={{ height: "70px", width: "70px" }} src={elephant} />
                                            </Box>
                                        </Box>
                                    </Box>



                                </Box>
                            </Box>

                        </Box>

                        {/* right side */}
                        <Box gap={2} display={"flex"} flexDirection={"column"} borderRadius={10} mr={2} p={2} sx={{ boxShadow: 10 }} flex={1}>
                            {/* progress bar */}
                            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                <Typography variant='h6'>Your Progress</Typography>
                                <Typography color={"gray"} variant='p'>towards XeroCode</Typography>
                                <Box mt={2} sx={{ width: 100, height: 100 }}>
                                    <CircularProgressbar strokeWidth={15} text='60%' value={66} />
                                </Box>
                                <Typography boxShadow={5} sx={{padding:"10px 20px 10px",borderRadius:20}} mt={5}>View Details</Typography>

                            </Box>

                            {/* step 1 */}
                            <Typography mt={5}>Step 1</Typography>
                            <Box gap={1} display={"flex"} sx={{justifyContent:"space-between",alignItems:"center"}} padding={1} borderRadius={5} bgcolor={"rgba(255,154,0,0.1)"}>
                                <Box><Typography fontSize={15}>AWS</Typography>
                                <Typography fontSize={12} >Status:Completed</Typography>
                                </Box>
                                <Box display={"flex"}>
                                <Box borderRadius={5} sx={{ border: "1px rgba(66,133,244,1) solid", display: "grid", placeItems: "center" }} height={"8vh"} width={"4vw"} bgcolor={"rgba(66,133,244,0.1)"}>
                                                <img style={{ height: "30px", width: "30px" }} src={amazon} />
                                            </Box>
                                            <MoreVertIcon sx={{fontSize:50,marginRight:-2,color:"gray"}} />
                                </Box>
                            </Box>
                            {/* step 2 */}
                            <Typography>Step 2</Typography>
                            <Box gap={1} display={"flex"} sx={{justifyContent:"space-between",alignItems:"center"}} padding={1} borderRadius={5} bgcolor={"rgba(252,109,38,0.1)"}>
                                <Box><Typography fontSize={15}>AWS</Typography>
                                <Typography fontSize={12} >Status:Completed</Typography>
                                </Box>
                                <Box display={"flex"}>
                                <Box borderRadius={5} sx={{ border: "1px rgba(66,133,244,1) solid", display: "grid", placeItems: "center" }} height={"8vh"} width={"4vw"} bgcolor={"rgba(66,133,244,0.1)"}>
                                                <img style={{ height: "30px", width: "30px" }} src={gitlab} />
                                            </Box>
                                            <MoreVertIcon sx={{fontSize:50,marginRight:-2,color:"gray"}} />
                                </Box>
                            </Box>
                            {/* step 3 */}

                            <Typography>Step 3</Typography>
                            <Box gap={1} display={"flex"} sx={{justifyContent:"space-between",alignItems:"center"}} padding={1} borderRadius={5} bgcolor={"rgba(80,150,70,0.1)"}>
                                <Box><Typography fontSize={15}>AWS</Typography>
                                <Typography fontSize={12} >Status:Completed</Typography>
                                </Box>
                                <Box display={"flex"}>
                                <Box borderRadius={5} sx={{ border: "1px rgba(66,133,244,1) solid", display: "grid", placeItems: "center" }} height={"8vh"} width={"4vw"} bgcolor={"rgba(80,150,70,0.1)"}>
                                                <img style={{ height: "30px", width: "30px" }} src={mongodb} />
                                            </Box>
                                            <MoreVertIcon sx={{fontSize:50,marginRight:-2,color:"gray"}} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Dashboard