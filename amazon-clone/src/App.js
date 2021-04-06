import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>

      
        <Switch>

          <Route path ="/cart">
           <Cart/>
          </Route>
          
          <Route path = "/">
            
            <Home/>
            
            </Route>
         
          
        </Switch>
      </Router>
      
  
    </div>
  );
}

export default App;
