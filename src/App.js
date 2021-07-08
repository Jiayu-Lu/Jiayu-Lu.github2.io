import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
 
      <Switch>

        <Route exact path="/">
          <div>Hello</div>
        </Route>

        
      </Switch>
 
    </Router>
    
  );
}
