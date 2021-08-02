import React from "react";
import './style.scss';
import { 
    FormControl, TextField
} from '@material-ui/core';

interface IProps {
    label?:string;
    className?: string;
    value :string;
    placeholder?:string;
    error?:boolean;
    helperText?:string;
    onChange: (value: string ) => void;
}
const InputEmail= (props: IProps) => {
    const {label, className, value, placeholder, error, helperText, onChange } = props;
    const style = ['input-container', className].join(' '); 

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
                autoComplete: 'off'
            }}
            required
            disabled={false}
            placeholder={placeholder}
            id="document-type"
            label={label}
            type="email"
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

export default InputEmail;
