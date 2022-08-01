import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { useNavigate } from 'react-router-dom';
import * as Nav from './components';

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Pasaulio miestai', to: '/world-cities' },
  { text: 'Nuotraukos', to: '/pictures' },
  { text: 'Kontaktai', to: '/contact' },
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => <Nav.Link key={to} to={to}>{text}</Nav.Link>)}
        </Box>

        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={() => navigate('/cart')}
        >
          <AllInclusiveIcon />
        </IconButton>

      </Toolbar>
    </AppBar>
  )
};


export default Navbar;
