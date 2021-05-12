import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import FrontPage from './components/FrontPage';
import './App.css';


function App() {
  return (
    <Provider store= {store}>
    <Router>
      <div className="App">
      <FrontPage />

    </div>
    </Router>
    </Provider>
    
  );
}

export default App;
