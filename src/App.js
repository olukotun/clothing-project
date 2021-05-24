
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'


// history pros perform the same as Link props.history.push('/topic')
const HatsPage =()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <HomePage />
          <Route exact path="/new" component={HatsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
