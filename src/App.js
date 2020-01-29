import React from 'react';
import './App.css';
import {Switch, Route , Redirect} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepages'
import ShopPage from './Pages/Shoppage/shop';
import SignInSignUp from "./Pages/sign-in-sign-up/sing-in-sgin-up";
import CheckOut from './Pages/Checkout/checkout.component'
import Header from "./Components/Header/Header";
import {auth,createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selector'
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
                    <Route exact path='/checkout' component={CheckOut}/>

                    <Route  path='/signin' 
                    
                    render={()=>(
                        this.props.currentUser ? (<Redirect to="/" />) : (
                            <SignInSignUp/>
                        )
                    )}
                    
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps= state =>({
    setCurrentUser:selectCurrentUser(state),

})

const mapDispatchToProps=(dispatch) => {
    console.log(dispatch)
    return(
        {
            setCurrentUser:user=>dispatch(setCurrentUser(user))
        }
    )
    
}
console.log(mapDispatchToProps)   

export default connect(
    mapStateToProps,
    mapDispatchToProps)(App);
