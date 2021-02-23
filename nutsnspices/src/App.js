import {Switch, Route} from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
function App() {
  return (
    <Switch>
      <Route exact path='/Register'>
        <div className="App">
            <Register />
        </div>
      </Route>
    </Switch>
    
  );
}

export default App;
