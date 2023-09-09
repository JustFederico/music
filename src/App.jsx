import React from "react"
import Music from "./components/Music/Music"
import { Route, Routes} from 'react-router-dom';



  function App() {

    return (
      <>
        <Routes>
          <Route path='/' element={<Music/>} />
         
          
          
        </Routes>
      </>
    )
  }

export default App
