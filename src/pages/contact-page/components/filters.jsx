import * as React from 'react';

import {
    Box,
    Typography,
    Drawer,
    Divider,
    useMediaQuery,
    Slider,
    FormControl,
    IconButton,
    Autocomplete,
    TextField,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import theme from '../../../styles/theme';

const categories = [
    { id: '1', label: 'America' },
    { id: '2', label: 'Asia' },
    { id: '3', label: 'Europe' },
];

const reasons = [
    { value: 'I am leaving there', label: 'gyvenu ten' },
    { value: 'My ... leaves there', label: 'ten gynena mano giminės' },
    { value: 'Ill travel there', label: 'keliausiu ten' },
    { value: 'Just for fun', label: 'tiesiog įdomu' },
]

const Filters = () => {
    const drawerWidth = 280;
    const isExtraLarge = useMediaQuery((theme) => theme.breakpoints.up('xxl'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [kmRange, setKmRange] = React.useState([0, 50000]);
    const [category, setCategory] = React.useState(null);
    const [reason, setReason] = React.useState(null);

    return (
        <>
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
                    <Typography variant='h4'>Filtras</Typography>
                    <Divider sx={{ my: 2 }} />
                    <FormControl sx={{ width: '100%' }}>
                        <Typography variant="h6" sx={{}}>Atstumas nuo Jūsų dabartinės vietos, km</Typography>
                        <Slider
                            value={kmRange}
                            min={0}
                            max={50000}
                            onChange={(_, newKmRange) => setKmRange(newKmRange)}
                            valueLabelDisplay="on"
                            sx={{ mt: 4 }}
                        />
                    </FormControl>
                    <Divider sx={{ my: 2 }} />
                    <Autocomplete
                        disablePortal
                        options={categories}
                        sx={{ width: '100%' }}
                        value={category}
                        onChange={(_, newCategory) => setCategory(newCategory)}
                        renderInput={({
                            InputLabelProps,
                            InputProps,
                            fullWidth,
                            id,
                            inputProps,
                        }) => (
                            <TextField
                                InputLabelProps={InputLabelProps}
                                InputProps={InputProps}
                                fullWidth={fullWidth}
                                id={id}
                                inputProps={inputProps}
                                label="Kategorija"
                            />
                        )}
                    />
                    <Divider sx={{ my: 2 }} />
                    <FormControl>
                        <FormLabel>Domiuosi, nes...</FormLabel>
                        <RadioGroup
                            name="reason"
                            value={reason}
                            onChange={(_, newReason) => setReason(newReason)}
                        >
                            {reasons.map(
                                ({ value, label }) => 
                                <FormControlLabel value={value} control={<Radio />} label={label} />
                            )}
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Drawer>
        </>
    )
}

export default Filters