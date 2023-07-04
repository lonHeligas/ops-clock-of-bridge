import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Clock } from '@sujitsimon/react-flipclock'
import '../styles/Clock.css'
import opslogo from '../media/logo_con_operations.png'
import '../styles/main.css'

class ClockBanner extends Component {
  render (){
    return (
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <img src={opslogo} className="ops-logo" width="50%"/>
        <clockcontainer class='clock-container'>
              <Clock className="clock-flip" config={{height: '175px', backgroundColor: '#92278f', textColor: '#8dc63f'}}/>
        </clockcontainer>    
      </div>
    )
  }
}

export default ClockBanner