import React , {useState, useEffect }from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from '../firebase'

function Home() {

    const [products, setProducts] = useState([])           // sets up state for products incorporated on app


    const getProducts = () => {                                 // function that gets the products from the db

        db.collection('products').onSnapshot((snapshot) =>{                 // this a call to the db's "products" collection to gather the current snapshot of live data

            let tempProducts = [];                                  // Placeholder array to hold object info that will be retrieved from database

            console.log(snapshot);
            
            tempProducts = snapshot.docs.map((doc) => (             // map through all objects in database and store id along with product data
            
            {
                id: doc.id,
                product: doc.data()

            }
            
            ));


           

            setProducts(tempProducts);                  // Set the current state of products to information retrieved from db
        


        })
    }



    useEffect(()=>{

        getProducts()
}, [])


    console.log(products);

    return (
        <Container>
            <Banner>                          {/* Banner component represents area where Amazon image banner is */}

            </Banner>

            <Content>                        {/* Content component represents main area where product cards will be displayed*/}


                {

                    products.map((data)=>(                      // map through data (products) and collect information
                        <Product                                // information from products to be passed to Product component

                        title = {data.product.name}
                        price = {data.product.price}
                        rating = {data.product.rating}
                        image = {data.product.image}
                        id = {data.id}

                        />
                    ))
                }
               
                   
            </Content>
        </Container>
    )
}

export default Home





//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************





const Container = styled.div `


max-width: 1500px;
margin: auto;
`


const Banner = styled.div `
background-image: url('https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2018/March/MLPBrowse/desktop/TILE_1.jpg');
min-height: 600px;
background-position: center;
background-size: cover;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
z-index: 1;

`


const Content = styled.div `


padding-left: 10px;
padding-right: 10px;
margin-top: -300px;
display: flex;
z-index: 100;
`