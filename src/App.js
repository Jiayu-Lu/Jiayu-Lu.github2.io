import './App.css';
import {Route, Switch} from 'react-router-dom';

import Index from './pages/index/index';
import ALiShow from './pages/aLiShow/aLiShow';

export default function App() {
  return (
    <div>
 

        <Route path="/aLiShow" component={ALiShow} />


        <Route exact path="/" component={Index} />

        
 
    </div>
    
  );
}
