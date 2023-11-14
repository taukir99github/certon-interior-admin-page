import React from 'react'
import './SideComponents.css'

const SideComponent = () => {
  return (
    <div className='wrapper'>
      <div className="card1">
        <p>Projects</p> 
      </div>
      <div style={{height:'10px'}}></div>
      <div className="card1">
        <p>Notification</p> 
      </div>
      <div style={{height:'10px'}}></div>
      <div className="card1">
        <p>Add Projects</p> 
      </div>

    </div>
  )
}

export default SideComponent
