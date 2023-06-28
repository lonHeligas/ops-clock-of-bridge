import React from 'react';
import "../styles/Upcomingitem.css"
// import Button from '@mui/material-next/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
// import Moment from 'react-moment';
import moment from 'moment';
// get a date library 



const Upcomingitem = (traininglesson) => {
const trainingDate = moment(traininglesson.data.date);

  // console.log("trainingLesson is: ", traininglesson)
  // console.log('training lesson');
  // console.log(moment(traininglesson.data.date));
  
    JSON.stringify(traininglesson.data)      
  return (
    <training class="training-entry">
      <p>
      <lineitem>
        <day class="lineitem day">
          Day: {trainingDate.format('dddd')}
        </day>
        <time class="lineitem time">
          Time: {trainingDate.format('h:mm a')}
        </time>
        <type class="lineitem type">
          {traininglesson.data.type} training
        </type>
        <instructor class="lineitem instructor">
          Your instructor is: {traininglesson.data.instructor}
        </instructor>
        
      </lineitem>
      </p>
    </training>
  )

  




}

export default Upcomingitem