import { Grid, Card } from '@material-ui/core';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { personnelInformation, TextType } from '../Constant/configs';
import DropDown from '../DropDown';
import Header from '../Header';
import InputDate from '../InputDate';
import InputPhone from '../InputPhone'
import InputTextField from '../InputTextField';
import AdmissionDetails from './Admission-Details';
import './style.scss';
import React from 'react';


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
                currentPhoneNumber: ''
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
                currentPhoneNumber: ''
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

                        <Grid item xs={12} sm={12} lg={10} className="p-3 h4" >
                            <div className="card-header--title font-size-md font-weight-bold ml-2">
                                <Header textType={TextType.header} text="Contact Details" className="HeadingContainer p-5" />
                            </div>

                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={4} className="py-1">

                                    <InputPhone onChange={this.onPhoneChange} label="Phone Number" value={this.state.currentPhoneNumber} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <AdmissionDetails/>
            </>

        )
    }
}

export default StudentProfiling;