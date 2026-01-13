import MyTodo from './Comp/todo.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import { ToastP } from './Comp/toastContext.js'
function App() {
  
  const theme = createTheme({
    typography: {
      fontFamily: ['RobotoCustom']
    }
  })
  return (
    
    <>
      <ThemeProvider theme={theme}>
        <ToastP>
     <div style={{
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     height: '100vh',
     backgroundColor: '#191b1f'
     }}>
       <MyTodo />
      </div>
      </ToastP>
      </ThemeProvider>
    </>
    
    );
}

export default App;
