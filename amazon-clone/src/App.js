
import './App.css'
import Header from './Components/Header'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { db, auth } from './firebase'
import styled from 'styled-components'


function App() {            // App is the main component. here is page names, order, and link structure are set

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))            // Set up state to track user. 
  const [cartItems, setCartItems] = useState([]);         // Initialize 

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) =>({
        id: doc.id, 
        product: doc.data()
      }));

      setCartItems(tempItems)
    })

  }

  const signOut = () =>{

    auth.signOut().then(()=>{
      setUser(null)
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
      <Header 
      user = {user}
      cartItems = {cartItems}
      signOut = {signOut}/>

      
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




//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************


const Container = styled.div `

`
export default App;
