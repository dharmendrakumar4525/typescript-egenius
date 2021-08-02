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
    helperText?:string;
    error? : boolean;
    onChange: (value: string ) => void;
}
  const InputTextField= (props: IProps) => {
    const {label, className, value, placeholder, error, helperText, onChange } = props;


    const style = ['', className].join(' '); 

   

    const onInputChange = (e: any) =>{
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
          inputProps={{
            autoComplete: 'off',
            style: { textTransform: 'capitalize' }
          }}
          required
          key={label}
          disabled={false}
          className={style}
          placeholder={placeholder}
          id={label}
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

export default InputTextField;
