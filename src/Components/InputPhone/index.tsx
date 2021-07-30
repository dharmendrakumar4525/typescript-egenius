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

    const onInputChange = (e: any,coutrydata:any) =>{
        const currentValue = e.target.value;
        onChange(currentValue);
      
    }
  return (
    <div className="body">
     {/* <FormControl fullWidth>
                        <TextField
                          inputProps={{

                            autoComplete: 'off',
                            style: { textTransform: 'capitalize' }
                          }}
                          required
                          disabled={false}
                          className={style}
                          placeholder={placeholder}
                          id="document-type"
                          label={label}
                          type="number"
                          value={value}
                          onChange={onInputChange}
                          variant="outlined"
                        />

                      </FormControl> */}
                      {/* <MuiPhoneNumber defaultCountry={'in'} onChange={onInputChange} label={label} value={value}/> */}
    </div>
  );
}

export default InputPhone;
