import { SettingsInputSvideoRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { auth, provider} from '../firebase'


function Login({setUser}) {

    const signIn = ()=>{                            // Function used to sign in to app
        auth.signInWithPopup(provider).then((result)=>{                 // portion is from firebase documentation... provides a popup sign in authorized against the online service
            let user = result.user;                 // 
            let newUser = {                     // initializing newUser object from user information when logged in with provider
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }

            setUser(newUser);
            
        }).catch((error)=>{                     // If an error is caught or occurs, there is a message sent as an alert
            alert(error.message);
        })
    }
    return (
        <Container>
                <Content>
                    <AmazonLogo src = "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
                    <h1> Sign into Amazon</h1>
                    <LoginButton onClick ={signIn}>     {/*onClick event of button triggers signIn function that has been passed into this component*/}
                        Sign in With Google
                    </LoginButton>

                </Content>
        </Container>
            
        
    )
}

export default Login





//    ***************************************************** S T Y L E D _ _ C O M P O N E N T S _ _ S E C T I O N **************************************************************







const Container = styled.div `

width 100%;
height: 100vh;
background-color: #f8f8f8;
display: grid;
place-items: center;

`


const Content = styled.div `

padding: 100px;
background-color: white;
border-radius: 5px;
box-shadow: 0 1px 3px gray;
text-align: center;

`


const AmazonLogo = styled.img `
height: 100px;
margin-bottom: 40px;
`



const LoginButton = styled.button `

margin-top: 50px;
background-color: #f0c14b;
height: 40px;
border: 2px solid #a88734;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;

`