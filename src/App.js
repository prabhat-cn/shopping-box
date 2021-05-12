import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import StepperMenu from './components/StepperMenu';
import './App.css';
import Items from './components/Items';
import CategoryBox from './components/CategoryBox';


function App() {
  return (
    <Provider store= {store}>
    <Router>
      <StepperMenu />
      <div className="App">
        <Switch>
          {/* <Route exact path='/' component={CategoryBox} /> */}
          {/* <Route exact path='/category/items' component={Items} /> */}
          {/* <Route exact path='*'>404 Not Found!</Route> */}
        </Switch>
    </div>
    </Router>
    </Provider>
    
  );
}

export default App;
