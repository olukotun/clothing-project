import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

// history pros perform the same as Link props.history.push('/topic')

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

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
