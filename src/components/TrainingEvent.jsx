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


// get the list of events like UpcomingItem and then change them to input fields


const TrainingEvent = () => {
const [startDate, setStartDate] = useState(new Date());
  return (
    <div> 
      <FormControl>
       <p>
      <lineitem class="training-entry">
        <p>Enter a new training event here:</p>
        <day class="lineitem day">
          Day:
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </day>
        <time class="lineitem time">
          Time:
          <input type="text" >
            </input>
        </time>
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