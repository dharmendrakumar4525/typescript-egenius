import React from 'react';
import './style.scss';
import { 
    FormControl, TextField
  } from '@material-ui/core';

  interface IProps {
    label?:string;
    className?: string;
    value?:string;
    placeholder?:string;
    onChange: (value: string ) => void;
    helperText?:string;
    error?:boolean;
}
  const InputPincode= (props: IProps) => {
    const {label, className, value, placeholder,helperText,error, onChange } = props;

    const style = ['input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        onChange(e.target.value);
    }
  return (
    <div className="">
      <FormControl fullWidth>
        <TextField
          inputProps={{
            autoComplete: 'off'
          }}
          required
          disabled={false}
          // className={style}
          placeholder={placeholder}
          id="document-type"
          label={label}
          type="text"
          size="small"
          value={value}
          onChange={onInputChange}
          variant="outlined"
          helperText={helperText}
          error={error}
        />
      </FormControl>
    </div>
  );
}

export default InputPincode;
