import React from 'react';
import "../styles/Upcomingitem.css"
import DatePicker from "react-datepicker"
import { useState, onChange } from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays"
import moment from 'moment';
// import fs from 'fs';
import "../styles/Upcomingitem.css"
import Upcoming from "./Upcoming"



// get the list of events like UpcomingItem and then change them to input fields



const TrainingEvent = () => {  
  const [startDate, setStartDate] = useState(0)
  const [instructorName, setInstructorName]  = useState("")
  const [trainingType, setTrainingType] = useState("")
  function handleChange(evt) {
    
    setInstructorName (evt.target.value);
  }
  function handleTrainingType(evt){
    setTrainingType (evt.nativeEvent.target.value);
    
  }
  
  const submitData = (event) => {
    event.preventDefault();
    // console.log('The submit button was clicked')
    // console.log(evt.nativeEvent.target.value)
    // console.log(startDate);
    // console.log(instructorName);
    // console.log(trainingType);

    const incomingEvent = {
      date: moment(startDate).toISOString(),
      type: trainingType,
      instructor: instructorName
    }    
    fetch("http://localhost:3003", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(incomingEvent),
    }).then(response => {
      alert("YE HAVE BEEN SAVED!");
    })
    // console.log (incomingEvent);     
    // const data = require('../../public/data/trainingtimes.json');
    // data.training.push(incomingEvent);    
    // console.log(data);

   
  }

  return (    
      <FormControl>       
        <p class='training-entry-prompt'>Enter a new training event here:</p>
      <lineitem class="training-entry entrybox item-box-larger" >
        <day class="lineitem-admin day">
          <text class='date-picker-text'>
            Day and Time: 
          </text>
          <DatePicker          
          selected={startDate} 
          onChange={(date) => setStartDate(date)}
          showTimeSelect 
          dateFormat="MMMM d // h:mm aa"   
          placeholderText="Select a day and time"
          minTime={setHours(setMinutes(new Date(), 0), 8)}
          maxTime={setHours(setMinutes(new Date(), 0), 23)}
          // excludeDates={[new Date(), subDays(new Date(), 10)]}
           
          />
          </day>
       
        <type class="lineitem-admin type radiobutton-group">
          <FormLabel class=" radio-label" id="training-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
            row
            aria-labelledby='training-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            >
          <FormControlLabel 
            value="Radio" 
            control={<Radio />} 
            label="Radio" 
            onChange={handleTrainingType}        
          />
          <FormControlLabel 
            value="Duckling" 
            control={<Radio />} 
            label="Duckling" 
            onChange={handleTrainingType}
          />
          <FormControlLabel 
            value="Miscellaneous" 
            control={<Radio />} 
            label="Miscellaneous"
            onChange={handleTrainingType}
          />
        
          </RadioGroup>
        </type>
        <instructor class="lineitem-admin instructor">
          Instructor:
          <input class="input-textfield"
            type="text"    
            onChange={handleChange}
            />
          
        </instructor>     
        <input class="submit-button" onClick={submitData} type="submit" value="Submit" />   
      </lineitem>
      
      <nexttrain class='training-entry-prompt'>
        <p>Upcoming Training Sessions:</p>
      </nexttrain>
      <Upcoming className="upcoming-block"/>

      </FormControl>  





    
  )
}

export default TrainingEvent