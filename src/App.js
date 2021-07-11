import './App.css';
import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';

import Index from './pages/index/index';
import ALiShow from './pages/aLiShow/aLiShow';

export default function App() {
  return (
    <Router>
 
      <Switch>

        <HashRouter basename="/">
          <Index />
        </HashRouter>

        <HashRouter basename="/aLiShow">
          <ALiShow />
        </HashRouter>

        
      </Switch>
 
    </Router>
    
  );
}
