import * as React from 'react';
import { Box, TextField, Paper, Button, Typography, MenuItem } from '@mui/material';

const choices = [
    {
        value: 'kas savaitę',
        label: 'kas savaitę',
    },
    {
        value: 'kas mėnesį',
        label: 'kas mėnesį',
    },

];

const ContactPage = () => {
    const [fullname, setFullname] = React.useState('Vardas');
    const [email, setEmail] = React.useState('Email');
    const [choice, setChoice] = React.useState(choices[0]);
    return (
        <Box sx={{ pt: 7 }}>
            <Paper
                elevation={3}
                sx={{
                    mt: 4,
                    p: 3,
                    width: 500,
                    mx: "auto"
                }}>
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 3,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        align="center"
                    >
                        Kontaktiniai duomenys mūsų naujienoms</Typography>
                    <TextField
                        label="Vardas"
                        fullWidth
                        variant="filled"
                        name="fullName"
                        onChange={(event) => setFullname(event.target.value)}
                        value={fullname}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <TextField
                        label="Kaip dažnai"
                        select
                        fullWidth
                        variant="filled"
                        name="choice"
                        onChange={(event) => setChoice(event.target.value)}
                        value={choice}
                    >
                        {
                            choices.map(({value, label}) => <MenuItem key={value} value={value}>{label}"</MenuItem>)
                        }
                    </TextField>
                    <Button type="submit" variant="contained" size="large">Patvirtinti duomenis</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default ContactPage;