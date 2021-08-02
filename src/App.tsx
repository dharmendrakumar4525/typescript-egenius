import React from 'react';
import './App.css';
import { 
   Grid, Drawer, ListItem, FormControlLabel, Switch, FormControl, CardContent, IconButton, Typography, AppBar, Divider, Card, MenuItem, Fab, CardActions, TextField, Button, Toolbar, Box, FormLabel, List, Tooltip, Slide, Checkbox, RadioGroup, Radio, InputAdornment
  } from '@material-ui/core';
import InputTextField from './Components/InputTextField';
import StudentProfiling from './Components/StudentProfiling'

interface IState {
  currentemailId: string;
  curentemailidError: string;
  currentpassword: string;
  currentPasswordError: string;
  currentloginError: string;
  successMessage: string;
  isVisiblePassword: boolean;
}


const onInputChange=()=>{

}
const  App=()=> {
  return (
    <div >
       <StudentProfiling/>
    </div>
  );
}

export default App;
