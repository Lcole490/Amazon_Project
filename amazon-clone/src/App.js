import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart'
import Home from './Components/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { db } from './firebase'


function App() {


  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) =>({
        id: doc.id, 
        product: doc.data()
      }));

      setCartItems(tempItems)
    })

  }


  useEffect(()=>{

    getCartItems();

  }, [])   //    UseEffect runs the function upon loading of page,

  console.log(cartItems)

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
