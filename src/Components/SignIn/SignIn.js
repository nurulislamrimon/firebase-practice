import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase.init';

const SignIn = () => {
    const [user, setUser] = useState({})

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const authGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result);
            });
    }

    const github = () => {

    }

    const logOut = () => {
        setUser({})
    }
    return (
        <div className='center '>
            {
                user?.user ?
                    <button onClick={logOut}>Log out</button> :
                    <div className='auth-buttons'>
                        <button onClick={authGoogle}>Google Authentication</button>
                        <button onClick={github}>Github Authentication</button>
                    </div>
            }
            {
                user.user &&
                <div className='user-info'>
                    <h4>Hello, {user?.user?.displayName}!</h4>
                    <img src={user?.user?.photoURL} alt="" width={50} height={50} />
                </div>
            }
        </div>

    )
}
export default SignIn;