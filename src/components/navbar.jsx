import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[200],

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  }
}));

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Pasaulio miestai', to: '/world-cities' },
  { text: 'Nuotraukos', to: '/pictures' },
  { text: 'Kontaktai', to: '/contacts' },
];

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{
        justifyContent: 'space-between'
      }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: { sm: "none" }
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
          {pages.map(({ text, to }) => (
            <Link
              key={to}
              to={to}
            >
              {text}
            </Link>
          ))}
        </Box>
        <AllInclusiveIcon />
      </Toolbar>
    </AppBar>
  );
}
