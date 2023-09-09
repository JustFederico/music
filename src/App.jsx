import React from "react"
import Music from "./components/Music/Music"



function App() {
  const headingStyle = {
    color: "white",        
    backgroundColor: "blue",  
    padding: "10px",      // Padding around the text
    textAlign: "center"  // Text alignment
  };


  return (
    <>
      <div>
       <h1 style={headingStyle}>World of Music</h1>
       <Music />
       
       
      </div>
     
    </>
  )
}

export default App
