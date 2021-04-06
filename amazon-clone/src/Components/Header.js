import React from 'react'

import styled from 'styled-components'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src = {"https://i.imgur.com/7I9Was5.png"} />
            </HeaderLogo>
            <HeaderOptionAddress>

                <OptionLineOne> Hello, </OptionLineOne> 
                <OptionLineTwo> Select your address</OptionLineTwo>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text'/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption>
                <OptionLineOne> Hello, Lavar</OptionLineOne>

                <OptionLineTwo> Account & Lists </OptionLineTwo>
                
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne> Returns</OptionLineOne>
                    <OptionLineTwo> & Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <ShoppingBasketIcon/>
                    <CartCount> 7 </CartCount> 
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
    )
}

export default Header



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
`


const HeaderSearchInput = styled.input `

flex-grow: 1;
`


const HeaderSearchIconContainer = styled.div`

background-color: #febd69;
width: 45px;
color: black;
display: flex;
align-items: center;
justify-content: center;
`


const HeaderNavItems = styled.div `


display: flex;

`


const HeaderOption = styled.div `

padding: 10px 9px 10px 9px;

`


const HeaderOptionCart = styled.div `

`


const CartCount = styled.div `


`