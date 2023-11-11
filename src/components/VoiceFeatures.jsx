import React, { useEffect, useState } from 'react';
import "regenerator-runtime";
import { Box, Button, Typography } from '@mui/material'
import speech, { useSpeechRecognition } from 'react-speech-recognition'
import { Mic } from '@mui/icons-material';
import axios from 'axios';

const VoiceFeatures = () => {

    const { listening, transcript } = useSpeechRecognition();
    const [thinking, setThinking] = useState(false);
    const [aiText, setAiText] = useState('');

    const gptApi = 'https://api.openai.com/v1/chat/completions'
    const apiKey = ''
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    }

    let callGptApi = async (message) => {
        const dataToSend = {
            messages: [
                { role: "user", content: message }
            ],
            // model: 'gpt-3.5-turbo'
        };

        setThinking(true);
        const data = await axios.post(gptApi, dataToSend, { headers: headers })
            .then(response => {
                console.log(response.data)
            }).catch(error => console.log(error))

        setThinking(false)
        console.log(data);
        return data.choices[0].message.content;
    }

    useEffect(() => {
        if (!listening && transcript) {
            callGptApi(transcript)
                .then((response) => {
                    console.log(`Converting the response from API to Speech:`);
                    console.log(response);
                    const speechSynthesis = window.speechSynthesis;
                    const utterance = new SpeechSynthesisUtterance(response);
                    speechSynthesis.speak(utterance);
                    setAiText(response)
                })
        }
    }, [transcript, listening])
    return (
        <>
            {listening ? (<Typography variant='h7' color={'#fff'}>I am listening!</Typography>) : (<Typography variant='h7' color={'#fff'}>Click the ask button and ask me anything!</Typography>)}
            <Box sx={styles.voiceFeatures}>
                <Button variant='contained' startIcon={<Mic />} sx={{ width: 'auto', textTransform: 'none' }} onClick={() => speech.startListening()}>Ask me</Button>
                <Box sx={styles.transcriptBox}>
                    {transcript && <div>{transcript}</div>}
                    {thinking && <div>Thinking...</div>}
                    {aiText && <div>{aiText}</div>}
                </Box>
            </Box>
        </>
    )
}

export default VoiceFeatures

/** @type {import("@mui/material").SxProps} */
const styles = {
    voiceFeatures: {
        width: '100%',
        height: '100%',
        // border: '2px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    transcriptBox: {
        width: '100%',
        height: '100%',
        // border: '2px solid blue',
        borderRadius: '10px',
        color: '#000',
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#D4D4D4'
    }
}