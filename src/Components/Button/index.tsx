import React from 'react';
import './style.scss';
import { 
    FormControl, TextField, Button
} from '@material-ui/core';

interface IProps {
    className?: string;
    variant?:string;
    size?:string;
    color?:string;
}
const SubmitButton= (props: IProps) => {
    const {className} = props;
    const style = ['input-container', className].join(' '); 

  return (
    <Button type="submit" size="medium" color="secondary" variant="contained">Submit</Button>
  );
}

export default SubmitButton;
