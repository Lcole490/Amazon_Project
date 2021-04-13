import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart'
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { db } from './firebase'
import styled from 'styled-components'


function App() {

  const [user, setUser] = useState(null)
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
  
    <Router>
      {
        !user ? (
          <Login setUser = {setUser}/>
        ) : (
          
     
            <Container>
      <Header user = {user} cartItems = {cartItems}/>

      
        <Switch>

        

          <Route path ="/cart">
           <Cart cartItems = {cartItems}/>
          </Route>
          
          <Route path = "/">
            
            <Home/>
            
            </Route>
         
          
        </Switch>
</Container>
)
}

      </Router>
      
  
    
  );
}


const Container = styled.div `

`
export default App;
