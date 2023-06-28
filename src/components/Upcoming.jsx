import React from 'react';
import "../styles/Clock.css"
// import Button from '@mui/material-next/Button';
import { useState } from 'react';
import { useContext } from 'react';
import TrainingList from '../data/trainingtimes.json';
import Upcomingitem from './Upcomingitem';
import moment from 'moment';



const SortedList = TrainingList.training.sort((a, b) => moment(a.date).unix() - moment(b.date).unix());
console.log('sorted list: ');
console.log(SortedList);



const Upcoming = () => {
  return TrainingList.training.map(Training => {
    return (
      <Upcomingitem data={Training}/>      
    )

  } 
  )
}

export default Upcoming