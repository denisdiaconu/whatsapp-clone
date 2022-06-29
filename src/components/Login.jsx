import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../redux/StateProvider';
import { actionTypes } from '../redux/reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn= () => {
        auth.signInWithPopup(provider).then(res => 
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            })
            )
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