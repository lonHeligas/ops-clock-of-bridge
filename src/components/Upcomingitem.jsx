import React from 'react';
import "../styles/Upcomingitem.css"
// import Button from '@mui/material-next/Button';
import { useState } from 'react';
import { useContext } from 'react';
import Moment from 'react-moment';
// get a date library 





const Upcomingitem = (traininglesson) => {
  return (
    <training class="training-entry">      {
        JSON.stringify(traininglesson.data)      }
    </training>
  )

  




}

export default Upcomingitem