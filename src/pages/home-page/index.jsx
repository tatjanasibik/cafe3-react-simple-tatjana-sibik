import * as React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import * as Home from './components';

const HomePage = () => (
  <Box sx={{ height: '100vh', position: 'relative' }}>
    <Home.Background component='img' src='/home-cover.jpg' />
    <Home.ContentContainer>
      <Home.Content component="main">
        <Typography
          variant="h2"
          component="h1"
          sx={(theme) => ({ letterSpacing: '0.08em', color: 'white' })}
        >
          Koks dabar laikas?
        </Typography>
        <Typography 
        variant="h6" sx={{ color: '#d99f2b', textAlign: 'center' }}
        >
          Sužinok realų laiką
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, height: 400 }}>
          <Home.ImageLink to="/world-cities" src="/america.jpg">Amerikoje</Home.ImageLink>
          <Home.ImageLink to="/world-cities" src="/asia.jpg">Azijoje</Home.ImageLink>
          <Home.ImageLink to="/world-cities" src="/europe.jpg">Europoje</Home.ImageLink>
        </Box>
      </Home.Content>
    </Home.ContentContainer>
  </Box>
);

export default HomePage;

