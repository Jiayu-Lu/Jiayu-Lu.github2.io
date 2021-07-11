import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Index from './pages/index/index';
import ALiShow from './pages/aLiShow/aLiShow';

export default function App() {
  return (
    <Router>
 
      <Switch>

        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/aLiShow">
          <ALiShow />
        </Route>

        
      </Switch>
 
    </Router>
    
  );
}
