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
        Day: {traininglesson.data.day} Time: {traininglesson.data.time} {traininglesson.data.type} training
        Your instructor is: {traininglesson.data.instructor}
      </lineitem>
      </p>
    </training>
  )

  




}

export default Upcomingitem