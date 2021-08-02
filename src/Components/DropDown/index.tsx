import React from 'react';
import './style.scss';
import { 
    FormControl, TextField,MenuItem
  } from '@material-ui/core';

  interface IProps {
    label?:string;
    className?: string;
    value?:string;
    placeholder?:string;
    DataMaster:string[];
    helperText?:string;
    error? : boolean;
    onChange: (value: string ) => void;
}
  const DropDown= (props: IProps) => {
    const {label, className, value,placeholder,DataMaster, error, helperText, onChange } = props;

    const style = ['input-container', className].join(' '); 

    const setInputChange = (e: any) =>{
        const currentValue = e.target.value;
        onChange(currentValue);
    }
  return (
    <div className="">
     <FormControl fullWidth>
            <TextField   
              InputLabelProps={{
                style: {
                  backgroundColor: "white"
                },
              }}                     
              id="outlined-select-currency"
              select
              label={label}
              variant="outlined"
              className={className}
              value={value}              
              size="small"
              helperText={helperText}

              error={error}
              onChange={setInputChange}>
              {DataMaster.map(option => (

              <MenuItem key={option} value={option} id={option}>
                  {option}
              </MenuItem>
              ))}
            </TextField>
          </FormControl>
    </div>
  );
}

export default DropDown;
