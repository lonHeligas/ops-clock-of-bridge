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
import moment from 'moment';
// import fs from 'fs';



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
    console.log('The submit button was clicked')
    // console.log(evt.nativeEvent.target.value)
    // console.log(startDate);
    // console.log(instructorName);
    // console.log(trainingType);

    const incomingEvent = {
      date: moment(startDate).toISOString(),
      type: trainingType,
      instructor: instructorName
    }    
    // console.log (incomingEvent); 
    
    const data = require('../data/trainingtimes.json');
    data.training.push(incomingEvent);
    console.log(data);

    // fs.writeFileSync('../data/trainingtimes.json', JSON.stringify(data, null, 2))


    
  }






  return (    
      <FormControl>
       <p>
      <lineitem class="training-entry">
        <p>Enter a new training event here:</p>
        <day class="lineitem day">
          Day and Time:
          <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)}
          showTimeSelect 
          dateFormat="MMMM d // h:mm aa"   
          placeholderText="Select a day and time"       
          />
          </day>
       
        <type class="lineitem type">
          <FormLabel id="training-row-radio-buttons-group-label">Training:</FormLabel>
            <RadioGroup
            row
            aria-labelledby='training-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            >
          <FormControlLabel 
            value="radio" 
            control={<Radio />} 
            label="Radio" 
            onChange={handleTrainingType}        
          />
          <FormControlLabel 
            value="duckling" 
            control={<Radio />} 
            label="Duckling" 
            onChange={handleTrainingType}
          />
          <FormControlLabel 
            value="miscellaneous" 
            control={<Radio />} 
            label="Miscellaneous"
            onChange={handleTrainingType}
          />
        
          </RadioGroup>
        </type>
        <instructor class="lineitem instructor">
          Instructor:
          <input 
            type="text"    
            onChange={handleChange}
            />
          
        </instructor>     
        <input onClick={submitData} type="submit" value="Submit" />   
      </lineitem>
      </p>
      </FormControl>  


    
  )
}

export default TrainingEvent