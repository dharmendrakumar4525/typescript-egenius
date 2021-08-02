import React from 'react';
import './style.scss';
import { 
    FormControl, TextField, FormControlLabel , Checkbox
  } from '@material-ui/core';  

  interface IProps {
    label?:string;
    className?: string;
    checked:boolean;
   
    
    onChange: (value: boolean ) => void;
}
  const InputCheckbox= (props: IProps) => {
    const {label, className, checked,  onChange } = props;

    const style = ['input-container', className].join(' '); 
   

    const onInputChange = (e: any) =>{
      const currentValue = !checked;
             
      onChange(currentValue);
    }
  return (
    <div className="">
      <FormControlLabel
                      control={
                        <Checkbox
                          tabIndex={-1}
                          checked={checked}
                          onClick= {onInputChange}
                        />
                      }
                      label={label}
                    />
    </div>
  );
}

export default InputCheckbox;
