import '../App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';

export default function MyList({title, desc, onDelete, id, onToggle, onCheck, todo, opener}) {
  
  return (
    <Card className='todoCard' sx={{ minWidth: 275, background: todo.comp === true ? '#4ae133':'#283593', marginTop: '15px' }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid size={8}>
              <Typography variant="h5" sx={{ color: 'white' }}>
              {title}
              </Typography>
              <Typography variant="h6" sx={{ color: 'white'}}>
              {desc}
              </Typography>
            </Grid>
            <Grid size={4} display="flex" justifyContent="space-around">
              <IconButton className='btn' style={{background: 'white',
              color: 'red',border: '2px solid red'}}>
             <DeleteOutlineOutlinedIcon onClick={() => {onDelete(id)}}/>
              </IconButton>
              <IconButton onClick={() => {onToggle(id)}}className='btn' style={{ background: 'white', border: '3px solid #8bc34a',
              color: '#8bc34a'}} >
                <CheckIcon />
              </IconButton>
              <IconButton onClick={() => {opener(id)}} className='btn' style={{ background: 'white', border: '2px solid blue',
              color: 'blue'}} >
                <CreateIcon />
              </IconButton>
            </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
}