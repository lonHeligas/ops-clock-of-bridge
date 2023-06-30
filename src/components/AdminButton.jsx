import React from 'react';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom';
import "../styles/Adminbutton.css"

const theme = createTheme({
  palette: {
    primary: {
      
      main: '#92278f',
    },
    secondary: {
      
      main: '#11cb5f',
    },
  },
});

const AdminButton = ()   => {
  return (
   
       <Link id="admin-button" to="/admin" relative="path" target="_blank">
         <Button variant="contained" color="secondary">Admin</Button>         
        </Link>
  )
}

export default AdminButton

