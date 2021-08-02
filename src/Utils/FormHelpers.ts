export const validateCharacter = (value:string) =>{
    const regEx = /^[a-zA-Z]+$/;
    if(regEx.test(value)){
        return true;
    }else{
        return false;
    }
}

export const validateCharacterWithSpace = (value:string) =>{
    var regEx = /^[a-z][a-z\s]*$/;
    if(regEx.test(value)){
        return true;
    }else{
        return false;
    }
}

// export const validatePhone = (value:string) =>{
//     var length = 10;
//     if(value < length || value > length){
//         return true;
//     }else{
//         return false;
//     }
// }

export const validateEmail = (value:string) =>{
    var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(regEx.test(value)){
        return true;
    }else{
        return false;
    }
}

export const validatePinCode = (value:string) =>{
    var regEx = /^\d{6}$/;
    if(regEx.test(value)){
        return true;
    }else{
        return false;
    }
}

export const validateAdhaarNumber = (value:string) =>{
    var regEx = /^\d{12}$/;
    if(regEx.test(value)){
        return true;
    }else{
        return false;
    }
}