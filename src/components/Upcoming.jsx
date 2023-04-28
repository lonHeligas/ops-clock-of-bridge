import React from 'react';
import "../styles/Clock.css"
// import Button from '@mui/material-next/Button';
import { useState } from 'react';
import TrainingList from '../data/trainingtimes.json';
import Upcomingitem from './Upcomingitem';




const Upcoming = () => {
  return TrainingList.training.map(Training => {
    return (
      <Upcomingitem data={Training}/>

      
    )

  } 
  )
}

export default Upcoming