import { MenuTwoTone } from '@mui/icons-material';
import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='sticky' sx={styles.appBar}>
            <Container maxWidth='xl'>
                <Toolbar>
                    {/* <IconButton color='secondary'>
                        <MenuTwoTone />
                    </IconButton> */}
                    <Box component='img' sx={styles.appLogo} src='/src/assets/Pai_logo.PNG' />
                    <Typography variant='h5' sx={styles.appName} component={Link} to={'/'}>P-ai</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: '#0a003d',
    },
    appLogo: {
        width: { xs: 50, md: 80 },
        borderRadius: 2,
        ml: 2,
        cursor: 'pointer'
    },
    appName: {
        display: { xs: 'none', md: 'inline' },
        color: '#fff',
        textDecoration: 'none',
        cursor: 'pointer'
    }
}