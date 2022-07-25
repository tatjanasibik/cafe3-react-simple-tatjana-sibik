import React from 'react';
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Hidden,
} from '@mui/material';

const card = (props) => {
    console.log(props)
    return (
        <Card sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    pt: '100%',
                }}>
                    <CardMedia
                        component="img"
                        height="70"
                        image="https://images.unsplash.com/photo-1471874708433-acd480424946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="europe"
                        sx={{ position: 'absolute', top: 0, left: 0, height: '50%', width: '100%'}}
                    />
                </Box>
                <CardContent sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography gutterBottom variant='h5' component="div">
                            Lizard
                        </Typography>
                        <Typography gutterBottom variant='h5' component="div">
                            Kontinentas
                        </Typography>
                    </Box>
                    <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        Text
                    </Typography>
                </CardContent>
            </Box>
            <CardActions sx={{ p: 2, alignSelf: 'center' }}>
                <Button size="small" variant="contained">Rinktis miesta</Button>
                <Button size="small" variant="contained">Apie kontinenta</Button>
            </CardActions>
        </Card >
    )
}

export default card