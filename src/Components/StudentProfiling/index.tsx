import React from 'react';
import './style.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    Grid, Card, Container, CardContent, Typography 
} from '@material-ui/core';
import InputTextField from '../InputTextField';
import InputDate from '../InputDate';
import { personalInformation, TextType } from '../Constant/config';
import Header from '../Header';
import DropDown from '../DropDown';
import InputPhone from '../InputPhone';
import InputEmail from '../InputEmail';
import InputPincode from '../InputPincode';
import SubmitButton from '../Button';
import { validateCharacter, validateCharacterWithSpace, validateEmail,validatePinCode, validateAdhaarNumber } from '../../Utils/FormHelpers';

interface IProps {
    emailId?: string;
    redirectLink?: string;
}

interface IState {
    values: {
        currentFirstName?: string;
        currentMiddleName?: string;
        currentLastName?: string;
        GenderMaster: string[];
        currentGender?: string;
        currentBloodGroup?: string;
        BloodGroupMaster: string[];
        dateOfBirth?: Date | null;
        currentDateOfBirth? : Date | null;
        currentMotherTongue?: string;
        NationalityMaster: string[];
        currentNationality: string;
        ReligionMaster: string[];
        currentReligion: string;
        currentCaste: string;
        currentCategory: string;
        currentPhoneNumber: any;
        currentEmail : string;
        currentLinkedin:string;
        currentFacebook:string;
        currentCorrespondanceAddress1:string;
        currentCorrespondanceAddress2:string;
        currentCorrespondancePincode:string;
        currentCorrespondancePostOffice:string;
        currentCorrespondanceTaluk:string;
        currentCorrespondanceDistrict:string;
        currentCorrespondanceState:string;
        currentPermanentAddress1:string;
        currentPermanentAddress2:string;
        currentPermanentPincode:string;
        currentPermanentPostOffice:string;
        currentPermanentTaluk:string;
        currentPermanentDistrict:string;
        currentPermanentState:string;
        currentAdmissionNumber:string;
        currentAdmissionDate:Date | null;
        currentSTSNumber:string;
        currentJoiningYear:string;
        currentRollNumber:string;
        currentBirthCerficateNumber:string;
        currentAdhaarNumber:string;
        currentPassportNumber:string;
        currentDrivingLicenceNumber:string;
    
    };
    errors: {
        currentFirstName?: string;
        currentMiddleName?: string;
        currentLastName?: string;
        GenderMaster: string;
        currentGender?: string;
        currentBloodGroup?: string;
        BloodGroupMaster: string;
        currentDateOfBirth? : string;
        dateOfBirth?: string;
        currentMotherTongue?: string;
        NationalityMaster: string;
        currentNationality: string;
        ReligionMaster: string;
        currentReligion: string;
        currentCaste: string;
        currentCategory: string;
        currentPhoneNumber: any;
        currentEmail : string;
        currentLinkedin:string;
        currentFacebook:string;
        currentCorrespondanceAddress1:string;
        currentCorrespondanceAddress2:string;
        currentCorrespondancePincode:string;
        currentCorrespondancePostOffice:string;
        currentCorrespondanceTaluk:string;
        currentCorrespondanceDistrict:string;
        currentCorrespondanceState:string;
        currentPermanentAddress1:string;
        currentPermanentAddress2:string;
        currentPermanentPincode:string;
        currentPermanentPostOffice:string;
        currentPermanentTaluk:string;
        currentPermanentDistrict:string;
        currentPermanentState:string;
        currentAdmissionNumber:string;
        currentAdmissionDate:string;
        currentSTSNumber:string;
        currentJoiningYear:string;
        currentRollNumber:string;
        currentBirthCerficateNumber:string;
        currentAdhaarNumber:string;
        currentPassportNumber:string;
        currentDrivingLicenceNumber:string;
    
    };
}

class StudentProfiling extends React.Component<IProps, IState> {

    private initializeState = () =>{

        const { emailId } = this.props;

        return {
            
            values: {
                currentFirstName: '',
                currentMiddleName: '',
                currentLastName: '',
                GenderMaster: personalInformation.GenderMaster,
                currentGender: '',
                currentBloodGroup: '',
                BloodGroupMaster: personalInformation.BloodGroupMaster,
                dateOfBirth: new Date(),
                currentDateOfBirth : new Date(),
                currentMotherTongue: '',
                NationalityMaster: personalInformation.NationalityMaster,
                currentNationality: '',
                ReligionMaster: personalInformation.ReligionMaster,
                currentReligion: '',
                currentCaste: '',
                currentCategory: '',
                currentPhoneNumber: '',
                currentEmail : '',
                currentLinkedin : '',
                currentFacebook:'',
                currentCorrespondanceAddress1:'',
                currentCorrespondanceAddress2:'',
                currentCorrespondancePincode:'',
                currentCorrespondancePostOffice:'',
                currentCorrespondanceTaluk:'',
                currentCorrespondanceDistrict:'',
                currentCorrespondanceState:'',
                currentPermanentAddress1:'',
                currentPermanentAddress2:'',
                currentPermanentPincode:'',
                currentPermanentPostOffice:'',
                currentPermanentTaluk:'',
                currentPermanentDistrict:'',
                currentPermanentState:'',
                currentAdmissionNumber:'',
                currentAdmissionDate: new Date(),
                currentSTSNumber:'',
                currentJoiningYear:'',
                currentRollNumber:'',
                currentBirthCerficateNumber:'',
                currentAdhaarNumber:'',
                currentPassportNumber:'',
                currentDrivingLicenceNumber:'',
            },
            errors: {
                currentFirstName: '',
                currentMiddleName: '',
                currentLastName: '',
                GenderMaster: '',
                currentGender: '',
                currentBloodGroup: '',
                BloodGroupMaster:'',
                dateOfBirth: '',
                currentDateOfBirth : '',
                currentMotherTongue: '',
                NationalityMaster: '',
                currentNationality: '',
                ReligionMaster: '',
                currentReligion: '',
                currentCaste: '',
                currentCategory: '',
                currentPhoneNumber: '',
                currentEmail : '',
                currentLinkedin : '',
                currentFacebook:'',
                currentCorrespondanceAddress1:'',
                currentCorrespondanceAddress2:'',
                currentCorrespondancePincode:'',
                currentCorrespondancePostOffice:'',
                currentCorrespondanceTaluk:'',
                currentCorrespondanceDistrict:'',
                currentCorrespondanceState:'',
                currentPermanentAddress1:'',
                currentPermanentAddress2:'',
                currentPermanentPincode:'',
                currentPermanentPostOffice:'',
                currentPermanentTaluk:'',
                currentPermanentDistrict:'',
                currentPermanentState:'',
                currentAdmissionNumber:'',
                currentAdmissionDate:'',
                currentSTSNumber:'',
                currentJoiningYear:'',
                currentRollNumber:'',
                currentBirthCerficateNumber:'',
                currentAdhaarNumber:'',
                currentPassportNumber:'',
                currentDrivingLicenceNumber:'',
            }
        }
    }

    public state = this.initializeState();

    FirstName = () => {
        const { values, errors } = this.state;
        const { currentFirstName } = values;
        const { currentFirstName : errorFirstName } = errors;

        const setFirstName = (value: string) => {

            if(!validateCharacter(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentFirstName:'Please enter letters.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentFirstName:''
                    },
                }))
            } 

            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                currentFirstName:value
                },
            }))
        }

        // const onSubmit = (e: any) => {
        //     const value = e.target.value();

        //     if(!validateCharacter(value)){
        //         this.setState((prevState) => ({
        //             errors:{
        //             ...prevState.errors,
        //             currentFirstName:'Please enter letters.'
        //             },
        //         }))
        //     }            
        // };

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setFirstName} label="First Name" placeholder="First Name" value={this.state.values.currentFirstName} helperText={this.state.errors.currentFirstName} error={this.state.errors.currentFirstName!=''?true:false}/>
                {/* {errorFirstName && <span>{errorFirstName}</span>} */}
            </Grid>
        )
    }

    MiddleName = () => {
        const { values, errors } = this.state;
        const { currentMiddleName } = values;
        const { currentMiddleName : errorMiddleName } = errors;

        const setMiddleName = (value: string) => {

            if(!validateCharacter(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentMiddleName:'Please enter letters.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentMiddleName:''
                    },
                }))
            }            

            this.setState((prevState)=>({
                values:{
                    ...prevState.values,
                    currentMiddleName:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setMiddleName} label="Middle Name" placeholder="Middle Names" value={this.state.values.currentMiddleName} helperText={this.state.errors.currentMiddleName} error={this.state.errors.currentMiddleName!=''?true:false} />
            </Grid>
        )
    }

    LastName = () => {
        const { values, errors } = this.state;
        const { currentLastName } = values;
        const { currentLastName : errorLastName} = errors;

        const setLastName = (value: string) => {

            if(!validateCharacter(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentLastName:'Please enter letters.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentLastName:''
                    },
                }))
            }            

            this.setState((prevState)=>({
                values:{
                    ...prevState.values,
                    currentLastName:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setLastName} label="Last Name" placeholder="Last Name" value={this.state.values.currentLastName} helperText={this.state.errors.currentLastName} error={this.state.errors.currentLastName!=''?true:false} />
            </Grid>
        )
    }    

    Gender = () => {
        const { values } = this.state;
        const { currentGender } = values;
        const setGender = (value: string) => {
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                currentGender:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <DropDown label={'Select Gender'} onChange={setGender} DataMaster={this.state.values.GenderMaster} value={this.state.values.currentGender} />
            </Grid>
        )
    }

    BloodGroup = () =>{
        const { values } = this.state;
        const { currentBloodGroup } = values;
        const setBloodGroup = (value : string) => {
            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentBloodGroup : value
                }
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <DropDown label={'Select Blood Group'} onChange={setBloodGroup} DataMaster={this.state.values.BloodGroupMaster} value={this.state.values.currentBloodGroup} />
            </Grid>
        )
    }
    
    DateOfBirth = () =>{
        const { values } = this.state;
        const { dateOfBirth } = values;

        const setDateOfBirth = (value : Date | null) =>{
            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    dateOfBirth : value
                }
            }))
        }
        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputDate date={this.state.values.dateOfBirth} onChange={setDateOfBirth}/>
            </Grid>
        )
    }

    MotherTongue = () => {
        const { values, errors } = this.state;
        const { currentMotherTongue } = values;
        const { currentMotherTongue : errorMotherTongue } = errors;

        const setMotherTongue = (value: string) => {

            if(!validateCharacter(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentMotherTongue:'Please enter letters.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentMotherTongue:''
                    },
                }))
            }            

            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentMotherTongue:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setMotherTongue} label="Mother Tongue" placeholder="Mother Tongue" value={this.state.values.currentMotherTongue} helperText={this.state.errors.currentMotherTongue} error={this.state.errors.currentMotherTongue!=''?true:false} />
            </Grid>
        )
    }   

    Nationality = () =>{
        const { values } = this.state;
        const { currentNationality } = values;

        const setNationality = (value : string) => {
            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentNationality : value
                }
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <DropDown label={'Select Nationality'} onChange={setNationality} DataMaster={this.state.values.NationalityMaster} value={this.state.values.currentNationality} />
            </Grid>
        )
    }    

    Religion = () =>{
        const { values } = this.state;
        const { currentReligion } = values;

        const setReligion = (value : string) => {
            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentReligion : value
                }
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <DropDown label={'Select Religion'} onChange={setReligion} DataMaster={this.state.values.ReligionMaster} value={this.state.values.currentReligion} />
            </Grid>
        )
    } 

    Caste = () => {
        const { values, errors } = this.state;
        const { currentCaste } = values;
        const { currentCaste : errorCaste } = errors;

        const setCaste = (value: string) => {

            if(!validateCharacterWithSpace(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentCaste:'Please enter letters and space only.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentCaste:''
                    },
                }))
            }            

            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentCaste:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setCaste} label="Caste" placeholder="Caste" value={this.state.values.currentCaste} helperText={this.state.errors.currentCaste} error={this.state.errors.currentCaste!=''?true:false} />
            </Grid>
        )
    }   
    
    CastCategory = () => {
        const { values, errors } = this.state;
        const { currentCategory } = values;
        const { currentCategory : errorCategory} = errors;

        const setCastCategory = (value: string) => {

            if(!validateCharacterWithSpace(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentCategory:'Please enter letters and space only.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentCategory:''
                    },
                }))
            }            

            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentCategory:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setCastCategory} label="Caste Category" placeholder="Caste Category" value={this.state.values.currentCategory} helperText={this.state.errors.currentCategory} error={this.state.errors.currentCategory!=''?true:false} />
            </Grid>
        )
    }      
    
    Phone = () => {
        const { values } = this.state;
        const { currentPhoneNumber } = values;

        const setPhone = (value: string) => {

            this.setState((prevState) => ({
                values:{
                    ...prevState.values,
                    currentPhoneNumber:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputPhone onChange={setPhone} label="Phone Number" value={this.state.values.currentPhoneNumber} />
            </Grid>
        )
    }
    
    Email = () => { 
        const { values, errors } = this.state;
        const { currentEmail } = values;
        const { currentEmail : errorEmail } = errors;

        const setEmail = (value: string) => {

            if(!validateEmail(value)){
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentEmail:'Invalid email address.'
                    },
                }))
            }else{
                this.setState((prevState) => ({
                    errors:{
                        ...prevState.errors,
                        currentEmail:''
                    },
                }))
            }            

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentEmail:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputEmail onChange={setEmail} label="Email" placeholder="Email" value={this.state.values.currentEmail} helperText={this.state.errors.currentEmail} error={this.state.errors.currentEmail!=''?true:false} />
            </Grid>
        )
    }   
    
    LinkedInId = () => {
        const { values } = this.state;
        const { currentLinkedin } = values;

        const setLinkedInId = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentLinkedin:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setLinkedInId} label="LinkedIn" placeholder="LinkedIn Id" value={this.state.values.currentLinkedin} />
            </Grid>
        )
    }         
    
    FacebookId = () => {
        const { values } = this.state;
        const { currentFacebook } = values;

        const setFacebookId = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentFacebook:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setFacebookId} label="Facebook" placeholder="Facebook Id" value={this.state.values.currentFacebook} />
            </Grid>
        )
    }              
    
    CorrespondanceAddress1 = () => {
        const { values } = this.state;
        const { currentCorrespondanceAddress1 } = values;

        const setCorrespondanceAddress1 = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentCorrespondanceAddress:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={5}>
                <InputTextField onChange={setCorrespondanceAddress1} label="Correspondance Address" placeholder="Correspondance Address" value={this.state.values.currentCorrespondanceAddress1} />
            </Grid>
        )
    }                    
    
    CorrespondanceAddress2 = () => {
        const { values } = this.state;
        const { currentCorrespondanceAddress2 } = values;

        const setCorrespondanceAddress2 = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentCorrespondanceAddress2:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={5}>
                <InputTextField onChange={setCorrespondanceAddress2} label="Correspondance Address" placeholder="Correspondance Address" value={this.state.values.currentCorrespondanceAddress2} />
            </Grid>
        )
    }                         
    
    CorrespondancePincode = () => {
        const { values, errors } = this.state;
        const { currentCorrespondancePincode } = values;
        const { currentCorrespondancePincode: errorPincode } = errors;

        const setCorrespondancePincode = (value: string) => {
            
            value = value.replace(/\D/g, "");

            if(value.length <= 6){
                if(!validatePinCode(value)){
                    this.setState((prevState) => ({
                        errors:{
                            ...prevState.errors,
                            currentCorrespondancePincode:'Invalid Pincode.'
                        },
                    }))
                }else{
                    this.setState((prevState) => ({
                        errors:{
                            ...prevState.errors,
                            currentCorrespondancePincode:''
                        },
                    }))
                }  

                this.setState((prevState) => ({
                    values:{
                    ...prevState.values,
                    currentCorrespondancePincode:value
                    },
                }))
            }
        }

        return (
            <Grid item xs={12} md={6} lg={2}>
                <InputPincode onChange={setCorrespondancePincode} label="Pincode" placeholder="Pincode" value={this.state.values.currentCorrespondancePincode} helperText={this.state.errors.currentCorrespondancePincode} error={this.state.errors.currentCorrespondancePincode!=''?true:false}/>
            </Grid>
        )
    }                               
    
    CorrespondancePostOffice = () => {
        const { values } = this.state;
        const { currentCorrespondancePostOffice } = values;

        const setCorrespondancePostOffice = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentCorrespondancePostOffice:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setCorrespondancePostOffice} label="Post Office" placeholder="Post Office" value={this.state.values.currentCorrespondancePostOffice} />
            </Grid>
        )
    }                                    
    
    CorrespondanceTaluk = () => {
        const { values } = this.state;
        const { currentCorrespondanceTaluk } = values;

        const setCorrespondanceTaluk = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentCorrespondanceTaluk:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setCorrespondanceTaluk} label="Taluk" placeholder="Taluk" value={this.state.values.currentCorrespondanceTaluk} />
            </Grid>
        )
    }                                          
    
    CorrespondanceDistrict = () => {
        const { values } = this.state;
        const { currentCorrespondanceDistrict } = values;

        const setCorrespondanceDistrict = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentCorrespondanceDistrict:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setCorrespondanceDistrict} label="District" placeholder="District" value={this.state.values.currentCorrespondanceDistrict} />
            </Grid>
        )
    }      

    CorrespondanceState = () => {
        const { values } = this.state;
        const { currentCorrespondanceState } = values;

        const setCorrespondanceState = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentCorrespondanceState:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setCorrespondanceState} label="State" placeholder="State" value={this.state.values.currentCorrespondanceState} />
            </Grid>
        )
    }              
    
    PermanentAddress1 = () => {
        const { values } = this.state;
        const { currentPermanentAddress1 } = values;

        const setPermanentAddress1 = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPermanentAddress:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={5}>
                <InputTextField onChange={setPermanentAddress1} label="Permanent Address" placeholder="Permanent Address" value={this.state.values.currentPermanentAddress1} />
            </Grid>
        )
    }                    
    
    PermanentAddress2 = () => {
        const { values } = this.state;
        const { currentPermanentAddress2 } = values;

        const setPermanentAddress2 = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPermanentAddress2:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={5}>
                <InputTextField onChange={setPermanentAddress2} label="Permanent Address" placeholder="Permanent Address" value={this.state.values.currentPermanentAddress2} />
            </Grid>
        )
    }                         
    
    PermanentPincode = () => {
        const { values, errors } = this.state;
        const { currentPermanentPincode } = values;
        const { currentPermanentPincode : errorPermanentPincode } = errors;

        const setPermanentPincode = (value: string) => {

            value = value.replace(/\D/g, "");

            if(value.length <= 6){
                if(!validatePinCode(value)){
                    this.setState((prevState) => ({
                        errors:{
                            ...prevState.errors,
                            currentPermanentPincode:'Invalid Pincode.'
                        },
                    }))
                }else{
                    this.setState((prevState) => ({
                        errors:{
                            ...prevState.errors,
                            currentPermanentPincode:''
                        },
                    }))
                }  

                this.setState((prevState) => ({
                    values:{
                    ...prevState.values,
                    currentPermanentPincode:value
                    },
                }))
            }
        }

        return (
            <Grid item xs={12} md={6} lg={2}>
                <InputPincode onChange={setPermanentPincode} label="Pincode" placeholder="Pincode" value={this.state.values.currentPermanentPincode} helperText={this.state.errors.currentPermanentPincode} error={this.state.errors.currentPermanentPincode!=''?true:false} />
            </Grid>
        )
    }                               
    
    PermanentPostOffice = () => {
        const { values } = this.state;
        const { currentPermanentPostOffice } = values;

        const setPermanentPostOffice = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPermanentPostOffice:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setPermanentPostOffice} label="Post Office" placeholder="Post Office" value={this.state.values.currentPermanentPostOffice} />
            </Grid>
        )
    }                                    
    
    PermanentTaluk = () => {
        const { values } = this.state;
        const { currentPermanentTaluk } = values;

        const setPermanentTaluk = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPermanentTaluk:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setPermanentTaluk} label="Taluk" placeholder="Taluk" value={this.state.values.currentPermanentTaluk} />
            </Grid>
        )
    }                                          
    
    PermanentDistrict = () => {
        const { values } = this.state;
        const { currentPermanentDistrict } = values;

        const setPermanentDistrict = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPermanentDistrict:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setPermanentDistrict} label="District" placeholder="District" value={this.state.values.currentPermanentDistrict} />
            </Grid>
        )
    }      

    PermanentState = () => {
        const { values } = this.state;
        const { currentPermanentState } = values;

        const setPermanentState = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPermanentState:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setPermanentState} label="State" placeholder="State" value={this.state.values.currentPermanentState} />
            </Grid>
        )  
    }    

    AdmissionNumber = () => {
        const { values } = this.state;
        const { currentAdmissionNumber } = values;

        const setAdmissionNumber = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentAdmissionNumber:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setAdmissionNumber} label="Admission Number" placeholder="Admission Number" value={this.state.values.currentAdmissionNumber} />
            </Grid>
        )
    }  

    AdmissionDate = () => {
        const { values } = this.state;
        const { currentAdmissionDate } = values;

        const setAdmissionDate = (value: Date | null) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentAdmissionDate:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputDate date={this.state.values.currentAdmissionDate} onChange={setAdmissionDate}/>
            </Grid>
        )
    } 
    
    STSNumber = () => {
        const { values } = this.state;
        const { currentSTSNumber } = values;

        const setSTSNumber = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentSTSNumber:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setSTSNumber} label="STS Number" placeholder="STS Number" value={this.state.values.currentSTSNumber} />
            </Grid>
        )
    }      
    
    JoiningYear = () => {
        const { values } = this.state;
        const { currentJoiningYear } = values;

        const setJoiningYear = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentJoiningYear:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setJoiningYear} label="Joining Year" placeholder="Joining Year" value={this.state.values.currentJoiningYear} />
            </Grid>
        )
    }      
    
    RollNumber = () => {
        const { values } = this.state;
        const { currentRollNumber } = values;

        const setRollNumber = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentRollNumber:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={4}>
                <InputTextField onChange={setRollNumber} label="Roll Number" placeholder="Roll Number" value={this.state.values.currentRollNumber} />
            </Grid>
        )
    } 

    BirthCerficateNumber = () =>{
        const { values } = this.state;
        const { currentBirthCerficateNumber } = values;

        const setBirthCerficateNumber = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentBirthCerficateNumber:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setBirthCerficateNumber} label="Birth Certificate No." placeholder="Birth Certificate No." value={this.state.values.currentBirthCerficateNumber} />
            </Grid>
        )
    }

    AdhaarNumber = () =>{
        const { values, errors } = this.state;
        const { currentAdhaarNumber } = values;
        const { currentAdhaarNumber : errorAdhaarNumber } = errors;

        const setAdhaarNumber = (value: string) => {
            value=value.replace(/\D/g, "");
            if(value.length<=12){
                if(!validateAdhaarNumber(value)){
                    this.setState((prevState) => ({
                        errors:{
                            ...prevState.errors,
                            currentAdhaarNumber:'Adhaar Number must be 12 digits.'
                        },
                    }))
                }else{
                    this.setState((prevState) => ({
                        errors:{
                            ...prevState.errors,
                            currentAdhaarNumber:''
                        },
                    }))
                } 

                this.setState((prevState) => ({
                    values:{
                    ...prevState.values,
                    currentAdhaarNumber:value
                    },
                })) 
            }

        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setAdhaarNumber} label="Adhaar Number" placeholder="Adhaar Number" value={this.state.values.currentAdhaarNumber} helperText={this.state.errors.currentAdhaarNumber} error={this.state.errors.currentAdhaarNumber?true:false}/>
            </Grid>
        )
    }    
    
    PassportNumber = () =>{
        const { values } = this.state;
        const { currentPassportNumber } = values;

        const setPassportNumber = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentPassportNumber:value
                },
            }))
        }

        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setPassportNumber} label="Passport Number" placeholder="Passport Number" value={this.state.values.currentPassportNumber} />
            </Grid>
        )
    }    

    DrivingLicenceNumber = () =>{
        const { values } = this.state;
        const { currentDrivingLicenceNumber } = values;

        const setDrivingLicenceNumber = (value: string) => {

            this.setState((prevState) => ({
                values:{
                ...prevState.values,
                currentDrivingLicenceNumber:value
                },
            }))
        };
        return (
            <Grid item xs={12} md={6} lg={3}>
                <InputTextField onChange={setDrivingLicenceNumber} label="DrivingLicenece No." placeholder="DrivingLicenece No." value={this.state.values.currentDrivingLicenceNumber} />
            </Grid>
        )
    }

    onSubmit = (e:any) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('studentData', JSON.stringify(this.state.values));
    }


    public render() {

        return (
            <>
                <Container maxWidth="lg">
                    <Card className="">
                        <CardContent>
                            <Typography className="" color="textSecondary" gutterBottom>
                                <Header textType={TextType.header} text="Student Profiling" className="mainHeader" />
                            </Typography>
                                
                            <Grid container spacing={2}>
                                
                                <form onSubmit={this.onSubmit}>
                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <div className="card-header--title font-size-md font-weight-bold ml-2 my-3">
                                            <Header textType={TextType.header} text="Primary Information" className="HeadingContainer" />
                                        </div>
                                        <Grid container spacing={2}>
                                            {this.FirstName()}
                                            {this.MiddleName()}
                                            {this.LastName()}
                                            {this.Gender()}
                                            {this.BloodGroup()}
                                            {this.DateOfBirth()}
                                            {this.MotherTongue()}
                                            {this.Nationality()}
                                            {this.Religion()}
                                            {this.Caste()}
                                            {this.CastCategory()}
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <div className="card-header--title font-size-md font-weight-bold ml-2 my-3">
                                            <Header textType={TextType.header} text="Contact Details" className="HeadingContainer" />
                                        </div>

                                        <Grid container spacing={2}>
                                            {this.Phone()}
                                            {this.Email()}
                                            {this.LinkedInId()}
                                            {this.FacebookId()}
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <div className="card-header--title font-size-md font-weight-bold ml-2 my-3">
                                            <Header textType={TextType.header} text="Correspondance Address" className="HeadingContainer" />
                                        </div>

                                        <Grid container spacing={2}>
                                            {this.CorrespondanceAddress1()}
                                            {this.CorrespondanceAddress2()}
                                            {this.CorrespondancePincode()}
                                            {this.CorrespondancePostOffice()}
                                            {this.CorrespondanceTaluk()}
                                            {this.CorrespondanceDistrict()}
                                            {this.CorrespondanceState()}
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <div className="card-header--title font-size-md font-weight-bold ml-2 my-3">
                                            <Header textType={TextType.header} text="Permanent Address" className="HeadingContainer" />
                                        </div>

                                        <Grid container spacing={2}>
                                            {this.PermanentAddress1()}
                                            {this.PermanentAddress2()}
                                            {this.PermanentPincode()}
                                            {this.PermanentPostOffice()}
                                            {this.PermanentTaluk()}
                                            {this.PermanentDistrict()}
                                            {this.PermanentState()}
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <div className="card-header--title font-size-md font-weight-bold ml-2 my-3">
                                            <Header textType={TextType.header} text="Admission Details" className="HeadingContainer" />
                                        </div>

                                        <Grid container spacing={2}>
                                            {this.AdmissionNumber()}
                                            {this.AdmissionDate()}
                                            {this.STSNumber()}
                                            {this.JoiningYear()}
                                            {this.RollNumber()}
                                        </Grid>

                                    </Grid>                                

                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <div className="card-header--title font-size-md font-weight-bold ml-2 my-3">
                                            <Header textType={TextType.header} text="Supporting Documents References" className="HeadingContainer" />
                                        </div>

                                        <Grid container spacing={2}>
                                            {this.BirthCerficateNumber()}
                                            {this.AdhaarNumber()}
                                            {this.PassportNumber()}
                                            {this.DrivingLicenceNumber()}
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} sm={12} lg={12} className="p-3 h4" >
                                        <SubmitButton/>
                                    </Grid>
                                </form>

                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </>

        )
    }
}

export default StudentProfiling;