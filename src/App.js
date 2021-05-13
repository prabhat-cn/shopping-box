import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import StepperMenu from './components/StepperMenu';
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import './App.css';

import LinearStepper from './components/LinearStepper';


function App() {
  return (
    <Provider store= {store}>
    <Router>
    <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
      {/* <StepperMenu /> */}
      <LinearStepper />
      <div className="App">
        <Switch>
          {/* <Route exact path='/' component={CategoryBox} /> */}
          {/* <Route exact path='/category/items' component={Items} /> */}
          {/* <Route exact path='*'>404 Not Found!</Route> */}
        </Switch>
    </div>
    </Paper>
      </Container>
    </Router>
    </Provider>
    
  );
}

export default App;
