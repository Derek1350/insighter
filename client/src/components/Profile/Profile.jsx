import { UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MobileNav from '../MobileNav/MobileNav';
import YouTubeProfile from './YouTubeProfile/YouTubeProfile';
import InstagramProfile from './InstagramProfile/InstagramProfile';

const Profile = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('facebook');

    const handlePlatformChange = (e) => {
      setSelectedPlatform(e.target.value);
    };
  
    const platformComponents = {
      facebook: <InstagramProfile />,
    //   instagram: (<InstaTrending />),
    //   x: <XTrending /> ,
      youtube: <YouTubeProfile />,
    };
  
  
    return (
      <section className='trending-container global-container'>
        <div className={"trending-content-container"}>
          <header className='overview-header-container'>
            <div className='overview-header'>
              <div className='overview-header-content'>
                <div className='overview-title'>
                  <h1>Profile</h1>
                  <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                    <img src={`/assets/social-icons/${selectedPlatform}.svg`} alt="" style={{marginLeft: "20px"}} height={20} width={20} />
                    <select className="overview-time-select" value={selectedPlatform} onChange={handlePlatformChange} style={{cursor: "pointer"}}>
                        <option style={{background: "black"}} value="facebook">Facebook</option>
                        <option style={{background: "black"}} value="instagram">Instagram</option>
                        <option style={{background: "black"}} value="x">X</option>
                        <option style={{background: "black"}} value="youtube">YouTube</option>
                    </select>
                  </div>
                </div>
                <span>See it All, Everywhere: Your Complete Social Media Archive</span>
              </div>
              {/* Mobile Nav */}
              <div className='mobile-nav'>
                <Link to='/'>
                  <img src="/assets/icons/logo.svg" alt="logo" width={150} height={70} />
                </Link>
              </div>
  
              <div className='nav-left-content'>
                <UserButton afterSignOutUrl='/' />
                <div className='ham'>
                  <MobileNav />
                </div>
              </div>
            </div>
          </header>
          <div className='trending-mobile-dropdown-container' style={{}}>
            <span>Select the Platform: </span>
            <div className='trending-mobile-dropdown glass'>
              <img src={`/assets/social-icons/${selectedPlatform}.svg`} alt="" style={{marginLeft: "20px"}} height={20} width={20}/>
              <select className="overview-time-select" value={selectedPlatform} onChange={handlePlatformChange} style={{cursor: "pointer"}}>
                  <option style={{background: "black"}} value="facebook">Facebook</option>
                  <option style={{background: "black"}} value="instagram">Instagram</option>
                  <option style={{background: "black"}} value="x">X</option>
                  <option style={{background: "black"}} value="youtube">YouTube</option>
              </select>
            </div>
          </div>
          <hr />
          <section className='trending-cards-container'>
            <div className='trending-content'>
              {platformComponents[selectedPlatform]}
            </div>
          </section>
        </div>
      </section>
    )
}

export default Profile