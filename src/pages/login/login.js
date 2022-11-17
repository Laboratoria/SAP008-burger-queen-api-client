import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
// import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (

        <form id='Login'>
            <div className='login-modal'>
                <h1>Login</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Senha' />
                <button className='btn-login'>Login</button>
                <Link to='/register'><button className='login-register' type='submit'>Criar uma conta</button>
                </Link>
            </div>
        </form>
    )
}

export default Login;

