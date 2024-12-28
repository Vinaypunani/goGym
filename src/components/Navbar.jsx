import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/images/logo.avif';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            gap={{ sm: "50px", xs: "20px" }}
            sx={{ padding: '10px 20px', backgroundColor: '#f8f9fa' }}
        >
            <Link to="/">
                <img src={logo} alt="Logo" style={{ width: '80px', height: '80px' }} />
            </Link>

            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={{ sm: "40px", xs: "20px" }}
                sx={{ fontSize: '1.1rem' }}
            >
                <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: 'bold' ,borderBottom:"2px solid #01D2F5"}}>Home</Link>
                <a href="/#exercises" style={{ textDecoration: "none", color: "#333", fontWeight: 'bold' }}>Exercise</a>
            </Stack>
        </Stack>
    );
}

export default Navbar;
