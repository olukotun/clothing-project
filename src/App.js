import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-up';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

// history pros perform the same as Link props.history.push('/topic')

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(this.state)
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render ={()=>this.props.currentUser ? (<Redirect to='/' />): <SignInAndSignUp />}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// const Home = (props) => {
//   console.log(props);
//   return (
//     <div className="">
//       <Link to="/topics">Topics</Link>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };
// const Topic = (props) => {
//   console.log(props);
//   return (
//     <div className="">
//       <h1>TOPIC PAGE</h1>
//     </div>
//   );
// };
// const TopicsList = () => (
//   <div className="">
//     <h1>TOPIC LIST PAGE</h1>
//   </div>
// );
// const TopicDetails = (props) => {
//   console.log(props);
//   return (
//     <div className="">
//       <h1>TOPIC DETAILS PAGE: {props.match.params.topicId}</h1>
//     </div>
//   );
// };
