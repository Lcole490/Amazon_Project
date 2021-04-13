import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import NumberFormat from 'react-number-format'


function Product({title, price, rating, image, id}) {                    // Note the props that have been passed into the Product component for use within component below

    const addToCart = () => {                                       // function that adds selected product to the cartItem component

        console.log(id);
        const cartItem = db.collection("cartItems").doc(id);            // cartItem is associated or matched with correct id in db
        cartItem.get()                                              // GET method is used to retrieve specific cartItem by id
        .then((doc)=>{
            console.log(doc.exist);
            if(doc.exists){                                         // if the item to be added has been previously added to the cart or already exists as a document in the "cartItems" collection , only the quantity is updated in the db
                cartItem.update({                                   // UPDATE Method
                    quantity: doc.data().quantity + 1
                })
            } else{
                db.collection("cartItems").doc(id).set({            // Otherwise the a new document is saved to the database's "cartItems" colection with a unique id
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1

                })
            }
        })
    }
    return (
        <Container>
            <Title>
               {title}
            </Title>
            <Price>
            <NumberFormat value ={price} displayType={'text'} thousandSeparator={true} prefix={"$"}/>   {/* Number format component is solely for displaying price in usual monetary format with ","*/}
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


           
            <AddToCartButton
                onClick = {addToCart}>              {/* adds on click event to cart button, triggering add to cart function*/}

                Add to Cart
            </AddToCartButton> 
            
            </ActionSection>
        </Container>
    )
}

export default Product







//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************





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
cursor: pointer;
`


const ActionSection = styled.div `

margin-top: 12px;
display: flex;
align-items: center;
justify-content: center;
`