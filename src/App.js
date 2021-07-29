import './App.css';
import {Route, Switch} from 'react-router-dom';

import Index from './pages/index/index';
import ALiShow from './pages/aLiShow/aLiShow';
import ToDoList from './pages/toDoList/toDoList';
import GithubSearch from './pages/githubSearch/githubSearch';

export default function App() {
  return (
    <div>

        <Route path="/githubSearch" component={GithubSearch} />
        <Route path="/toDoList" component={ToDoList} />
        <Route path="/aLiShow" component={ALiShow} />
        <Route exact path="/" component={Index} />
        
    </div>
    
  );
}
