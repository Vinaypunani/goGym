// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer

import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        // backgroundColor: '#2c3e50',
        backgroundColor: '#F8F9FA',
        color: '#000',
        py: 3,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" sx={{ mt: 2 }}>
        Made By ❤️ VinayPunani
      </Typography>
    </Box>
  );
};

export default Footer;
