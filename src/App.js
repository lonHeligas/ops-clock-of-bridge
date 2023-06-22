
import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button'
import Wrapper from './components/Wrapper'
import { Clock } from '@sujitsimon/react-flipclock';
import './styles/Clock.css'
import Upcoming from './components/Upcoming';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';





function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/admin" element={
          <Wrapper className="wrapper">
            <Admin>
              
            </Admin>
        </Wrapper>}>        
        </Route>
        
        <Route path="/" element={
          <Wrapper className="wrapper">
          <Clock className="clock-flip" config={{height: '175px', backgroundColor: '#92278f', textColor: '#8dc63f'}}/>
       
          <Upcoming />
        </Wrapper>}>
        
        </Route>
      </Routes>
          
    </HashRouter>




  )
  
}

export default App;
