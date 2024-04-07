import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './youtube-trending.css';

const YouTubeTrending = () => {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [category, setCategory] = useState('0');

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;


  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/videos',
          {
            params: {
              part: 'snippet,statistics',
              chart: 'mostPopular',
              regionCode: 'IN',
              maxResults: 15,
              key: apiKey,
              videoCategoryId: category,
            },
          }
        );
        setTrendingVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching trending videos:', error);
      }
    };

    fetchTrendingVideos();
  }, [category]);

  const playVideo = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div className='trending-youtube-container'>
      {/* <h1>Trending YouTube Videos</h1> */}
      <div className='trending-youtube-headline-container'>
        <h1>Get the trending videos on YouTube</h1>
        <div className='glass trending-youtube-category-container'>
          <img src={`/assets/youtube-category-icons/trending-${category}.png`} style={{marginTop: "2px"}} alt="" width={24} height={24}/>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="0">All</option>
            <option value="10">Music</option>
            <option value="20">Gaming</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="trending-yt-videos">
        {trendingVideos.map((video) => (
          <div key={video.id} className="" style={{background: "linear-gradient(to right, #141e30, #0f121a)", borderRadius: "20px"}}>
            <div className='trending-yt-video glass'>
                <YouTube videoId={video.id} opts={{}} />
                <div>
                    <h2 style={{margin: "0"}}>{video.snippet.title}</h2>
                    <p>Channel: {video.snippet.channelTitle}</p>
                    <p>Views: {video.statistics.viewCount}</p>
                    <p>Likes: {video.statistics.likeCount}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeTrending;
