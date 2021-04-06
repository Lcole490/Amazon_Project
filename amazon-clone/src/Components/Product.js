import React from 'react'
import styled from 'styled-components'


function Product() {
    return (
        <Container>
            <Title>

            </Title>
            <Price>

            </Price>
            <Rating>

            </Rating>
            <Image/>
            <AddToCartButton>
                Add to Cart
            </AddToCartButton>
        </Container>
    )
}

export default Product



const Container = styled.div `

    background-color: white;
    z-index: 100;
    height: 300px;
    flex: 1;
    padding: 20px;
    margin: 10px;

`

const Title =styled.p `

`

const Price = styled.p `

`

const Rating = styled.div `

`

const Image = styled.img `

`


const AddToCartButton = styled.button