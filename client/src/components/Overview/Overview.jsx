import { UserButton } from '@clerk/clerk-react'
import OverviewSocial from './OverviewSocial/OverviewSocial'
import "./overview.css";
import OverviewStats from './OverviewStatistics/OverviewStats';
import { Link } from 'react-router-dom';
import MobileNav from '../MobileNav/MobileNav';

const Overview = () => {

  const conatiner = document.querySelector('.overview-container');
  return (
    <section className='overview-container global-container'>
      <div className='overview-content' style={{}}>
        <header className='overview-header-container'>
          <div className='overview-header'>
            <div className='overview-header-content'>
              <div className='overview-title'>
                <h1>Overview</h1>
                <span style={{marginTop: "7px"}}>All Accounts</span>
              </div>
              <span>Take a closer look at how your social media accounts are performing</span>
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
      <div className='overview-header-content-mobile'>
        <div className='overview-title'>
          <h1>Overview</h1>
          <span>All Accounts</span>
        </div>
        <span>Take a closer look at how your social media accounts are performing</span>
      </div>
      <section className='overview-social-handles'>
        <OverviewSocial />
      </section>
      <section className='overview-statistics-main-container'>
        <OverviewStats/>
      </section>
      </div>
    </section>
  )
}

export default Overview
// #4a4d4d