import React from 'react';
import './App.css';
import StudentProfiling from './Components/StudentProfiling'

interface IState {
  currentemailId: string;
  curentemailidError: string;
  currentpassword: string;
  currentPasswordError: string;
  currentloginError: string;
  successMessage: string;
  isVisiblePassword: boolean;
}

const  App=()=> {
  return (
    <div className="App">
       <StudentProfiling/>
    </div>
  );
}

export default App;
