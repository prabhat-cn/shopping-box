import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import StepperMenu from './components/StepperMenu';
import StripeCheckout from 'react-stripe-checkout';
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import './App.css';

import LinearStepper from './components/LinearStepper';
import Items from './components/Items';
import CategoryBox from './components/CategoryBox';


const App = () => {
  
  return (
    <>

    
    <Provider store= {store}>
    <Router>
    <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
      {/* <Items /> */}
      {/* <LinearStepper /> */}
      <div className="App">
        <Switch>
        <Route exact path='/' component={LinearStepper} />
          <Route exact path='/categoryBox' component={CategoryBox} />
          <Route exact path='/items' component={Items} />
          {/* <Route exact path='*'>404 Not Found!</Route> */}
        </Switch>
    </div>
    </Paper>
      </Container>
    </Router>
    </Provider>

    </>
    
  );
}

export default App;
