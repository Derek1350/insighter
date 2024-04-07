import './App.css'
import React, { useState, useEffect,useCallback } from 'react';
import Form from './Form/Form.jsx';

function App() {
  const [today,setToday] = useState(new Date());
  const [month,setMonth] = useState();
  const [year,setYear] = useState();
  const [days,setDays] = useState([]);
  const [eventArr,setEventArr] = useState([]);
  const [inputDateValue,setInputDateValue]=useState('');
  const [isEventActive, setIsEventActive] = useState(false);
  const [activeDay,setActiveDay] = useState({
                                              'date':'',
                                              'day':'',
                                              'month':'',
                                              'year':''
                                            });
  const [activeDate,setActiveDate] = useState(today.getDate());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName=[
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];
  
  useEffect(() => {
    setMonth(today.getMonth());
    setYear(today.getFullYear());
  }, [today]);

  useEffect(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;
  
    const prevDates = [];
    for (let x = day; x > 0; x--) {
      prevDates.push(<div className="schedule-day schedule-prev-date" onClick={(event)=>addListner(event)}>{prevDays - x + 1}</div>);
    }

    const currentMonth=[];
    for (let i = 1; i <= lastDate; i++){
      let event=false;
      eventArr.forEach((eventObj)=> {
        if(eventObj.day===i && eventObj.month===month+1 && eventObj.year===year){
          event=true;
        }
      });
      if(i===today.getDate() && month===today.getMonth() && year===today.getFullYear()){
        if (event) {
          currentMonth.push(<div className="schedule-day schedule-today schedule-active schedule-event" onClick={(event)=>addListner(event)}>{i}</div>);
        } else {
          currentMonth.push(<div className="schedule-day schedule-today schedule-active" onClick={(event)=>addListner(event)}>{i}</div>);
        }
      }
      else{
        if (event && activeDate) {
          currentMonth.push(<div className="schedule-day schedule-event schedule-active" onClick={(event)=>addListner(event)}>{i}</div>);
        } else if(event) {
          currentMonth.push(<div className="schedule-day schedule-event" onClick={(event)=>addListner(event)}>{i}</div>);
        }
        else if(i==activeDate){
          currentMonth.push(<div className="schedule-day schedule-active" onClick={(event)=>addListner(event)}>{i}</div>);
          console.log("clicked");
        }
        else{
          currentMonth.push(<div className="schedule-day " onClick={(event)=>addListner(event)}>{i}</div>);
        }
      }

    }
  
    const nextDates = [];
    for (let j = 1; j <= nextDays; j++) {
      nextDates.push(<div className="schedule-day schedule-next-date" onClick={(event)=>addListner(event)}>{j}</div>);
    }
  
    setDays((prevDates.concat(currentMonth)).concat(nextDates));
  }, [today, month, year,activeDate]);
  
  function prevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear((prevYear)=>prevYear-1);
    }
    else{
      setMonth((prevMonth)=> prevMonth-1);
    }
  }
  
  function nextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear((prevYear)=>prevYear+1);
    }
    else{
      setMonth((prevMonth)=> prevMonth+1);
    }    
  }
  function goToToday(){
    setToday(new Date());
  }
  
  
  useEffect(()=> {
    const day = new Date(year, month, activeDate);
    setActiveDay({'date':day.getDate(),'day':dayName[day.getDay()],'month':months[month],'year':day.getFullYear()});
  },[month,year,activeDate]);
  
  
  function addListner(e){
    console.log(e);
    if (e.target.classList.contains("schedule-prev-date")) {
      setActiveDate(e.target.innerHTML);
      prevMonth();
    } else if (e.target.classList.contains("schedule-next-date")) {
      setActiveDate(e.target.innerHTML);
      nextMonth();
    } else {
      setActiveDate(e.target.innerHTML)
    }
  }
  const handleDateChange = (event) => {
    inputDateValue.replace(/[^0-9/]/g, "");
    const newValue = event.target.value;
    const previousValue = inputDateValue;
    if (newValue.length === 2 && newValue.length > previousValue.length) {
      setInputDateValue(newValue + "/");
    } else if (newValue.length > 7) {
      setInputDateValue(newValue.slice(0, 7));
    } else if (newValue.length === 3 && newValue.length < previousValue.length) {
      setInputDateValue(newValue.slice(0, 2));
    } else {
      setInputDateValue(newValue);
    }
  }
  function goToCustom(){
    const inputtedDate=inputDateValue.split('/');
    console.log(inputtedDate);
    setMonth((Number(inputtedDate[0]))-1);
    setYear(Number(inputtedDate[1]));
  }

  return (
    <>
      <div className="schedule-container">
        <div className="schedule-left">
          <div className="schedule-calendar">
            <div className="schedule-month">
              <i className="fas fa-angle-left schedule-prev" onClick={prevMonth}></i>
              <div className="date">{months[month] + " " + year}</div>
              <i className="fas fa-angle-right schedule-next" onClick={nextMonth}></i>
            </div>
            <div className="schedule-weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="schedule-days">
              {
                days.map((htmlString, index) => (
                  <React.Fragment key={index}>
                    {htmlString}
                  </React.Fragment>
                ))
              }
            </div>
            <div className="schedule-goto-today">
              <div className="schedule-goto">
                <input type="text" placeholder="mm/yyyy" className="schedule-date-input" value={inputDateValue} onChange={(event)=>handleDateChange(event)}/>
                <button className="schedule-goto-btn" onClick={goToCustom}>Go</button>
              </div>
              <button className="schedule-today-btn" onClick={goToToday}>Today</button>
            </div>
          </div>
        </div>
        <div className="schedule-right">
          <div className="schedule-today-date">
            <div className="schedule-event-day">{activeDay.day}</div>
            <div className="schedule-event-date">{activeDay.date+" "+activeDay.month+" "+activeDay.year}</div>
          </div>
          <div className="schedule-events"></div>
          <div className={`schedule-add-event-wrapper ${isEventActive ? 'schedule-active' : ''}`}>
            <Form/>
          </div>
          <div className="schedule-right-footer">
            <div className="schedule-set-EventDate">
              <input type="date" className="set-post-date" />
            </div>
            <div className="schedule-set-EventTime">
              <input type="time" className="set-post-time" />
            </div>
            <div className="schedule-add-event">
              <button className="schedule-add-event-btn" onClick={()=>{
                if(isEventActive){
                  setIsEventActive(false);
                }
                else{
                  setIsEventActive(true);
                }
              }}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div> 
        </div> 
      </div>
    </>
  );
}

export default App
