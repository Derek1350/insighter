import './scheduler.css';
import React, { useState, useEffect,useCallback } from 'react';

export default function Scheduler() {
  const [today,setToday] = useState(new Date());
  const [month,setMonth] = useState();
  const [year,setYear] = useState();
  const [days,setDays] = useState([]);
  const [eventArr,setEventArr] = useState([]);
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
      prevDates.push(<div class="schedule-day schedule-prev-date" onClick={(event)=>addListner(event)}>{prevDays - x + 1}</div>);
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
          currentMonth.push(<div class="schedule-day schedule-today schedule-active schedule-event" onClick={(event)=>addListner(event)}>{i}</div>);
        } else {
          currentMonth.push(<div class="schedule-day schedule-today schedule-active" onClick={(event)=>addListner(event)}>{i}</div>);
        }
      }
      else{
        if (event && activeDate) {
          currentMonth.push(<div class="schedule-day schedule-event schedule-active" onClick={(event)=>addListner(event)}>{i}</div>);
        } else if(event) {
          currentMonth.push(<div class="schedule-day schedule-event" onClick={(event)=>addListner(event)}>{i}</div>);
        }
        else if(i==activeDate){
          currentMonth.push(<div class="schedule-day schedule-active" onClick={(event)=>addListner(event)}>{i}</div>);
          console.log("clicked");
        }
        else{
          currentMonth.push(<div class="schedule-day " onClick={(event)=>addListner(event)}>{i}</div>);
        }
      }

    }
  
    const nextDates = [];
    for (let j = 1; j <= nextDays; j++) {
      nextDates.push(<div class="schedule-day schedule-next-date" onClick={(event)=>addListner(event)}>{j}</div>);
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

  return (
    <>
      <div class="schedule-container">
        <div class="schedule-left">
          <div class="schedule-calendar">
            <div class="schedule-month">
              <i class="fas fa-angle-left schedule-prev" onClick={prevMonth}></i>
              <div class="schedule-date">{months[month] + " " + year}</div>
              <i class="fas fa-angle-right schedule-next" onClick={nextMonth}></i>
            </div>
            <div class="schedule-weekdays">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div class="schedule-days">
              {
                days.map((htmlString, index) => htmlString)
              }
            </div>
            <div class="schedule-goto-today">
              <div class="schedule-goto">
                <input type="text" placeholder="mm/yyyy" class="schedule-date-input" />
                <button class="schedule-goto-btn">Go</button>
              </div>
              <button class="schedule-today-btn" onClick={goToToday}>Today</button>
            </div>
          </div>
        </div>
        <div class="schedule-right">
          <div class="schedule-today-date">
            <div class="schedule-event-day">{activeDay.day}</div>
            <div class="schedule-event-date">{activeDay.date+" "+activeDay.month+" "+activeDay.year}</div>
          </div>
          <div class="schedule-events"></div>
          <div class="schedule-add-event-wrapper">
            <div class="schedule-add-event-header">
              <div class="schedule-title">Add Event</div>
              <i class="fas fa-times schedule-close"></i>
            </div>
            <div class="schedule-add-event-body">
              <div class="schedule-add-event-input">
                <input
                  type="text"
                  placeholder="Event Name"
                  class="schedule-event-name"
                />
              </div>
              <div class="schedule-add-event-input">
                <input
                  type="text"
                  placeholder="Event Time From"
                  class="schedule-event-time-from"
                />
              </div>
              <div class="schedule-add-event-input">
                <input
                  type="text"
                  placeholder="Event Time To"
                  class="schedule-event-time-to"
                />
              </div>
            </div>
            <div class="schedule-add-event-footer">
              <button class="schedule-add-event-btn">Add Event</button>
            </div>
          </div>
        </div>
        <button class="schedule-add-event">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </>
  );
}
