import "./overview-social.css"

const OverviewSocial = () => {
  return (
    <>
        <div className="overview-social-container">
            <div className="overview-social-content">
                <div className='overview-social'>
                    <img src="/assets/social-icons/facebook.svg" alt="" width={20} height={20}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">Facebook</span>
                    </span>
                </div>
                <div className="overview-social-count">
                    {/* <span className="overview-followers-count">192.8K</span>
                    <span className="overview-followers-text">FOLLOWERS</span> */}
                    <button style={{border: "none", outline: "none", background: "linear-gradient(to right, #06a9f4, #5239d8)", color:"#fff", borderRadius:"25px", padding:"10px", width: "8rem", width: "8rem"}}>Connect</button>
                </div>
            </div>



            <div className="overview-social-content">
                <div className='overview-social'>
                    <img src="/assets/social-icons/x.svg" alt="" width={20} height={20}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">X</span>
                    </span>
                </div>
                <div className="overview-social-count">
                    {/* <span className="overview-followers-count">240.6K</span>
                    <span className="overview-followers-text">FOLLOWERS</span> */}
                    <button style={{border: "none", outline: "none", background: "linear-gradient(to right, #06a9f4, #5239d8)", color:"#fff", borderRadius:"25px", padding:"10px", width: "8rem"}}>Connect</button>
                </div>
            </div>



            <div className="overview-social-content">
                <div className='overview-social'>
                    <img src="/assets/social-icons/instagram.svg" alt="" width={24} height={24}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">Instagram</span>
                    </span>
                </div>
                <div className="overview-social-count">
                    {/* <span className="overview-followers-count">586.4K</span>
                    <span className="overview-followers-text">FOLLOWERS</span> */}
                    <button style={{border: "none", outline: "none", background: "linear-gradient(to right, #06a9f4, #5239d8)", color:"#fff", borderRadius:"25px", padding:"10px", width: "8rem"}}>Connect</button>
                </div>
            </div>



            <div className="overview-social-content">
                <div className='overview-social'>
                    <img src="/assets/social-icons/youtube.svg" alt="" width={20} height={20}/>
                    <span className='overview-social-name'>
                        <span>Phoenix</span>
                        <span className="overview-social-platform">YouTube</span>
                    </span>
                </div>
                <div className="overview-social-count">
                    {/* <span className="overview-followers-count">928.3K</span>
                    <span className="overview-followers-text">SUBSCRIBERS</span> */}
                    <button style={{border: "none", outline: "none", background: "linear-gradient(to right, #06a9f4, #5239d8)", color:"#fff", borderRadius:"25px", padding:"10px", width: "8rem"}}>Connect</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default OverviewSocial