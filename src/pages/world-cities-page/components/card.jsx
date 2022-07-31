import * as React from 'react';
import {
    Typography,
    Box,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import { Image, TypographyLimited } from '../../../components';

const City = ({ title, category, img, description }) => {
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        
        <Box sx={{ position: 'relative', width: '100%', pt: '95%' }}>
            <Image
                component="img"
                height="70"
                image="https://images.unsplash.com/photo-1471874708433-acd480424946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="europe"
                sx={{ position: 'absolute', top: 0, left: 0 }}
            />
        </Box>
        
        <CardContent sx={{ p: 2, flexGrow: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography gutterBottom variant='h5' component="div">
                    Lizard
                </Typography>
                <Typography gutterBottom variant='h5' component="div">
                    Kontinentas
                </Typography>
            </Box>
            <TypographyLimited variant="body2" color="text.secondary">{description}</TypographyLimited>
        </CardContent>
        
        <CardActions sx={{ p: 2, alignSelf: 'center' }}>
            <Button size="small" variant="contained">Rinktis miesta</Button>
            <Button size="small" variant="contained">Apie kontinenta</Button>
        </CardActions>
    </Card >

}

export default City;