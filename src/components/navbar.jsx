import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const pages = ['Pagrindinis', 'Pasaulio miestai', 'Nuotraukos', 'Kontaktai'];

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ 
          justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              mr: 2, 
              display: { sm: "none"}
             }}
          >
            <MenuIcon />
          </IconButton>
             <Box sx={{ display: 'flex', gap: 2}}>
             {pages.map((pageTitle) => (
              <Typography 
                key={pageTitle}
                variant="h6" 
                component="div" 
                sx={{ 
                  display: { xs: 'none', sm: 'block'} 
                }}
                >
                {pageTitle}
                </Typography>
             ))}
            </Box> 
             <AllInclusiveIcon/>    
        </Toolbar>
      </AppBar>
    </Box>
  );
}
