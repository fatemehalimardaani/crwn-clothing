import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepages'
import ShopPage from './Pages/Shoppage/shop';
import SignInSignUp from "./Pages/sign-in-sign-up/sing-in-sgin-up";
import Header from "./Components/Header/Header";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
class App extends React.Component{
    
    unsubscribeFromAuth=null;
    componentDidMount() {
        const {setCurrentUser}=this.props;
        this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
            if (userAuth){
                const userRef=await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    console.log(snapshot.data());
                    setCurrentUser({
                            id:snapshot.id,
                            ...snapshot.data()
                    },()=>{
                        console.log(this.state)

                    })
                })

            }
            setCurrentUser(userAuth)

        })
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth()
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
const mapDispatchToProps=(dispatch)=>(
    {
        setCurrentUser:user=>dispatch(setCurrentUser(user))
    }
)
export default connect(null,mapDispatchToProps)(App);
