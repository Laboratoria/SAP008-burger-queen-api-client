import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';



const Login = () => {
    return (
        <form id='Login'>

            <section className='login-modal'>
                <h1>Login</h1>

                <label>
                    Email
                    <input type='email' placeholder='Digite seu email' name='email' />
                </label>

                <label>
                    Senha
                    <input type='password' placeholder='Digite sua senha' name='password' />
                </label>

                <button className='btn-login'>Login</button>
                <Link to='/register'><button className='login-register'>Cadastre-se</button></Link>

            </section >
        </form >
    )
}

export default Login;

