import React, { useEffect, useState, useCallback } from 'react'
import * as contentful from 'contentful'



const Music = () => {
  const [isMusicLoading, setIsMusicLoading] = useState(false) 
  const [musicSlides, setMusicSlides] = useState([]) 
const client = contentful.createClient({
    space: process.env.VITE_APP_SPACE_ID,
    accessToken: process.env.VITE_APP_ACCESS_TOKEN

})

  const getMusicSlides = useCallback (async () => {
    try {
      const response = await client.getEntries({content_type: 'music'})
      const responseData = response.items
      console.log (responseData)
      

    } catch (error) {
      console.log(error)
    }

  }, [])
{/*no dependency so ill putt an empty arrray*/}
 

  useEffect (() => {
    getMusicSlides()
  }, [getMusicSlides]
  )
  return (
    
    <div>
      <h1>Music</h1>
      </div>
  )
}

export default Music

{/*functinlcomponent ..rafce...extension ES/ React Snippet*/}

{/*initializing musicSlides(whatwegetfromtheslides) as an empty array*/}

{/*should i set as false?..hmm..as soon as carousel slides are fetched from the server ill set value as true. and when 
slides are alr loades ill set it back as false

fetch data from contentful via promises or asynch await */}
