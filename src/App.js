
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';

// history pros perform the same as Link props.history.push('/topic')
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
