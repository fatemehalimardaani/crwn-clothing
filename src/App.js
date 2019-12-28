import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepages'
import ShopPage from './Pages/Shoppage/shop';
import SignInSignUp from "./Pages/sign-in-sign-up/sing-in-sgin-up";
import Header from "./Components/Header/Header";
import {auth} from "./firebase/firebase.utils";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser:null
        }
    }
    componentDidMount() {
        auth.onAuthStateChanged(user=>{
            this.setState({
                currentUser:user
            })
            console.log(user)
        })
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route  path='/shop' component={ShopPage}/>
                    <Route  path='/signin' component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
