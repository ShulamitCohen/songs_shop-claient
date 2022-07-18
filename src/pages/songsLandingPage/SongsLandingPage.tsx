import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import Stack from '@mui/material/Stack';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import react from "react";
import { type } from '@testing-library/user-event/dist/type';
import { saveSongApi } from '../../api/songs.api'
import getAllSongs from '../../api/songs.api'
import { deleteSong } from '../../api/songs.api'
import deleteSongApi from '../../api/songs.api'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
//import EditSong from "../editSong/EditSong";
import EditSong from '../editSong/EditSong';
import { Alert } from "@mui/material";
//import SongModel from '../../model/SongModel.model'
import './SongsLandingPage'

export default function SongsLandingPage(): any {

  // const options = ['Option 1', 'Option 2'];
  // const [value, setValue] = useState<string | null>(options[0]);
  // const [inputValue, setInputValue] = useState('');

  var array: Song[] = [];

  const [songsList, setSongsList] = useState(array);

  useEffect(() => {
    //const songs = getAllSongs();
    const data = getAllSongsButItsNotWork();
    // const option=  getArtistNames();
  }, []);

  useEffect(() => {
    console.log(songsList);
  }, [songsList])

  const getAllSongsButItsNotWork = async () => {
    const songs = await getAllSongs();
    setSongsList(songs);
  }

  // const deleteSong = async (id: String) => {
  //   try {
  //     debugger
  //     const response = await deleteSongApi(id);
  //     getSongsList();
  //   }
  //   catch (err: any) {
  //     console.error(err);
  //   }
  // }

  const deleteItem = async (song: Song) => {
    try {
      const res = await deleteSong(song.id);
      getAllSongsButItsNotWork();
    }
    catch (error: any) {
      const data = getAllSongsButItsNotWork();
      console.log(error);
    };
  
  }

  let navigate = useNavigate();

  const AddNewSong = () => {
    navigate('/songs/AddSong', {});
  }

  const filterByArtist = async (artistName: String) => {
    const data = await getAllSongs();
    const artistToSearch = artistName.toUpperCase();
    if (typeof data !== 'undefined') {
      let temp: Song[] = [];
      let songs = data as Song[];
      for (let i = 0; i < songs.length; i++) {
        let a = songs[i].artist;
        console.log(a.toUpperCase());
        if (a.toUpperCase().startsWith(artistToSearch) === true) {
          temp.push(songs[i]);
        }
      }
      setSongsList(temp);
    }
  }

  const editItem = (song: Song) => {
    navigate('/songs/EditSong', { state: { song } });
  }

  type Song = {
    id: String,
    title: String,
    artist: String,
    genre: String,
    length: String,
    price: String
  };

  return (
    <div>
      <div>
        <br />
      </div>
      <TextField id="outlined-basic" label="Search by Artist" variant="outlined" placeholder="Search by Artist"
        onChange={(e) => { filterByArtist(e.target.value) }} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-cell">title</TableCell>
              <TableCell className="table-cell" align="right">artist</TableCell>
              <TableCell className="table-cell" align="right">price</TableCell>
              {/* <TableCell align="right"></TableCell>
             <TableCell align="right"></TableCell> */}
              {/* <TableCell align="right">price</TableCell>  */}
              {/* <TableCell align="right">length</TableCell>  */}
              {/* <TableCell align="right">חחחחח</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {songsList.map((s: Song) => (
              <TableRow
                key={"s._id"}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"  >
                  <DeleteIcon onClick={() => deleteItem(s)} />
                  <ModeEditOutlineIcon onClick={() => editItem(s)} />
                  {s.title} </TableCell>
                <TableCell align="right">{s.artist}</TableCell>
                <TableCell align="right">{s.price}</TableCell>
                {/* <TableCell align="right">{}</TableCell> 
                <TableCell align="right">{}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer><br />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => AddNewSong()}>New Song</Button>
      </Stack>
    </div >
  );
}

