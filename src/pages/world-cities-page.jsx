import React, {useState, useEffect} from 'react';
import Card from '../components/card';
import { Grid, Box } from '@mui/material';

const WorldCitiesPage = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone=Europe')
      .then(res => res.json())
      .then(fetchedContinents => setContinents(fetchedContinents))
  }, []);


  return (
    <>
      {/*<pre>
        {JSON.stringify(continents, null, 4)}
  </pre>*/}
      <Grid container spacing={2} sx={{py: 3, px: 2}}>
        {continents.map(continent => (
          <Grid key={continent.id} item sx={12} sm={6} md={6} lg={4} xl={4} sx={{alignSelf: 'stretch'}}>
            <Card {...continent}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}


export default WorldCitiesPage;

