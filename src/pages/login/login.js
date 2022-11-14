import React from 'react';
import './login.css';


const Login = () => {
    return (
        <div className='Login'>

            <div className='login-modal'>
                <h1>Login</h1>

                <div className='loginInputEmail'>
                    <label>Email <input type='email' placeholder='Digite seu email' /></label>
                </div>

                <div className='loginInputPassword'>
                    <label>Senha <input type='password' placeholder='Digite sua senha' /></label>
                </div>

             <button className='btn-login'>Login</button>
             <button className='login-register'>Cadastre-se</button>

            </div>
        </div>
    )
}

export default Login;

