import React from 'react';
import './sing-in-sgin-up.scss';
import SignIn from '../../Components/sign-in/sign-in';
import SignUp from "../../Components/sign-up/sign-up";
const SignInSignUp=()=>(
    <div className="sign-in-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);
export default SignInSignUp;