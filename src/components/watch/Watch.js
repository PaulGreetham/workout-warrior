/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import './Watch.css';

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

const Watch = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${apiKey}`
    );
    const data = await response.json();
    setVideos(data.items);
  };

  return (
    <div className="watch-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for workout videos"
        />
        <button type="submit">GAINS</button>
      </form>
      <div className="videos">
        {videos.map((video) => (
          <div className="video" key={video.id.videoId}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch;
