import React from 'react';
import './sign-up.scss';
import CustomButton from './../custom-button/custom-btn';
import FormInput from "../form-input/form-input";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
class SignUp extends React.Component{
    constructor() {
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPass:''
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPass}=this.state;
        if (password !==confirmPass ){
            alert("password doent match");
            return;
        }
        try {
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPass:''
            })
        }catch (error) {
            alert(error.message);
            console.error(error)
        }
    };

    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        const {displayName,email,password,confirmPass}=this.state;
        return(
            <div className="sign-up">
                <h2 className="title">Idon't have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="email" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="password" required />
                    <FormInput type="password" name="confirmPass" value={confirmPass} onChange={this.handleChange} label="confirm Password" required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;