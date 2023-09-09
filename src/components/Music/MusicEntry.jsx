
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as contentful from 'contentful';

const MusicEntry = () => {
  const [musicEntry, setMusicEntry] = useState(null);
  const { id } = useParams(); // Get the entry's ID from the URL parameter

  const client = contentful.createClient({
    space: import.meta.env.VITE_APP_SPACE_ID,
    accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchMusicEntry = async () => {
      try {
        const response = await client.getEntry(id); // Fetch the entry by ID
        setMusicEntry(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMusicEntry();
  }, [client, id]);

  return (
    <div className="music-entry-container">
      {musicEntry ? (
        <div>
          <h2>{musicEntry.fields.title}</h2>
          <p>{musicEntry.fields.description}</p>
          {/* Render other content from the entry */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MusicEntry;
