import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


import Header from './components/Header';


function CheckboxExample(){
  const [checked,setChecked] = React.useState(true);
  return (
      <FormControlLabel 
        control = {
        <Checkbox 
          checked = {checked}
          icon = {<DeleteIcon />}
          chekedIcon = {<SaveIcon/>}
          onChange= {(e) => setChecked(e.target.checked)}
         
          inputProps={{
            'aria-label':'secondary checkbox'
          }}
      
      />}
      label ="Testing checkbox"
      />
  )
}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function ButtonStyled(){
  const classes = useStyles();
  return <Button>Styled Component</Button>;
}

function App() {
  return (
   
    <div className="App">
        <Header />
      <CheckboxExample/>
        <TextField>
          variant
        </TextField>
        <ButtonGroup>
          <Button 
            startIcon={<SaveIcon />}
            size = "large"
            style ={{
              fontSize: 24
            }}
            onClick = {() => alert('hello')} 
            color="primary" 
            variant = "contained">
            Save
          </Button>
          <Button 
            startIcon={<DeleteIcon />}
            size = "large"
            style ={{
              fontSize: 24
            }}
            onClick = {() => alert('hello')} 
            color="secondary" 
            variant = "contained">
            Discard
          </Button>

        </ButtonGroup>
    </div>
  
  );
}

export default App;
