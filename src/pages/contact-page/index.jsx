import * as React from 'react';
import { Box, TextField, Paper, Button, Typography, MenuItem, Drawer, Divider, IconButton, useMediaQuery } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import theme from '../../styles/theme';

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

const drawerWidth = 280;

const ContactPage = () => {
    const [fullname, setFullname] = React.useState('Vardas');
    const [email, setEmail] = React.useState('Email');
    const [choice, setChoice] = React.useState(choices[0]);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
    return (
        <Box sx={{ display: 'flex', gap: 2, py: 11, px: 4 }}>
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
                            choices.map(({ value, label }) => <MenuItem key={value} value={value}>{label}"</MenuItem>)
                        }
                    </TextField>
                    <Button type="submit" variant="contained" size="large">Patvirtinti duomenis</Button>
                </Box>
            </Paper>
            <Box sx={{
                display: 'flex', gap: 4, pt: 11, px: 4,
            }}>
                <IconButton
                    size="large"
                    color="primary"
                    variant="contained"
                    sx={{
                        position: 'fixed',
                        bottom: 15,
                        right: 15,
                        zIndex: 5000,
                        height: 60,
                        width: 60,
                        borderRadius: '50%',
                        display: { xxl: 'none' },
                    }}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                >
                    <TuneIcon />
                </IconButton>
                <Drawer
                    anchor='right'
                    variant={isExtraLarge ? "persistent" : "temporary"}
                    open={isExtraLarge || drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <Box sx={{ width: drawerWidth, p: 3, ...theme.mixins.toolbarOffset }}>
                        <Box sx={(theme) => theme.mixins.toolbarOffset} />
                        <Typography variant='h4'>Filtrai</Typography>
                        <Divider />
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
};

export default ContactPage;