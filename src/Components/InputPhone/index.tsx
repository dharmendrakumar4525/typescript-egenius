import React from 'react';
import './style.scss';
import { 
    FormControl, TextField 
  } from '@material-ui/core';
  import MuiPhoneNumber from "material-ui-phone-number";

  interface IProps {
    label?:string;
    className?: string;
    value:any;
    helperText?:string;
    error? : boolean;
    onChange: (value: any ) => any;
}
  const InputPhone= (props: IProps) => {
    const {label, className, value,  error, helperText, onChange } = props;

    const style = ['input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        const currentValue = e;
        onChange(currentValue);    
    }
  return (
    <div className="">    
      <FormControl fullWidth>
        <MuiPhoneNumber 
        InputLabelProps={{
          style: {
            backgroundColor: "white"
          },
        }}
        defaultCountry={'in'}
         onChange={onInputChange}
          size="small" 
          variant="outlined" 
          helperText={helperText}
          error={error}
          label={label}
          value={value}/>
      </FormControl>
    </div>
  );
}

export default InputPhone;
