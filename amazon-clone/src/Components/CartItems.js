import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({cartItems}) {                 
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr/>
            <ItemsContainer>

                {
                    cartItems.map((item) =>(                   // map through cartItems and for each item in the art generate a CartItem component


                         <CartItem                              // Cart Item component with id and product information to be passed down for access


                         id = {item.id}
                         item= {item.product}
                         
                         />
                    ))
                }
             
            </ItemsContainer>
        </Container>
    )
}

export default CartItems






//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************








const Container = styled.div `



background-color: white;
flex: 0.8;
margin-right: 18px;
padding: 20px;
`


const Title = styled.h1 `

margin-bottom: 8px;
`

const ItemsContainer = styled.div `

`

