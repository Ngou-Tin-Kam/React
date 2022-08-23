import {useState} from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greetings from './Greetings';

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let button = (isLoggedIn) ? <LogoutButton onClick={() => setIsLoggedIn(false)}/> : <LoginButton onClick={() => setIsLoggedIn(true)}/>
    return(
        <>
        <Greetings isLoggedIn={isLoggedIn}/>
        {button}
    </>
    )
}

export default LoginControl;