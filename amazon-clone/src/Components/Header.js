import React from 'react'

import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {Link} from 'react-router-dom'


function Header({cartItems, user, signOut}) {                   // Component for navbar with props passed in for use within this component

    const getCount =() => {                                 // Function used to keep count of quantity of all items in cart
        let count = 0;
        // Loop through all cart items

        cartItems.forEach((item)=>{                         // for Each item , get the quantity and add it to the running count

            // Add quantity of cart item to total
            count += item.product.quantity;
        })
        
        return count;                                   // return the value of the count or total from the function to be used or displayed below
    }
    return (
        <Container>
            <HeaderLogo>                                
                <Link to = "/">
                <img src = {"https://i.imgur.com/7I9Was5.png"} />    {/*Amazon logo on navbar and links to home page when clicked*/}
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon/>
                <HeaderOption >
                <OptionLineOne> Hello, </OptionLineOne> 
                <OptionLineTwo> Select your address</OptionLineTwo>    {/* Location welcome option on navbar (Future scope: use geolocation to populate dynamically)*/}
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>                               {/*Search bar (not functional currently*/}
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
 
            <HeaderNavItems>
                <HeaderOption onClick={signOut}>                     {/*When clicked, the signOut function is executed  */}
                <OptionLineOne> Hello, {user.name}</OptionLineOne>

                <OptionLineTwo> Account & Lists </OptionLineTwo>
                
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne> Returns</OptionLineOne>
                    <OptionLineTwo> & Orders</OptionLineTwo>
                </HeaderOption>


              
                <HeaderOptionCart> 
                     <Link to= "/cart">
                    <ShoppingBasketIcon/>                {/*Icon for shopping cart from material ui icons import*/}
                    <CartCount> {getCount()} </CartCount>     {/*Houses the cart items count*/}
                </Link>
                </HeaderOptionCart>
                
            </HeaderNavItems>
        </Container>
    )
}

export default Header




//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************









const Container = styled.div `

height: 60px;
background-color: #0F1111;

display: flex;
align-items: center;   // align items vertically
color: white;

justify-content: space-between;    // align items horizontally
`

const HeaderLogo = styled.div`


img{
    width: 100px;
    margin-left: 11px;

}

`


const HeaderOptionAddress = styled.div `

padding-left: 9px;
display: flex;
align-items: center;

`


const OptionLineOne = styled.div `

`


const OptionLineTwo = styled.div `

font-weight: 700;
`



const HeaderSearch = styled.div `
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
      box-shadow: 0 0 0 3px #F90;
  }
`


const HeaderSearchInput = styled.input `

flex-grow: 1;
border: 0;
:focus {                                // focus=  when input is clicked....
    outline: none;                      // does not show "blue" outline
}
`


const HeaderSearchIconContainer = styled.div`

background-color: #febd69;
width: 45px;
color: black;
display: flex;
align-items: center;          // Center search icon vertically
justify-content: center;        // Center search icon horizontally
`


const HeaderNavItems = styled.div `


display: flex;

`


const HeaderOption = styled.div `

padding: 10px 9px 10px 9px;
cursor: pointer;

`


const HeaderOptionCart = styled.div `
    display: flex;
  

    a{
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
    
`


const CartCount = styled.div `

    padding-left: 4px;
    font-weight: 700;
    color: #f08804

`