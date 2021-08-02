import React from 'react';
import './style.scss';
import { 
    FormControl, TextField
  } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

interface IProps {
    className?: string;
    date?:Date | null;
    helperText?:string;
    error? : boolean;
    onChange: (date: Date | null) => void;
}

const InputDate= (props: IProps) => {
    const { className, date, error, helperText, onChange } = props;
    const style = ['', className].join(' '); 
  return (
    <div >
     <FormControl fullWidth>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          autoOk
          InputLabelProps={{
            style: {
              backgroundColor: "white"
            },
          }}
          margin="none"
          id="date-picker-dialog"
          label="Date of birth"
          className={style}
          inputVariant="outlined"
          format="dd/MM/yyyy"             
          size="small"
          value={date}
          inputProps={{ readOnly: true }}
          disableFuture={true}
          helperText={helperText}
          error={error}
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
