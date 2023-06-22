import '../App.css';
import React from 'react';
import { Clock } from '@sujitsimon/react-flipclock';
import '../styles/Clock.css'
import TrainingEvent from './TrainingEvent';
import Wrapper from './Wrapper';







// one component that's an editable form for one event
// map the data from the json into as many forms as you have events
// onChange prop on the form (and have it spit out its own json) into that onChange event
// the Admin component should save the updates to the json file whenever it gets the updates



const Admin = () => {
 return (
  <Wrapper>
  <Clock className="clock-flip" config={{height: '100px', backgroundColor: '#92278f', textColor: '#8dc63f'}}/>
  <TrainingEvent />

  </Wrapper>
 )
}


export default Admin