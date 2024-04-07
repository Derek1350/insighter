import React, { useState } from 'react'
import "./popup.css"

const Popup = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('Facebook');

    const handlePlatformChange = (e) => {
        setSelectedPlatform(e.target.value);
    };
  return (
    <>
    <div className='popup-main'>
        <div className='glass popup-glass' >
            <div className='popup-topbar'>
                <div className='popup-logo-name'> 
                    <img src={`/assets/social-icons/${selectedPlatform}.svg`} alt="" style={{}} height={20} width={20}/>
                        <select className="overview-time-select" value={selectedPlatform} onChange={handlePlatformChange} style={{cursor: "pointer"}}>
                            <option style={{background: "black"}} value="facebook">Facebook</option>
                            <option style={{background: "black"}} value="instagram">Instagram</option>
                            <option style={{background: "black"}} value="x">X</option>
                            <option style={{background: "black"}} value="youtube">YouTube</option>
                        </select>
                </div>
                <div className='popup-icons'>
                    <img src={`/assets/social-icons/facebook.svg`} alt=""  height={20} width={20}/>
                    <img src={`/assets/social-icons/instagram.svg`} alt=""  height={20} width={20}/>
                    <img src={`/assets/social-icons/x.svg`} alt=""  height={20} width={20}/>
                    <img src={`/assets/social-icons/youtube.svg`} alt=""  height={20} width={20}/>
                    {/* close btn (cross wala icon) */}
                </div>
            </div>
            <div  className='popup-date-time'>
                <label htmlFor="date">Date: </label><input name='date' className='popup-input-box' type="date"  />
                <label htmlFor="time">Label: </label><input type="time" className='popup-input-box' name='time' />
            </div>
            <div className='choose-file'>
                {/* <form action="/action_page.php"> */}
                <form className='popup-file' action="/form/sumbit" method="get">
                    <label htmlFor="file">Upload Img/Video: </label>
                    <label class="label">
                        <input type="file" required/>
                        <span>Select a file</span>
                    </label>
                </form>
                    {/* <input type="submit" /> */}
                {/* </form> */}
            </div>
            <div className='popup-tag-input'>
                <input type="text" placeholder='Hashtags (eg: #india)' className='popup-hashtag-input' />
                <input type="text" className='popup-hashtag-input' placeholder='Tag others(eg: @athron)'/>
            </div>
            <div >
                <textarea className='popup-input' placeholder='Type content for post to be scheduled ...' name="" id="" rows={10}></textarea>
            </div>
            <button className='popup-schedule-btn'>Schedule</button>
        </div>
        </div>
    </>
  ) 
}

export default Popup