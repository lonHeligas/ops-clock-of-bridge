import React from 'react';
import "../styles/Upcomingitem.css"
import DatePicker from "react-datepicker"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "react-datepicker/dist/react-datepicker.css";


// get the list of events like UpcomingItem and then change them to input fields


const TrainingEvent = () => {
const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 9));
  return (
    <div> 
      <FormControl>
       <p>
      <lineitem class="training-entry">
        <p>Enter a new training event here:</p>
        <day class="lineitem day">
          Day and Time:
          <DatePicker 
          showTimeSelect
          selected={startDate} 
          onChange={(date) => setStartDate(date)} />
          </day>
       
        <type class="lineitem type">
          <FormLabel id="training-row-radio-buttons-group-label">Training:</FormLabel>
          <RadioGroup
          row
          aria-labelledby='training-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
          >
             <FormControlLabel value="female" control={<Radio />} label="Radio" />
        <FormControlLabel value="male" control={<Radio />} label="Duckling" />
        <FormControlLabel value="other" control={<Radio />} label="Something Else" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
          </RadioGroup>
        </type>
        <instructor class="lineitem instructor">
          Instructor:
          <input type="text" >
          </input>
        </instructor>     
        <input type="submit" value="Submit" />   
      </lineitem>
      </p>
      </FormControl>          
    </div>
  )
}

export default TrainingEvent