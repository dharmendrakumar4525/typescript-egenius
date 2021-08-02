import React from 'react';
import './style.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
    FormControl, TextField, Grid, Card
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import InputTextField from '../InputTextField';
import InputDate from '../InputDate';
import { personnelInformation, TextType } from '../Constant/configs';
import Header from '../Header';
import DropDown from '../DropDown';
import InputPhone from '../InputPhone'




interface IProps {
    emailId?: string;
    redirectLink?: string;
}

interface IState {
    currentFirstName?: string;
    currentMiddleName?: string;
    currentLastName?: string;
    GenderMaster: string[];
    currentGender?: string;
    currentBloodGroup?: string;
    BloodGroupMaster: string[];
    dateOfBirth?: Date | null;
    currentMotherTongue?: string;
    NationalityMaster: string[];
    currentNationality: string;
    ReligionMaster: string[];
    currentReligion: string;
    currentCaste: string;
    currentCategory: string;
    currentPhoneNumber: any;
    communicationAddressline1: string;
    communicationAddressline2: string;
    pincode: any;
    postOffice: string;
    talluk: string;
    district: string;
    states: string;
    permanentAddressline1: string;
    permanentAddressline2: string;
    pincode2: any,
    postOffice2: string,
    talluk2: string,
    district2: string,
    states2: string,


    values: {
        currentFirstName?: string;
        currentMiddleName?: string;
        currentLastName?: string;
        GenderMaster: string[];
        currentGender?: string;
        currentBloodGroup?: string;
        BloodGroupMaster: string[];
        dateOfBirth?: Date | null;
        currentMotherTongue?: string;
        NationalityMaster: string[];
        currentNationality: string;
        ReligionMaster: string[];
        currentReligion: string;
        currentCaste: string;
        currentCategory: string;
        currentPhoneNumber: any;
        communicationAddressline1: string;
        communicationAddressline2: string;
        pincode: any;
        postOffice: string;
        talluk: string;
        district: string;
        states: string;
        permanentAddressline1: string;
        permanentAddressline2: string;
        pincode2: any,
        postOffice2: string,
        talluk2: string,
        district2: string,
        states2: string,
        };
    errors: {
        currentFirstName?: string;
        currentMiddleName?: string;
        currentLastName?: string;
        GenderMaster: string;
        currentGender?: string;
        currentBloodGroup?: string;
        BloodGroupMaster: string;
        dateOfBirth?: string;
        currentMotherTongue?: string;
        NationalityMaster: string;
        currentNationality: string;
        ReligionMaster: string;
        currentReligion: string;
        currentCaste: string;
        currentCategory: string;
        currentPhoneNumber: any;
        communicationAddressline1: string;
        communicationAddressline2: string;
        pincode: any;
        postOffice: string;
        talluk: string;
        district: string;
        states: string;
        permanentAddressline1: string;
        permanentAddressline2: string;
        pincode2: string,
        postOffice2: string,
        talluk2: string,
        district2: string,
        states2: string,
    };
}

class StudentProfiling extends React.Component<IProps, IState> {

    private initializeState = () => {

        const { emailId } = this.props;


        return {
            currentFirstName: '',
            currentMiddleName: '',
            currentLastName: '',
            GenderMaster: personnelInformation.GenderMaster,
            currentGender: '',
            currentBloodGroup: '',
            BloodGroupMaster: personnelInformation.BloodGroupMaster,
            dateOfBirth: new Date(),
            currentMotherTongue: '',
            NationalityMaster: personnelInformation.NationalityMaster,
            currentNationality: '',
            ReligionMaster: personnelInformation.ReligionMaster,
            currentReligion: '',
            currentCaste: '',
            currentCategory: '',
            currentPhoneNumber: '',
            communicationAddressline1: '',
            communicationAddressline2: '',
            pincode: '',
            postOffice: '',
            talluk: '',
            district: '',
            states: '',
            permanentAddressline1: '',
            permanentAddressline2: '',
            pincode2: '',
            postOffice2: '',
            talluk2: '',
            district2: '',
            states2: '',

            values: {
                currentFirstName: '',
                currentMiddleName: '',
                currentLastName: '',
                GenderMaster: personnelInformation.GenderMaster,
                currentGender: '',
                currentBloodGroup: '',
                BloodGroupMaster: personnelInformation.BloodGroupMaster,
                dateOfBirth: new Date(),
                currentMotherTongue: '',
                NationalityMaster: personnelInformation.NationalityMaster,
                currentNationality: '',
                ReligionMaster: personnelInformation.ReligionMaster,
                currentReligion: '',
                currentCaste: '',
                currentCategory: '',
                currentPhoneNumber: '',
                communicationAddressline1:'',
                communicationAddressline2: '',
                pincode: '',
                postOffice: '',
                talluk: '',
                district: '',
                states: '',
                permanentAddressline1: '',
                permanentAddressline2: '',
                pincode2: '',
                postOffice2: '',
                talluk2: '',
                district2: '',
                states2: '',
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
                currentMotherTongue: '',
                NationalityMaster: '',
                currentNationality: '',
                ReligionMaster: '',
                currentReligion: '',
                currentCaste: '',
                currentCategory: '',
                currentPhoneNumber: '',
                communicationAddressline1: '',
                communicationAddressline2: '',
                pincode: '',
                postOffice: '',
                talluk: '',
                district: '',
                states: '',
                permanentAddressline1: '',
                permanentAddressline2: '',
                pincode2: '',
                postOffice2: '',
                talluk2: '',
                district2: '',
                states2: '',
            }
        }

    }

    public state = this.initializeState();







    onMiddleName = (value: string) => {
        this.setState({ currentMiddleName: value })
    }
    onLastName = (value: string) => {
        this.setState({ currentLastName: value })
    }
    onGenderChange = (value: string) => {
        this.setState({ currentGender: value })
    }
    onBloodGroupChange = (value: string) => {
        this.setState({ currentBloodGroup: value })
    }
    onDateOfBirthChange = (value: Date | null) => {
        this.setState({ dateOfBirth: value })
    }
    onMotherTongueChange = (value: string) => {
        this.setState({ currentMotherTongue: value })
    }
    onNationalChange = (value: string) => {
        this.setState({ currentNationality: value })
    }
    onReligionChange = (value: string) => {
        this.setState({ currentReligion: value })
    }
    onCasteChange = (value: string) => {
        this.setState({ currentCaste: value })
    }
    onCastCategoryChange = (value: string) => {
        this.setState({ currentCategory: value })
    }
    onPhoneChange = (value: any) => {
        this.setState({ currentPhoneNumber: value })
    }

    FirstName = () => {
        const { values } = this.state;
        const { currentFirstName } = values;

        const setFirstName = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                currentFirstName:value
                },
            }
            )
            )
        }

        return (
            <Grid item xs={12} lg={4} className="py-1">
                <InputTextField onChange={setFirstName} label="First Name" placeholder="" value={this.state.values.currentFirstName} />
            </Grid>
        )
    }
    communicationAddressline1 = () => {
        const { values } = this.state;
        const { communicationAddressline1 } = values;

        const setCommunicationAddressline1 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                communicationAddressline1:value
                },
            }
            )
            )
        }

        return (
       
                <InputTextField onChange={setCommunicationAddressline1} label="Communication address line1" placeholder="" value={this.state.values.communicationAddressline1} />

        )
    }
    communicationAddressline2 = () => {
        const { values } = this.state;
        const { communicationAddressline1 } = values;

        const setCommunicationAddressline2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                communicationAddressline2:value
                },
            }
            )
            )
        }

        return (
            
                <InputTextField onChange={setCommunicationAddressline2} label="Communication address line2" placeholder="" value={this.state.values.communicationAddressline2} />
         
        )
    }
    pincode = () => {
        const { values } = this.state;
        const { pincode } = values;

        const setPincode = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                pincode:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setPincode} label="Pincode" placeholder="" value={this.state.values.pincode} />
          
        )
    }
    postoffice = () => {
        const { values } = this.state;
        const { postOffice } = values;

        const setPostoffice = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                postOffice:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setPostoffice} label="Post Office" placeholder="" value={this.state.values.postOffice} />
          
        )
    }
    talluk = () => {
        const { values } = this.state;
        const { talluk } = values;

        const setTalluk = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                talluk:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setTalluk} label="Talluk" placeholder="" value={this.state.values.talluk} />
          
        )
    }
    district = () => {
        const { values } = this.state;
        const { district } = values;

        const setDistrict = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                district:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setDistrict} label="District" placeholder="" value={this.state.values.district} />
          
        )
    }
    states = () => {
        const { values } = this.state;
        const { states } = values;

        const setStates = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                states:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setStates} label="State" placeholder="" value={this.state.values.states} />
          
        )
    }
    permanentAddressline1 = () => {
        const { values } = this.state;
        const { permanentAddressline1 } = values;

        const setPermanentAddressline1 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                permanentAddressline1:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setPermanentAddressline1} label="Permanent Address line1" placeholder="" value={this.state.values.permanentAddressline1} />
          
        )
    }
    permanentAddressline2 = () => {
        const { values } = this.state;
        const { permanentAddressline2 } = values;

        const setPermanentAddressline2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                permanentAddressline2:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setPermanentAddressline2} label="Permanent Address line2" placeholder="" value={this.state.values.permanentAddressline2} />
          
        )
    }
    pincode2 = () => {
        const { values } = this.state;
        const { pincode2 } = values;

        const setPincode2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                pincode2:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setPincode2} label="Pincode" placeholder="" value={this.state.values.pincode2} />
          
        )
    }
    postoffice2 = () => {
        const { values } = this.state;
        const { postOffice2 } = values;

        const setPostoffice2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                postOffice2:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setPostoffice2} label="Postoffice" placeholder="" value={this.state.values.postOffice2} />
          
        )
    }
    talluk2 = () => {
        const { values } = this.state;
        const { talluk2 } = values;

        const setTalluk2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                talluk2:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setTalluk2} label="Talluk" placeholder="" value={this.state.values.talluk2} />
          
        )
    }
    district2 = () => {
        const { values } = this.state;
        const { district } = values;

        const setDistrict2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                district2:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setDistrict2} label="District" placeholder="" value={this.state.values.district2} />
          
        )
    }
    states2 = () => {
        const { values } = this.state;
        const { states } = values;

        const setStates2 = (value: string) => {
           
            this.setState((prevState)=>({
                values:{
                ...prevState.values,
                states2:value
                },
            }
            )
            )
        }

        return (
           
                <InputTextField onChange={setStates2} label="State" placeholder="" value={this.state.values.states2} />
          
        )
    }

    public render() {

        return (
            <>

                <Header textType={TextType.header} text="Student Profiling" className="customCard h3" />
                <Grid container spacing={2} justify={"center"}>
                    <Card>
                        <Grid item xs={12} sm={12} lg={10} className="p-3 h4" >
                            <div className="card-header--title font-size-md font-weight-bold ml-2">
                                <Header textType={TextType.header} text="Primary Information" className="HeadingContainer p-5" />
                            </div>

                            <Grid container spacing={2}>


                                {this.FirstName()}

                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputTextField onChange={this.onMiddleName} label="Middle Name" placeholder="" value={this.state.currentMiddleName} />
                                </Grid>
                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputTextField onChange={this.onLastName} label="Last Name" placeholder="" value={this.state.currentLastName} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <DropDown label={'Select Gender'} onChange={this.onGenderChange} DataMaster={this.state.GenderMaster} value={this.state.currentGender} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <DropDown label={'Select Blood Group'} onChange={this.onBloodGroupChange} DataMaster={this.state.BloodGroupMaster} value={this.state.currentBloodGroup} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <InputDate date={this.state.dateOfBirth} onChange={this.onDateOfBirthChange} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <InputTextField onChange={this.onMotherTongueChange} label="Mother Tongue" placeholder="" value={this.state.currentMotherTongue} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <DropDown label={'Select Nationality'} onChange={this.onNationalChange} DataMaster={this.state.NationalityMaster} value={this.state.currentNationality} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <DropDown label={'Select Religion'} onChange={this.onReligionChange} DataMaster={this.state.ReligionMaster} value={this.state.currentReligion} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <InputTextField onChange={this.onCasteChange} label="Caste" placeholder="" value={this.state.currentCaste} />
                                </Grid>
                                <Grid item xs={12} lg={3} className="py-1">
                                    <InputTextField onChange={this.onCastCategoryChange} label="Caste Category" placeholder="" value={this.state.currentCategory} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} lg={10} className="p-4 h5" >
                            <div className="card-header--title font-size-md font-weight-bold ml-2">
                                <Header textType={TextType.header} text="Contact Details" className="HeadingContainer p-5" />
                            </div>

                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={4} className="py-2">

                                    <InputPhone onChange={this.onPhoneChange} label="Phone Number" value={this.state.currentPhoneNumber} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={10} className="p-3 h4" >
                            
                            <div className="card-header--title font-size-md font-weight-bold m2-3">
                                <Header textType={TextType.header} text="Correspondance Address" className="HeadingContainer p-5" />
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={4} lg={4} className="py-3">
                                {this.communicationAddressline1()}
                                </Grid>
                                <Grid item xs={4} lg={4} className="py-3">
                                {this.communicationAddressline2()}
                                </Grid> 
                                <Grid item xs={4} lg={4} className="py-3">
                                {this.pincode()}
                                </Grid>
                            </Grid>    
                            <Grid container spacing={2}>
                                <Grid item xs={3}  className="py-4">
                                {this.postoffice()}
                                </Grid>
                                <Grid item xs={3}  className="py-4">
                                {this.talluk()}
                                </Grid> 
                                <Grid item xs={3}  className="py-4">
                                {this.district()}
                                </Grid>
                                <Grid item xs={3}  className="py-4">
                                {this.states()}
                                </Grid>
                            </Grid>    
                        </Grid>  
                        
                           
                      
                        <Grid item xs={12} sm={12}  className="p-4 h5" >
                            
                            <div className="card-header--title font-size-md font-weight-bold ml-2">
                                <Header textType={TextType.header} text="Permanent Address" className="HeadingContainer p-5" />
                            </div>
                            <Grid container spacing={2}>
                                <Grid item xs={4}  className="py-5">
                                {this.permanentAddressline1()}
                                </Grid>
                                <Grid item xs={4}  className="py-5">
                                {this.permanentAddressline2()}
                                </Grid> 
                                <Grid item xs={4}  className="py-5">
                                {this.pincode2()}
                                </Grid>
                            </Grid> 
                            <Grid container spacing={2}>
                                <Grid item xs={3}  className="py-6">
                                {this.postoffice2()}
                                </Grid>
                                <Grid item xs={3}  className="py-6">
                                {this.talluk2()}
                                </Grid> 
                                <Grid item xs={3}  className="py-6">
                                {this.district2()}
                                </Grid>
                                <Grid item xs={3}  className="py-6">
                                {this.states2()}
                                </Grid>
                            </Grid>   
                        </Grid>   
                    </Card>
                </Grid>
            </>

        )
    }
}

export default StudentProfiling;