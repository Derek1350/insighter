import React, { useState, useEffect } from 'react';
import "./youtubeprofile.css"

function YouTubeProfile() {
  const [profileData, setProfileData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/getYTProfileData');
        const res = await fetch('http://localhost:5000/getYTPostData');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await response.json();
        const jsone = await res.json();
        json.creationDate = new Date(json.creationDate).toLocaleDateString();
        setProfileData(json);
        setPostData(jsone);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!profileData) return null;
  console.log(profileData)

  return (
    <div className='glass' style={{padding: "15px", display: "flex", background: "#0f121a"}}>
      <div className='yt-img-container'>
        <img className='youtube-profile-img' src="/images/yt-logo.jpg" alt="" />
      </div>
      <div className='hello' style={{display: "flex", flexWrap: "wrap", width: "100%"}}>
        <p>Channel Title: {profileData.Title}</p>
        <p>Username: @sapphire7861</p>
        <p>Creation Date: {profileData.creationDate}</p>
        <p>Subscribers: {profileData.subscribers}</p>
        <p>Total Videos: {profileData.totalVideos}</p>
        <p>Total Views: {profileData.totalViews}</p>
      </div>
      <div>
      </div>
    </div>
  );
}

export default YouTubeProfile;
