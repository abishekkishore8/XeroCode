import { Box, Button, InputBase, TextField, Typography, hexToRgb } from '@mui/material'
import { blue } from '@mui/material/colors'
import React, { useState } from 'react';
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

const SignUp = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // You can send the formData to your server using a POST request here
        fetch('localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          // Handle the response from the server
          if (response.status === 200) {
            // Success, you can redirect or do something else
          } else {
            // Handle error
          }
        })
        .catch(error => {
          // Handle network or fetch errors
          console.error('Error:', error);
        });
      };
  return (
    <Box height={"100vh"} sx={{display:"grid",placeItems:"center"}}>
   <Box display={"flex"} bgcolor={"white"} width={1000} height={600} sx={{borderTopRightRadius:20,borderBottomLeftRadius:20}}>
    <Box flexDirection={"column"} display={"flex"} alignItems={"center"}  flex={1} >
        <img height={50} width={100} src={logo} />

        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Typography variant='h3'>Hello!</Typography>
            <Typography variant='p'>Create your Account</Typography>

            <Box pt={3} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
            <form onSubmit={handleSubmit}>
                <InputBase sx={inputplace} 
                   name='email'
                   value={formData.email}
                   onChange={handleChange}
                    placeholder='email' required/>
                <InputBase sx={inputplace}
                  placeholder='password'
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required />
                  <Button sx={{padding:"10px 122px"}} type='submit' variant='contained'>Login</Button>
            </form>
                <Typography>OR</Typography>
                <Box gap={1} display={"flex"}>

                <Button sx={buttoncss} variant='contained'>Signup With google <img style={{height:30,width:30}} src={google} /></Button>
                <Button sx={buttoncss} variant='contained'>Signup With GitHub <img style={{height:30,width:30}} src={GitHub} /></Button>
                </Box>
                
            </Box>

        </Box>
    </Box>
    <Box   overflow={"hidden"} flex={1} borderLeft={1}>
        <img style={{marginTop:100}} src={hero} />
        <img style={{position:"absolute",bottom:"7.5%",height:100,width:"500px"}} src={bottom}/>
    </Box>
   </Box>
   </Box>
  )
}

export default SignUp

// import { Box, Button, InputBase, TextField, Typography } from '@mui/material';
// import { blue } from '@mui/material/colors';
// import React, { useState } from 'react';
// import logo from "../assets/logo4.png";
// import google from "../assets/google.png";
// import GitHub from "../assets/git.png";
// import bottom from "../assets/Vector.png";
// import hero from "../assets/bro.png";

// const inputplace = {
//   "& ::placeholder": {
//     color: "red",
//   },
//   border: '1px solid grey',
//   width: 300,
//   borderRadius: 2
// };

// const buttoncss = {
//   background: "none",
//   padding: "5px 10px 5px 5px",
//   height: "30px",
//   width: 200,
//   fontSize: "10px",
//   color: "black",
//   gap: 2
// };

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
// console.log('Doing');
//     // You can send the formData to your server using a POST request here
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(response => {
//       // Handle the response from the server
//       if (response.status === 200) {
//         // Success, you can redirect or do something else
//       } else {
//         // Handle error
//       }
//     })
//     .catch(error => {
//       // Handle network or fetch errors
//       console.error('Error:', error);
//     });
//   };

//   return (
// <Box height={"100vh"} sx={{ display: "grid", placeItems: "center" }}>
//       <form onSubmit={handleSubmit}>
//         <Box display={"flex"} bgcolor={"white"} width={1000} height={600} sx={{ borderTopRightRadius: 20, borderBottomLeftRadius: 20 }}>
//           <Box flexDirection={"column"} display={"flex"} alignItems={"center"} flex={1}>
//             <img height={50} width={100} src={logo} />

//             <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
//               <Typography variant='h3'>Hello!</Typography>
//               <Typography variant='p'>Create your Account</Typography>

//               <Box pt={3} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
//                 <InputBase
//                   sx={inputplace}
//                   placeholder='email'
//                   name='email'
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <InputBase
//                   sx={inputplace}
//                   placeholder='password'
//                   type='password'
//                   name='password'
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />

//                 <Typography>OR</Typography>
//                 <Box gap={1} display={"flex"}>
//                   <Button sx={buttoncss} type='submit' variant='contained'>Signup</Button>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </form>
//       <Box overflow={"hidden"} flex={1} borderLeft={1}>
//         <img style={{ marginTop: 100 }} src={hero} />
//         <img style={{ position: "absolute", bottom: "7.5%", height: 100, width: "500px" }} src={bottom} />
//       </Box>
//     </Box>
//   );
// }

// export default SignUp;
