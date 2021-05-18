import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import StepperMenu from './components/StepperMenu';
import StripeCheckout from 'react-stripe-checkout';
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import './App.css';

import LinearStepper from './components/LinearStepper';
import CategoryBox from './components/CategoryBox';


const App = () => {
  // stripe
  const onToken = (token) => {
        
    console.log('token->', token);
}
  return (
    <>

    <StripeCheckout
                            stripe="pk_test_51IqzWcSDIz5xW9l7w2srw2xfPairSPsNrNqWFAIA6ThAKifLXZvZJjbi2CfJXcTnrSkS14VmTlNusnwS8Dlo26e800erVbrusq"
                            token={onToken}
                            />
    <Provider store= {store}>
    <Router>
    <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
      {/* <StepperMenu /> */}
      {/* <LinearStepper /> */}
      <div className="App">
        <Switch>
        <Route exact path='/' component={LinearStepper} />
          {/* <Route exact path='/' component={CategoryBox} /> */}
          {/* <Route exact path='/category/items' component={Items} /> */}
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
