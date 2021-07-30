import React from 'react';
import './style.scss';
import { TextType } from '../Constant';


interface IProps {
    text?: string;
    className: string;
    textType: TextType;
}

const Header = (props: IProps) => {
    const { text, textType, className } = props;
    const style = ['heading-container', className].join(' '); 
    switch (textType) {
        case TextType.header:
            // const style = ['heading-container', className].join(' '); 
            return (
                <div className={style}>
                    {text}
                </div>
            );
            
            break;
        case TextType.success:
            // const style = ['success-text-container', className].join(' '); 

            return (
                <div className={style}>
                    {TextType.success}
                </div>
            );
            
            break;
        case TextType.error:

            // const style = ['error-text-container', className].join(' '); 

            return (
                <div className={style}>
                    {TextType.error}
                </div>
            );
            
            break;
    
        default:
            return (
                <div className={style}>
                    {'Default Text'}
                </div>
            );
            break;
    }
}

    export default Header;