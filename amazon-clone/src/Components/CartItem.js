import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
import { db } from '../firebase';

function CartItem({id, item}) {                     // CartItem component initialized with props from cardItems component for use below

    const deleteItem = (e) =>{                              // function that allows for deleting cart item 
        e.preventDefault()                              // prevents refresh
        db.collection('cartItems').doc(id).delete();            // DELETE method that deletes the specific data with ID from "cartItems" collection of db  (e is event and will be tied to a value below)
    }

    let options = [];                       // Initialize array to populate the option choices for the quantity select

    for (let i = 1; i<Math.max(item.quantity+1, 20); i++){                  // loop to populate max of 20 value options for select button below
        options.push(<option value = {i}> Qty: {i}</option>)                // pushes option value into options array
    }

    const changeQuantity = (newQuantity) => {                   // Function to allow user to change quantity selected when on cartItems page
        db.collection('cartItems').doc(id).update({             // UPDATE method that changes the quantity of a specific document with unique id with what user selects from options
            quantity: parseInt(newQuantity)                 // quantity now becomes the value of the newQuantity as selected by user. the tie-in for this is the onChange below
        })
    }
    return (
        <Container>

            <ImageContainer>
                <img src = {item.image}/>                   {/*  Display image of item in cart*/}
            </ImageContainer>

            <CartItemInfo>

                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>

                    <CartItemQuantityContainer> 
                        <select                     // HTML tag to generate select drop menu which houses the options with increasing values
                        
                        value = {item.quantity}         // Initially sets the value shown on the select drop to the quantity
                        
                        onChange = {(e)=>changeQuantity(e.target.value)}>{options}          {/* When user changes the option on the select menu, the value at the target selected becomes the new quantity */}
                       
                        </select>
                      
                        </CartItemQuantityContainer>
                    <CartItemDeleteContainer 
                    onClick = {deleteItem}>                 {/* onClick triggers deleteItem function and deletes the item from cart */}
                        Delete
                        
                        </CartItemDeleteContainer>
                </CartItemInfoBottom>
                
            </CartItemInfo>

            <CartItemPrice >
                        <NumberFormat value ={item.price} displayType={'text'} thousandSeparator={true} prefix={"$"}/>  
            </CartItemPrice>
            
        </Container>
    )
}

export default CartItem




//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************









const Container = styled.div `

padding-top: 12px;
padding-bottom: 12px;
display: flex;
border-bottom: 1px solid #DDD;
`

// Flex-shrink and Flex-grow 0 keeps the image the same at any screen size
const ImageContainer = styled.div `
flex-shrink: 0;    
       
width: 180px;
height: 180px;
margin-right: 16px;


    img{
        object-fit:contain;
        height: 100%;
        width: 100%;
    }
`
const CartItemInfo= styled.div `

flex-grow: 1;

`

const CartItemInfoTop = styled.div `
 color: #007185;
 h2 {
     font-size: 18px;
 }
 
 
`

const CartItemInfoBottom = styled.div `

display: flex;
margin-top: 4px;
align-items: center;
`

const CartItemQuantityContainer = styled.div `

 select{
     border-radius: 7px;
     background-color: #F0F2F2;
     padding: 8px;
     box-shadow: 0 2px 5px rgba(15,17,17, .15);
     cursor: pointer;
 }

 select:focus{
     outline: none;
 }

 
`

const CartItemDeleteContainer = styled.div `


color: #007185;
margin-left: 16px;
cursor: pointer;
`

const CartItemPrice = styled.div `

font-size: 18px;
font-weight: 700;
margin-left: 16px;
`