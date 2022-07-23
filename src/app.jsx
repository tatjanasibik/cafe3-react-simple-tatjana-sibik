import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Navbar from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Stack spacing={2} direction="row">
      <Button variant="contained"><HistoryToggleOffIcon/></Button>
      <Button variant="text">Text</Button>
      <Button 
      variant="contained"
      startIcon={<HistoryToggleOffIcon />}
      >Contained</Button>
      <Button 
      variant="outlined"
      endIcon={<HistoryToggleOffIcon />}
      >Outlined</Button>
      </Stack>
    </div>
  );
}


export default App;

