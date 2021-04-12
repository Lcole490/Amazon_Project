import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
                <Content>
                    <AmazonLogo/>
                    <h1> Sign into Amazon</h1>
                    <LoginButton>
                        Sign in With Google
                    </LoginButton>

                </Content>
        </Container>
            
        
    )
}

export default Login





const Container = styled.div `

width 100%;
height: 100vh;
background-color: #f8f8f8;
display: grid;
place-items: center;

`


const Content = styled.div `

`


const AmazonLogo = styled.img `

`



const LoginButton = styled.button `

`