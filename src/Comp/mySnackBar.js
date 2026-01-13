// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import { useState } from 'react'
export default function MySnackBar({ open, message }) {
  
  return (
    <div>
      <Snackbar open={open} 
      >
        <Alert
        severity="success"
          variant="filled"
          sx={{ width: '100%', bgcolor: message === 'Deleted succesfully' ? 'red' : 'green' }}
          
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}