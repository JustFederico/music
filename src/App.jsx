import React from "react"
import Music from "./components/Music/Music"
import MusicEntry from "./components/Music/MusicEntry";
import { Route, Routes} from 'react-router-dom';
import './App.css';



  function App() {

    return (
      <>
        <Routes>
          <Route path='/' element={<Music/>} />
          <Route path='/music/:id' element={<MusicEntry />} />
          
         
          
          
        </Routes>
      </>
    )
  }

export default App
