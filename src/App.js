import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Index from './pages/index';

export default function App() {
  return (
    <Router>
 
      <Switch>

        <Route exact path="/">
          <Index />
        </Route>

        
      </Switch>
 
    </Router>
    
  );
}
