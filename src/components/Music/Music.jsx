import React, { useEffect, useState, useCallback } from 'react';
import * as contentful from 'contentful';

const Music = () => {
  const [isMusicLoading, setIsMusicLoading] = useState(false);
  const [musicSlides, setMusicSlides] = useState([]);
  
  const client = contentful.createClient({
    space: import.meta.env.VITE_APP_SPACE_ID,
    accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
  });

  const getMusicSlides = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: 'music' });
      const responseData = response.items;
      setMusicSlides(responseData); // Update state with fetched data
      setIsMusicLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [client]);

  useEffect(() => {
    getMusicSlides();
  }, [getMusicSlides]);

  return (
    <div className="music-container">
      <h1>Music</h1>
      {isMusicLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {musicSlides.map((slide) => (
            <li key={slide.sys.id}>
              <h2>{slide.fields.title}</h2>
              <img
                src={slide.fields.image.fields.file.url}
                alt={slide.fields.title}
                width="200" // Adjust the width as needed
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Music;


{/*functinlcomponent ..rafce...extension ES/ React Snippet*/}

{/*initializing musicSlides(whatwegetfromtheslides) as an empty array*/}

{/*should i set as false?..hmm..as soon as carousel slides are fetched from the server ill set value as true. and when 
slides are alr loades ill set it back as false

fetch data from contentful via promises or asynch await */}
