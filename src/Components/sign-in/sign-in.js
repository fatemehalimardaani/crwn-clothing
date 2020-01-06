import React from 'react';
import FormInput from './../form-input/form-input'
import './sign-in.scss';
import CustomButton from './../../Components/custom-button/custom-btn';
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''

        }
    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {email,password}=this.state;


        try{

            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })

        }catch(e){
            console.log(e)
            alert(e.message)

        }

        
        this.setState({email:'',password:''})
    };
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
        console.log(this.state);
    };
    render() {
        console.log(this.state);
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="password" name="password" type="password" value={this.state.password} required handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton  type="submit">Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            Sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;