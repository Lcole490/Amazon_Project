import React from 'react'
import styled from 'styled-components'

function CartItem() {
    return (
        <Container>

            <ImageContainer>
                <img src = {"https://images-na.ssl-images-amazon.com/images/I/619Z2AnPHmL._AC_SL1000_.jpg"}/>
            </ImageContainer>

            <CartItemInfo>

                <CartItemInfoTop>
                    <h2>HP Spectre x360 2-in-1 Touchscreen Laptop, 4K UHD 15.6</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>

                    <CartItemQuantityContainer> 5</CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
                
            </CartItemInfo>

            <CartItemPrice>
                        $1467
            </CartItemPrice>
            
        </Container>
    )
}

export default CartItem




const Container = styled.div `

padding-top: 12px;
padding-bottom: 12px;
display: flex;
`

// Flex-shrink and Flex-grow 0 keeps the image the same at any screen size
const ImageContainer = styled.div `
flex-shrink: 0;    
flex-grow: 0:        
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
`

const CartItemQuantityContainer = styled.div `

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