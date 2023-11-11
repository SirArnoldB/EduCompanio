import React from 'react'
import { Link, Stack } from '@mui/material'
import Logo from '../../../public/logo/png/logo-no-background.png'


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
    <Link to="/" style={{ display: "flex", textDecoration: 'none', color: "#fff", fontWeight: "600", alignItems: "center" }}>
      <img src={Logo} className='logo' alt="logo" height={45} />
    </Link>
    <Stack direction='row' spacing={2}>
        <Link to ='#features' color='#ffffff' sx={{textDecoration:'none', fontWeight: '700'}}>Features</Link>
        <Link to ='#testimonials' color='#ffffff' sx={{textDecoration:'none', fontWeight: '700'}}>Testimonials</Link>
        <Link to ='#sponsors' color='#ffffff' sx={{textDecoration:'none', fontWeight: '700'}}>Sponsors</Link>
        <Link to ='/signup'  color='#ffffff' sx={{textDecoration:'none', color: '#152246', fontWeight: '700', backgroundColor: '#f1f1f1', padding: '5px 5px', borderRadius: '10px'}}>Sign In</Link>
    </Stack>    
  </Stack>
  )
}

export default NavBar
