import { constants } from "zlib";

export enum TextType {
    header = 'Student Profiling',
    subHeader1='Primary Information',
    subHeader2='Contact Details',
    subHeader3='Correspondance Address',
    subHeader4='Permanent Address',
    subHeader5='Admission Details',
    subHeader6='Supporting Documents References',
    success = 'success',
    error = 'error'
};

export const personalInformation = {
    GenderMaster : ["Male", "Female", "Other"],
    BloodGroupMaster : ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    NationalityMaster : ["Indian"],
    ReligionMaster : ["Hindus", "Muslims", "Christians", "Sikhs", "Buddhists", "Jains", "Others"]
};