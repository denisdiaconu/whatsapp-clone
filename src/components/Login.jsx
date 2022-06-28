import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'

function Login() {

    const signIn= () => {
        auth.signInWithPopup(provider).then(res => 
            console.log(res)
            ).catch(error => alert(error.message))
    };

  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://centrofiscale.com/wp-content/uploads/2020/01/WhatsApp-logo.png" alt="" />
            <div className='login_esp'>
                <h1>Sign in to WhatsApp Web</h1>
            </div>
            <div>
                <Button onClick={signIn} >
                        Sign in with Google
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Login