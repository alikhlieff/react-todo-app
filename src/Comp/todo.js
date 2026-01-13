import '../App.css';
import { v4 as myId } from 'uuid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect, useMemo, useCallback, useContext, useReducer } from 'react'
import { ToastC } from './toastContext.js'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import MyList from './List.js';
import '../App.css';
import Grid from '@mui/material/Grid';
import todosReducer from '../reducers/todosReducer.js'
export default function MyTodo() {
  
  const initialTodo = [
    {
      id: myId(),
      title: 'task name',
      desc: 'eat less',
      comp: false
    },
    {
      id: myId(),
      title: 'task name',
      desc: 'eat more',
      comp: false
    },
    {
      id: myId(),
      title: 'task name',
      desc: 'eat often',
      comp: false
    },
  ];
  const [open, setOpen] = useState(false);
  const showHide = useContext(ToastC);
  const [todo, dispatch] = useReducer(
  todosReducer,
  JSON.parse(localStorage.getItem('todo')) || initialTodo
);
  const [selectedId, setSelectedId] = useState(null)
  const [V, setV] = useState('');
  const [val, setVal] = useState('');
  const [vl, setVl] = useState('')
  const [alignment, setAlignment] = useState('all');
  const todoFiltered = useMemo(() => {
  return todo.filter(t => {
    if (alignment === 'done') return t.comp;
    if (alignment === 'notDone') return !t.comp;
    return true;
  });
}, [alignment, todo]);
  const handleDeleter = useCallback((id) => {
    dispatch({
      type: 'delete',
      payload: {
        id
      }
    })
  showHide("Deleted succesfully")
}, [showHide]);
  const handleToggle = useCallback((id) => {
    dispatch({
      type: 'toggle',
      payload: {
        id
      }
    })
  },[])

 const handleopen = useCallback((id) => {
   const current = todo.find(t => t.id === id)
    setVl(current.title)
    setVal(current.desc)
   setSelectedId(id)
   setOpen(true)
 }, [todo])
  const todoJsx = useMemo(() => {
    return todoFiltered.map((t) => {
    return <MyList 
    todo={t}
    id={t.id} 
    {...t}
    key={t.id} 
    title={t.title} 
    desc={t.desc} 
    onDelete={handleDeleter} 
    onToggle={handleToggle}
    opener={handleopen}
    />;
  });
  }, [todoFiltered, handleDeleter, handleopen, handleToggle])
  function handleChanger() {
if (V === '') return;

  dispatch({
    type: 'added',
    payload: {
      title: V
    }
  });

  setV('');
  showHide('Added successfully');
  }
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
 function handleClose() {
   setOpen(false)
 }
 function handleDialogTitleChanger(id) {
  dispatch({
    type: 'edit',
    payload: {
      id,
      titleValue: vl,
      descValue: val,
    }
  });
  handleClose()
};

useEffect(() => {
  localStorage.setItem('todo', JSON.stringify(todo));
}, [todo]);
  return (
    <Container maxWidth="sm">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
         editor
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            edit the task
          </DialogContentText>
          <form>
            <TextField
              value={vl}
              onChange={(e) => {setVl(e.target.value)}}
              autoFocus
              margin="dense"
              id="name"
              label="title"
              fullWidth
              variant="standard"
            />
            <TextField
              value={val}
              onChange={(e) => {setVal(e.target.value)}}
              required
              margin="dense"
              label="description"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {handleDialogTitleChanger(selectedId)}}>
            edit
          </Button>
        </DialogActions>
      </Dialog>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h2"
            style={{ fontFamily: 'RobotoCustom !important' }}
            sx={{ color: 'text.secondary' }}
          >
            My tasks
          </Typography>

          <Divider style={{ marginBottom: '15px' }} />

          <ToggleButtonGroup
            value={alignment}
            onChange={handleChange}
            color="primary"
            exclusive
            aria-label="Platform"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="done">done</ToggleButton>
            <ToggleButton value="notDone">not done</ToggleButton>
          </ToggleButtonGroup>
          
          {todoJsx}

          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginTop: '20px' }}
          >
            <Grid size={8}>
              <TextField
                id="outlined-basic"
                label="enter a task"
                variant="outlined"
                style={{ width: '100%' }}
                value={V}
                onChange={(e) => {
                  setV(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleChanger();
                  }
                }}
              />
            </Grid>

            <Grid size={4}>
              <Button
                className="sendB"
                variant="contained"
                onClick={handleChanger} >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}