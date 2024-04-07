import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <>
      <div className="contactUs-details">
        <h1>Contact Us</h1>
        <p>Need to get in touch with us? Either fill out the form with your inquery or <br/> find the department email you'd like to contact below.</p>
      </div>
      <div className="contactUS-form">
        <div className="form-container">
          <form >
            <div className='name'><p>First name:</p><p>Last name:</p></div>
            <div className="input-name">
              <input type="text" placeholder='---' />
              <input type="text" placeholder='---' />
            </div>
            <div className="email">
              <p>Email*</p>
              <input type="email" placeholder='---'/><br />
              <p>What can we help you with?</p>
              <textarea  rows="10" placeholder='---' id='text'></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default ContactUs