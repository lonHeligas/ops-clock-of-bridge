import React from 'react';
import "../styles/Upcomingitem.css"
// import Button from '@mui/material-next/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Moment from 'react-moment';

// get a date library 



const Upcomingitem = (traininglesson) => {

  console.log("trainingLesson is: ", traininglesson)
  
    JSON.stringify(traininglesson.data)      
  return (
    <training class="training-entry">
      <p>
      <lineitem>
        <day class="lineitem day">
          Day: {traininglesson.data.day} 
        </day>
        <time class="lineitem time">
          Time: {traininglesson.data.time}
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