import React from 'react'
import { Link, Stack } from '@mui/material'


const NavBar = () => {
  return (
    <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "fixed",
      background: "#152246e7",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 1030,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src='' alt="logo" height={45} />
      EduCompanio
    </Link>
    <Stack direction='row' spacing={2}>
        <Link to ='#features' color='#ffffff' sx={{textDecoration:'none'}}>Features</Link>
        <Link to ='#testimonials' color='#ffffff' sx={{textDecoration:'none'}}>testimonials</Link>
        <Link to ='#contact' color='#ffffff' sx={{textDecoration:'none'}}>Sponsors</Link>
        <Link to ='/signup' color='#ffffff' sx={{textDecoration:'none'}}>Sign Up</Link>
    </Stack>    
  </Stack>
  )
}

export default NavBar
