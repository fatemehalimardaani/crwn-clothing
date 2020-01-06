import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepages'
import ShopPage from './Pages/Shoppage/shop';
import SignInSignUp from "./Pages/sign-in-sign-up/sing-in-sgin-up";
import Header from "./Components/Header/Header";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            currentUser:null
        }

        console.log(this.state);
    }



    unsubscribeFromAuth=null;

    componentDidMount() {
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if (userAuth){
                const userRef=await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    console.log(snapshot.data());
                    this.setState({
                        currentUser:{
                            id:snapshot.id,
                            ...snapshot.data()
                        }

                    },()=>{
                        console.log(this.state)

                    })
                })

            }

        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
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
