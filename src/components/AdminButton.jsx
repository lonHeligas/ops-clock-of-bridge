import React from 'react';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'


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
    <Button variant="contained" color="secondary">Launch Admin Page</Button>
  )
}

export default AdminButton