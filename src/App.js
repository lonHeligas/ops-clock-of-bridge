
import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button'
import Wrapper from './components/Wrapper'
import { Clock } from '@sujitsimon/react-flipclock';
import './styles/Clock.css'
import Upcoming from './components/Upcoming';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Admin from './components/Admin';
import AdminButton from './components/AdminButton';







function App() {

const AdminButtonClick = () => {
  console.log ("Hello there")
  useNavigate('/admin');
}


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
          <AdminButton onClick={AdminButtonClick}/>
        </Wrapper>}>
        
        </Route>
      </Routes>
          
    </HashRouter>




  )
  
}

export default App;
