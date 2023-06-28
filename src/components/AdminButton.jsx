import React from 'react';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#92278f',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});



const AdminButton = ()   => {


  return (
    <Button variant="contained" color="primary">Launch Admin Page</Button>
  )
}

export default AdminButton