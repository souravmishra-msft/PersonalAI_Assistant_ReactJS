import { Box, Typography } from '@mui/material'
import React from 'react'
import VoiceFeatures from './VoiceFeatures'

const MainContainer = () => {
    return (
        <Box sx={styles.mainContainer}>
            <Box sx={styles.assistantContainer}>
                <Typography variant='h2' color={'#fff'}>Personal AI Assistant</Typography>
                <VoiceFeatures />
            </Box>
        </Box>
    )
}

export default MainContainer

/** @type {import("@mui/material").SxProps} */
const styles = {
    mainContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    assistantContainer: {
        width: '60%',
        height: '80vh',
        border: '5px solid #C62DFF',
        borderRadius: '20px',
        marginTop: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a003d',
        padding: '20px'
    },

}