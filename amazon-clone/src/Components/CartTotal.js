import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

function CartTotal({getTotalPrice, getCount}) {                     // Initializing CartTotal component with props passed in to be used below



    
    return (
        <Container>
            <Subtotal>Subtotal ( {getCount()} items ):                       {/*Populates subtotal section with the number of items*/}
             
            <NumberFormat value = {getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={"$"}/>         
            
            
            </Subtotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal





//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************






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