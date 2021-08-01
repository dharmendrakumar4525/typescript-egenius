import React from 'react';
import './style.scss';
import { 
    FormControl, TextField
  } from '@material-ui/core';

  interface IProps {
    label?:string;
    className?: string;
                                  // value?:string;
    value: string ;
    placeholder?:string;
    onChange: (value: string ) => void;
}
  const InputTextField= (props: IProps) => {
    const {label, className, value,placeholder, onChange } = props;

    const style = ['input-container', className].join(' '); 

    const onInputChange = (e: any) =>{
        const currentValue = e.target.value;
        onChange(currentValue);
    }
  return (
    <div className="body">
     <FormControl fullWidth>
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
                          type="text"
                          value={value}
                          onChange={onInputChange}
                          variant="outlined"
                        />

                      </FormControl>
    </div>
  );
}

export default InputTextField;
