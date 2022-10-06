import React from 'react'
import './TopBar.css';

function TopBar() {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='button_wrapper'>
                <button className='header_button'>Übersicht</button>
                <button className='header_button' >Dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default TopBar