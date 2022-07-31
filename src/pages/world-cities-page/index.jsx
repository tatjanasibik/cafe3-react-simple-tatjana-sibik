import * as React from 'react';
import { Grid } from '@mui/material';
import CartContext from '../../contexts/cart-context';
import { City } from './components';

const WorldCitiesPage = () => {
  const cartContext = React.useContext(CartContext);
  const [continents, setContinents] = React.useState([]);

  console.log('WorldCitiesPage, cartContextValue:', cartContext);

  React.useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Azia/Bejing')
      .then(res => res.json())
      .then((x) => {
        const indexOfTimeStart = x.datetime.indexOf('T') +1;
        const timeString = x.datetime.slice(indexOfTimeStart, indexOfTimeStart +8);
        console.log(timeString);
      })
      // Promise.all  
  }, []);


  return (
    <>
      <pre>
        {JSON.stringify(continents, null, 4)}
      </pre>
      <Grid container spacing={2} sx={{py: 3, px: 2}}>
        {continents.map(continent => (
          <Grid key={continent.id} item xs={12} sm={6} md={6} lg={4} xl={4} sx={{alignSelf: 'stretch'}}>
            <City {...continent}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}


export default WorldCitiesPage;

