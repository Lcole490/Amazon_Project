import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

                                                // This component is the Cart page that houses the following components: CartItems => CartItem => CartTotal

function Cart({ cartItems }) {                  // Initialized Cart component with props cartItems passed in for use below

    const getTotalPrice = () => {                       // Function to calculate total based on price of product and quantity of items in the cart
        let total = 0;
        cartItems.forEach((item) => {                                   // forEach maps through items and each item has the product of it's price and quantity added to a running total
            total += (item.product.price * item.product.quantity)
        })

        return total;                           // The function returns a total, when completed, so that it can be used or displayed later
    }

    const getCount =() => {                         // Function to keep count of the quantity of total items in the cart
        let count = 0;
        

        cartItems.forEach((item)=>{                 // Loop through all cart items

            
            count += item.product.quantity;           // Add quantity of cart item to total
        })

        return count;                               // The count is returned from the function so it can be used or displayed later
    }
    return (
        <Container>
            <CartItems cartItems = {cartItems}/>        {/*Destructuring cartItems for use in cartItems component */}

            
            <CartTotal getCount = {getCount} getTotalPrice = {getTotalPrice}/>          {/*passing props of the item count and total price to the Cart Total component for use*/}

            
        </Container>
    )
}

export default Cart





//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************







const Container = styled.div `

display: flex;
padding: 14px 18px 0px 18px;
align-items: flex-start;
`
