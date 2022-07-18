import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddSong } from './pages/addSong/AddSong';
//import SongsLandingPage from './pages/songsLandingPage/SongsLandingPage/';
import SongsLandingPage from './pages/songsLandingPage/SongsLandingPage'
import EditSong from './pages/editSong/EditSong';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App(): JSX.Element {
  ;
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<SongsLandingPage/>} />
      <Route path="/songs/addSong" element={<AddSong/>} />
      <Route path="/songs/editSong" element={<EditSong/>} />
    </Routes>
      {/* <AddSong/> */}
      {/* <EditSong/> */}
        {/* <SongsLandingPage/> */}
    </div>
  );
}

export default App;