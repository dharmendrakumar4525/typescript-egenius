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

    const style = ['input-container', className].join(' '); 
    // let error = false;
    // let helperText = '';

    const onInputChange = (e: any) =>{
      const currentValue = e.target.value;
      // if(!validateCharacter(currentValue)){
      //   console.log(currentValue+'gh');
      //   // helperText = 'Please enter letters.';
      //   // error = true;  
      // }          
      onChange(currentValue);
    }
  return (
    <div className="">
      <FormControl fullWidth>
        <TextField
          inputProps={{
            autoComplete: 'off',
            style: { textTransform: 'capitalize' }
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

export default InputTextField;
