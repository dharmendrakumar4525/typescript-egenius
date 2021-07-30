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
    onChange: (value: string ) => void;
}
  const DropDown= (props: IProps) => {
    const {label, className, value,placeholder,DataMaster, onChange } = props;

    const style = ['input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        const currentValue = e.target.value;
        onChange(currentValue);
    }
  return (
    <div className="body">
     <FormControl fullWidth>
            <TextField                        
              id="outlined-select-currency"
              select
              label={label}
              variant="outlined"
              className={className}
              value={value}
              onChange={onInputChange}>
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
