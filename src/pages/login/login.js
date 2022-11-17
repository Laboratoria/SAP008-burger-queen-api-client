import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
// import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    return (
        <form id='Login'>

            <div className='login-modal'>
                <h1>Login</h1>

                <div className='loginInputEmail'>
                    <label>
                        Email
                    </label>
                    <input
                        type='email'
                        placeholder='Digite seu email' />
                </div>

                <div className='loginInputPassword'>
                    <label>
                        Senha
                        <input
                            type='password'
                            placeholder='Digite sua senha'
                        />
                    </label>
                </div>

                <button className='btn-login'>
                    Login
                </button>
                <Link to='/register'>
                    <button className='login-register' type='submit'>
                        Cadastre-se
                    </button>
                </Link>

            </div>
        </form>
    )
}

export default Login;

