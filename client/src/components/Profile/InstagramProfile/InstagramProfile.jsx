import React, { useEffect, useState } from 'react';
import userData from '../../../constants/user_data.json';
import postData from "../../../constants/post_data.json";
import "./instagramprofile.css"

const InstagramProfile = () => {

  const [postData, setPostData] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/getInstaProfileData');
        const res = await fetch('http://localhost:5000/getInstaPostData');
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
        <>
            <div className='instagram-profile-container' style={{}}>
                {userData.map((data, index) => (
                    <div className='instagram-userdata-container glass' style={{}} key={index}>
                        <div className='instagram-userdata-content' style={{}}>
                            <img className='instagram-profile-img' style={{}} src="/images/dp.jpg" alt="" />
                            <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                <div className='instagram-username-data' style={{}}>
                                    <p className='instagram-profile-name' style={{}}>{data.name}</p>
                                    <p className='glass' style={{ padding: "0 10px", margin: "0", fontSize: "15px" }}>@{data.username}</p>
                                </div>
                                <div className='instagram-usercount-data' style={{}}>
                                    <p>Posts: {data.media_count}</p>
                                    <p>Followers: {data.followers_count}</p>
                                    <p>Following: {data.follows_count}</p>
                                </div>
                            </div>
                        </div>
                        <div className='instagram-usercount-data' id="mobile-instagram-usercount-data" style={{}}>
                            <p>Posts: {data.media_count}</p>
                            <p>Followers: {data.followers_count}</p>
                            <p>Following: {data.follows_count}</p>
                        </div>
                    </div>
                ))}
                <div className='instagram-userposts-container glass' style={{}}>
                    {postData.map((data, index) => (
                        <div className='instagram-userposts-content glass' style={{}} key={index}>
                            {data.media_url.includes('_video_') ? ( // Check if media_url includes '_video_'
                                <video className='instagram-userposts-data' src={data.media_url} style={{}} controls /> // Render video element
                            ) : (
                                <img className='instagram-userposts-data' src={data.media_url} style={{}} alt="" /> // Render image element
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default InstagramProfile;
// width:"28%", height: "60%"