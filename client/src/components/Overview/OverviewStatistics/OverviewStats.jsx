import React, { useState } from 'react'
import "./overview-stats.css"

const OverviewStats = () => {
    const [selectedTime, setSelectedTime] = useState('Today');
    const [selectedPlatform, setSelectedPlatform] = useState('Facebook');

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handlePlatformChange = (e) => {
        setSelectedPlatform(e.target.value);
    };
  return (
    <>
    <div className="overview-statistics-main" style={{display: "flex", justifyContent: "space-between", paddingBottom: "50px"}}>
        <div className="overview-statistics-container">
            <div className="overview-statistics-header">
                <span className="overview-statistics-title">Social Media Stats</span>
                <span className="overview-statistics-subtitle">Facebook engaged audiences and page impressions</span>
            </div>
            <div className="overview-statistics-info-section">
                <div className="overview-statistics-info-block">
                    <span className="overview-statistics-info-label">Engaged Audiences <span style={{color: "#bdbdbd"}}>(Last 2 Weeks)</span></span>
                    <span className="overview-statistics-info-value">-----</span>
                    <div className="overview-statistics-info-change">
                        <img src="/assets/icons/increase.svg" alt="inc" width={15} height={15} style={{marginRight: "3px"}} />
                        <span className="overview-statistics-info-percent" style={{color: "#30ab38"}}>---%</span>
                        <span> vs ------ prev. 2 weeks</span>
                    </div>
                </div>
                <div className="overview-statistics-info-block">
                    <span className="overview-statistics-info-label">Page Impressions <span style={{color: "#bdbdbd"}}>(Last 2 Weeks)</span></span>
                    <span className="overview-statistics-info-value">------</span>
                    <div className="overview-statistics-info-change">
                        <img src="/assets/icons/decrease.svg" alt="dec" width={15} height={15} style={{marginRight: "3px"}} />
                        <span className="overview-statistics-info-percent" style={{color: "#ce3b3b"}}>---%</span>
                        <span> vs ------ prev. 2 weeks</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="overview-statistics-info">
            <div className="overview-statistics-controls">
                <img src="/assets/icons/calender.svg" alt="" height={20} width={20}/>
                <select className="overview-time-select" value={selectedTime} onChange={handleTimeChange} style={{cursor: "pointer"}}>
                    <option style={{background: "black"}} value="Today">Today</option>
                    <option style={{background: "black"}} value="Last-Week">Last Week</option>
                    <option style={{background: "black"}} value="1-Month">1 Month</option>
                    <option style={{background: "black"}} value="6-Months">6 Months</option>
                    <option style={{background: "black"}} value="1-Year">1 Year</option>
                    <option style={{background: "black"}} value="All-Time">All Time</option>
                </select>
                <img src={`/assets/social-icons/${selectedPlatform}.svg`} alt="" style={{marginLeft: "30px"}} height={20} width={20}/>
                <select className="overview-time-select" value={selectedPlatform} onChange={handlePlatformChange} style={{cursor: "pointer"}}>
                    <option style={{background: "black"}} value="facebook">Facebook</option>
                    <option style={{background: "black"}} value="instagram">Instagram</option>
                    <option style={{background: "black"}} value="x">X</option>
                    <option style={{background: "black"}} value="youtube">YouTube</option>
                </select>
            </div>
            <div className="overview-statistics-legend">
                <div className="overview-statistics-legend-item" >
                    <div className="overview-statistics-legend-marker"></div>
                    <span className="overview-statistics-legend-label">Engaged Audience</span>
                </div>
                <div className="overview-statistics-legend-item" >
                    <div className="overview-statistics-legend-marker" style={{backgroundColor: "#71e2fe"}}></div>
                    <span className="overview-statistics-legend-label">Page Impressions</span>
                </div>
            </div>
        </div>
    </div>
    <div className="overview-statistics-chart">
        <img src="/assets/graph.jpeg" alt="graph" />
    </div>
    </>
  )
}

export default OverviewStats