import React, { Component } from 'react';
import { render } from 'react-dom';
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

// class App extends Component {
//   constructor() {
//     this.state = {
//       currentDateTime: Date().toLocaleString()

//     }

//   }

const Upcoming = () => {
  return TrainingList.training.map(Training => {
    return (
      // { this.state.currentDateTime}
      <Upcomingitem data={Training}/>            
    )

  } 
  )
}

export default Upcoming