import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

function Login(){
    return(
        <Box sx={{height:'686px',display:'flex',justifyContent:'center',WebkitBoxPack:'center',WebkitBoxAlign:'center',alignItems:'center'}}>
        <Box component="section" sx={{ padding:'25px',width:'330px',height:'250px', border: '2px solid rgb(25, 118, 210)' ,borderRadius:'25px',boxShadow:'rgb(25, 118, 210) 0px 0px 5px'}}>
        <h1  style={{margin:'0px 0px 20px',fontFamily:'Roboto, Helvetica, Arial, sans-serif',fontSize:'2.125rem',lineHeight:'1.235',letterSpacing:'0.00735em',textAlign:'center',color:'rgb(25, 118, 210)',fontWeight:'700'}}>Admin Panel</h1>
        <Box
      component="form"
      sx={{ '& > :not(style)': { height:'55px',} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined"  sx={{margin:'0px 0px 20px',width: '302px',height:'23px' }}/>
      {/* <TextField id="outlined-basic" label="Password" variant="outlined" /> */}
      <TextField
          sx={{margin:'0px 0px 20px',width: '302px',height:'23px' }}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
    </Box>
    <Stack spacing={2} direction="row" sx={{display:'flex',justifyContent:'center',WebkitBoxPack:'center'}}>
     <Button variant="contained">Submit</Button>
    </Stack>
      </Box>
      </Box>
    )
}
export default Login;
