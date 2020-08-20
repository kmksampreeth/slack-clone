import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core'
import { auth ,provider} from './firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'

function Login() {

    const [ state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then( result => {
            console.log(result);
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            });
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__container">
            <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ztJwMFSmh0tBK46dphAjMAHaHa%26pid%3DApi&f=1"
                    alt=""
                />
                <h1>Sign in to ProoChat</h1>
                <p>proochat.com</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
