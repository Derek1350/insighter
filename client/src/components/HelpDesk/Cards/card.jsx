import React from 'react'
import './card.css'

function Card({icon,name}) {
  return (
    <>
        <div className="card">
           <div className="elements">
                <div className="icon">{icon}</div>
                <p>{name}</p>
            </div> 
        </div>
    </>
  )
}

export default Card