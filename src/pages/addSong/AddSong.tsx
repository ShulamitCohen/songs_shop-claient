import PaidIcon from '@mui/icons-material/Paid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useEffect, useState } from 'react'
import { saveSongApi } from '../../api/songs.api';
import { useNavigate } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

export function AddSong() {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [genre, setGenre] = useState('');
    const [length, setLength] = useState<number>(0);;
    const [price, setPrice] = useState<number>(0);;

    useEffect(() => { 
        console.log(title, artist, genre, length, price); 
    },[title, artist, genre, length, price]);

    let navigate = useNavigate();

    async function saveSong() {
        console.log("saveSong");
        //     <TODO>
        //const data= await saveSongApi(title ,artist, genre, length ,price);
        // </TODO>
        await saveSongApi(title, artist, genre, length, price)
        
        navigate('/', {});

        // if(){
        //     alert("Song saved successfully")}
        // else{alert("Song not saved successfully")}
    }

    return (
        <div id="body">
            <span>Add New Song</span>
            <br />
            <br />
            <TextField
                id="input-with-icon-textfield"
                label="title"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <BorderColorIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={e => setTitle(e.target.value)}
                variant="standard"
            />
            <br />
            <br />
            <TextField
                id="input-with-icon-textfield"
                label="artist name"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PersonIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={e => setArtist(e.target.value)}
                variant="standard"
            />
            <br /><br />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">genre</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={genre}
                    label="genre"
                    onChange={e => setGenre(e.target.value)}

                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"POP"}>POP</MenuItem>
                    <MenuItem value={"ROCK"}>ROCK</MenuItem>
                    <MenuItem value={"RAP"}>RAP</MenuItem>
                    <MenuItem value={"CLASSICAL"}>CLASSICAL</MenuItem>
                </Select>
            </FormControl>
            <br /><br />
            <TextField
                id="input-with-icon-textfield"
                label="length"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <WatchLaterIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={e => setLength(parseInt(e.target.value))}
                variant="standard"
            /><br /><br />

            <TextField
                id="input-with-icon-textfield"
                label="price"
                type="number"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PaidIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={e => setPrice(parseInt(e.target.value))}

                variant="standard"
            />
            <Box sx={{ '& button': { m: 1 } }}>
                <Button variant="contained" size="medium" onClick={() => saveSong()}>
                    save
                </Button >
            </Box>
        </div>

    )
}