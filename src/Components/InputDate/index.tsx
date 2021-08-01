import React from 'react';
import './style.scss';
import { 
    FormControl, TextField
  } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

interface IProps {
    className?: string;
    date?:Date | null;
    onChange: (date: Date | null) => void;
}

const InputDate= (props: IProps) => {
    const { className, date, onChange } = props;
  return (
    <div className="App">
     <FormControl fullWidth>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          autoOk
          margin="normal"
          id="date-picker-dialog"
          label="Date of birth"
          className={className}
          inputVariant="outlined"
          format="dd/MM/yyyy"             
          size="small"
          value={date}
          inputProps={{ readOnly: true }}
          disableFuture={true}
          onChange={onChange}   
          KeyboardButtonProps={{
          'aria-label': 'change date',
          }}
          />
          </MuiPickersUtilsProvider>
          </FormControl>
    </div>
  );
}

export default InputDate;
