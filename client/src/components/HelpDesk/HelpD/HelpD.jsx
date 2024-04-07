import React from 'react'
import './HelpD.css'
import FAQSection from '../FAQs/Faqs'
import Card from '../Cards/card'
import ContactUs from '../contactus/ContactUs'
import { BiUser } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";

function HelpD() {
  return (
    <>
{/* top div!! containing - search bar and elements */}
<div className="helpdesk-main">

    <div className='top'>
      <div> 
        <div className="h1" ><h1 style={{fontSize : '50px'}}>How can we help you?</h1></div>
        <div className="search" >
            <div className='search-bar'>
              <div className="searchBox-container">
                <input type="search" className='search-box' placeholder='    Ask any question' />
                <button className='search-btn'>Search</button>
              </div>
            </div>
        </div>
        <div className="para"><p>or select any topic to quickly find the help you need.</p></div>
        <div className="cards">
          <Card icon={<BsGraphUpArrow />} name={"About Insighter"}/>
          <Card icon={<BiUser />} name={"Account"}/>
          <Card icon={<FiFlag />} name={"Getting Started"}/>
          <Card icon={<MdOutlineSecurity />} name={"Trust & Safety"}/>
        </div>
      </div>
    </div>

{/* bottom div!! containing - FAQs and Contact Us */}
    <div className='bottom'>
      {/* FAQ */}
      <div className="bottom-container">
        <div className='FAQ-Box-Container'>
          <div className="h2"><h2>Frequently Asked Questions</h2></div>
          <div className="FAQs-box">
            <FAQSection />
          </div>
        </div>

        {/* Contact Us */}
        <div className="contact-us">
          <ContactUs />
        </div>
      </div>
    </div>
</div>

    </>
  )
}

export default HelpD