import React from 'react';
// import { render } from 'react-dom';
import "../styles/Clock.css"
// import Button from '@mui/material-next/Button';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
// import TrainingList from '../data/trainingtimes.json';
import Upcomingitem from './Upcomingitem';
import moment from 'moment';

const Upcoming = () => {

  const [TrainingList, setTrainingList] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3003").then(response => {
      // console.log('the response' , response);
      response.json().then(incomingJson =>{
        console.log(incomingJson);
        setTrainingList(incomingJson.training)        
      })
    })
  }
  
  useEffect(() => {
    // console.log('useeffect')
    fetchData();
    setInterval(fetchData, 5000);
  } ,[] 
  )

   

  const FilteredList = TrainingList.filter((course) => {
    // console.log('moment comparison')
    // console.log(moment(course.date).unix() > moment().unix())  
    return moment(course.date).unix() > moment().unix();
  })
  // console.log(FilteredList)
  
  const SortedList = FilteredList.sort((a, b) => moment(a.date).unix() - moment(b.date).unix());
  console.log('sorted list: ');
  console.log(SortedList);

  return SortedList.slice(0,3).map(Training => {
    return (
      // { this.state.currentDateTime}
      <Upcomingitem data={Training}/>            
    )

  } 
  )
}

export default Upcoming