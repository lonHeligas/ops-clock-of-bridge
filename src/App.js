
import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button'
import Wrapper from './components/Wrapper'
import { Clock } from '@sujitsimon/react-flipclock';
import './styles/Clock.css'
import Upcoming from './components/Upcoming';



function App() {
  return (
    <Wrapper className="wrapper">
      <Clock className="clock-flip" config={{height: '175px', backgroundColor: '#92278f', textColor: '#8dc63f'}}/>
      {/* <div>
      <Button variant="contained">Hello World</Button>
    </div> */}
      <Upcoming />
    </Wrapper>


  )
  
}

export default App;
