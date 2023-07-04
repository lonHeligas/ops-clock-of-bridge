import React from 'react';
// import { render } from 'react-dom';
import "../styles/Clock.css"
// import Button from '@mui/material-next/Button';
import { useState } from 'react';
import { useContext } from 'react';
import TrainingList from '../data/trainingtimes.json';
import Upcomingitem from './Upcomingitem';
import moment from 'moment';

const FilteredList = TrainingList.training.filter((course) => {
  // console.log('moment comparison')
  // console.log(moment(course.date).unix() > moment().unix())
  
  return moment(course.date).unix() > moment().unix();
})
// console.log(FilteredList)

const SortedList = FilteredList.sort((a, b) => moment(a.date).unix() - moment(b.date).unix());
console.log('sorted list: ');
console.log(SortedList);



const Upcoming = () => {
  return SortedList.map(Training => {
    return (
      // { this.state.currentDateTime}
      <Upcomingitem data={Training}/>            
    )

  } 
  )
}

export default Upcoming