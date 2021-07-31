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
    placeholder?:string;
    onChange: (value: any ) => any;
}
  const InputPhone= (props: IProps) => {
    const {label, className, value,placeholder, onChange } = props;

    const style = ['input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        const currentValue = e;
        onChange(currentValue);    
    }
  return (
    <div className="body">
    
                      <MuiPhoneNumber defaultCountry={'in'} onChange={onInputChange} label={label} value={value}/>
    </div>
  );
}

export default InputPhone;
