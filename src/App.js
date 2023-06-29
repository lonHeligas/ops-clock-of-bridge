
import './App.css';
import * as React from 'react';
// import Button from '@mui/material/Button'
import Wrapper from './components/Wrapper'
import { Clock } from '@sujitsimon/react-flipclock';
import './styles/Clock.css'
import Upcoming from './components/Upcoming';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Admin from './components/Admin';
import AdminButton from './components/AdminButton';







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
          {/* backgroundColor: '#8dc63f', textColor: '#92278f' */}
       
          <Upcoming />
          <AdminButton>
            <Link to="{/admin}" relative="path" target="_blank"></Link>
          </AdminButton>
        </Wrapper>}>
        
        </Route>
      </Routes>
          
    </HashRouter>




  )
  
}

export default App;
