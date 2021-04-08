import React from 'react'
import styled from 'styled-components'


function Product({title, price, rating, image, id}) {
    return (
        <Container>
            <Title>
               {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
             {
                 Array(rating)
                 .fill()
                 .map(rating => <p> 👍</p>)
             }
            </Rating>
            <Image src = {image}/>

            <ActionSection>


           
            <AddToCartButton>
                Add to Cart
            </AddToCartButton> 
            
            </ActionSection>
        </Container>
    )
}

export default Product



const Container = styled.div `

    background-color: white;
    z-index: 100;
    max-height: 400px;
    flex: 1;
    padding: 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;

`

const Title =styled.span `

`

const Price = styled.span `


font-weight: 500;
margin-top: 3px;

`

const Rating = styled.div `

display: flex;

`

const Image = styled.img `

max-height: 200px;
object-fit: contain;
`


const AddToCartButton = styled.button `

width: 100px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
height: 30px;

`


const ActionSection = styled.div `

margin-top: 12px;
display: flex;
align-items: center;
justify-content: center;
`