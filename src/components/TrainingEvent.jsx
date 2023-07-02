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


// get the list of events like UpcomingItem and then change them to input fields




// const submitData = (event) => {
//   event.preventDefault();
//   console.log('The submit button was clicked')

// }

function handleChange(evt) {
  console.log("new value", evt.target.value);
}


const TrainingEvent = () => {
  instructorName = ""
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)    
  );  
    return (
    
      <FormControl>
       <p>
      <lineitem class="training-entry">
        <p>Enter a new training event here:</p>
        {/* <day class="lineitem day">
          Day and Time:
          <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)}
          showTimeSelect 
          dateFormat="MMMM d // h:mm aa"   
          placeholderText="Select a day and time"       
          />
          </day> */}
       
        {/* <type class="lineitem type">
          <FormLabel id="training-row-radio-buttons-group-label">Training:</FormLabel>
            <RadioGroup
            row
            aria-labelledby='training-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
            >
          <FormControlLabel 
            value="radtrain" 
            control={<Radio />} 
            label="Radio" 
            // onChange={this.onValueChange}        
          />
          <FormControlLabel 
            value="ducktrain" 
            control={<Radio />} 
            label="Duckling" 
            // onChange={this.onValueChange}
          />
          <FormControlLabel 
            value="other" 
            control={<Radio />} 
            label="Miscellaneous"
            // onChange={this.onValueChange}
          />
        
          </RadioGroup>
        </type> */}
        <instructor class="lineitem instructor">
          Instructor:
          <input 
            type="text"
            name="instructorName"
            value={this.instructorName}
            onChange={handleChange}
            />
          
        </instructor>     
        <input type="submit" value="Submit" />   
      </lineitem>
      </p>
      </FormControl>  


    
  )
}

export default TrainingEvent