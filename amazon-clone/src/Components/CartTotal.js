import React from 'react'
import styled from 'styled-components'

function CartTotal({getTotalPrice, getCount}) {



    
    return (
        <Container>
            <h2>Subtotal ( {getCount()} items ): ${getTotalPrice()}</h2>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal




const Container = styled.div `


background-color: white;
flex: 0.3;
padding: 20px;


`

const Subtotal = styled.h2 `

margin-bottom: 16px;

`

const CheckoutButton = styled.button `

background-color: #f0c14b;
width: 100%;
padding: 4px 8px;
border: 2px solid;
margin-top: 8px;
border-radius: 4px;
cursor: pointer;
font-size: 16px;

:hover {
    background: #ddb347;
}


`