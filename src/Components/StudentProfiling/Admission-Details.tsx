import React from 'react';
import './style.scss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Grid, Card } from '@material-ui/core';
import InputTextField from '../InputTextField';
import InputDate from '../InputDate';
import { TextType } from '../Constant/configs';
import Header from '../Header';

interface IState {
    admission_no?: string;
    admissionDate?: Date | null;
    sts_no?: string;
    year_of_joining?: string;
    roll_no?: string;

    values?: {
        admission_no?: string;
        admissionDate?: Date | null;
        sts_no?: string;
        year_of_joining?: string;
        roll_no?: string;
    };
    errors?: {
        admission_no?: string;
        admissionDate?: string;
        sts_no?: string;
        year_of_joining?: string;
        roll_no?: string;
    };
}

class AdmissionDetails extends React.Component< IState> {

    private initializeState = () => {

        return {
            admission_no: '',
            admissionDate: new Date(),
            sts_no: '',
            year_of_joining: '',
            roll_no: '',
            values: {
                admission_no: '',
                admissionDate: new Date(),
                sts_no: '',
                year_of_joining: '',
                roll_no: '',
            },
            errors: {
                admission_no: '',
                admissionDate: '',
                sts_no: '',
                year_of_joining: '',
                roll_no: '',
            }
        }

    }

    public state = this.initializeState();

    onAdmissionNoChange = (value: string) => {
        this.setState({ admission_no: value })
    }
    onAdmissionDateChange = (value: Date | null) => {
        this.setState({ admissionDate: value })
    }
    onSTSNoChange = (value: string) => {
        this.setState({ sts_no: value })
    }
    onYearOfJoining = (value: string) => {
        this.setState({ year_of_joining: value })
    }
    onRollNoChange = (value: string) => {
        this.setState({ roll_no: value })
    }

    public render() {

        return (
            <div>
                <Grid justify="center">
                    <Card>
                        <Grid item xs={12} sm={12} lg={11} className="p-3 h4" >
                            <div className="card-header--title font-size-md font-weight-bold ml-2">
                                <Header textType={TextType.header} text="Admission Details" className="HeadingContainer p-5" />
                            </div>
                            <Grid container spacing={2} >
                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputTextField onChange={this.onAdmissionNoChange} label="Admission Number" placeholder="" value={this.state.admission_no} />
                                </Grid>
                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputDate onChange={this.onAdmissionDateChange} label={'Admission Details'}  date={this.state.admissionDate}/>
                                </Grid>
                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputTextField onChange={this.onSTSNoChange} label="STS Number" placeholder="" value={this.state.sts_no} />
                                </Grid>
                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputTextField onChange={this.onYearOfJoining} label="Year Of Joining" placeholder="" value={this.state.year_of_joining} />
                                </Grid>
                                <Grid item xs={12} lg={4} className="py-1">
                                    <InputTextField onChange={this.onRollNoChange} label="Roll Number" placeholder="" value={this.state.roll_no} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </div>
        )
    }
}

export default AdmissionDetails;