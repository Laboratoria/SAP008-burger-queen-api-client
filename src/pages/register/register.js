import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <form id='Register'>

            <div className='register-modal'>
                <h1>Cadastro</h1>

                <div className='registerName'>
                    <label>
                        Nome e Sobrenome
                    </label>
                    <input
                        type='text'
                        placeholder='Digite seu nome e sobrenome'
                        name='firstName'
                        />
                </div>

                <div className='registerInputEmail'>
                    <label>
                        Email
                    </label>
                    <input
                        type='email'
                        placeholder='Digite seu email' />
                </div>

                <div className='registerInputPassword'>
                    <label>
                        Senha
                        <input
                            type='password'
                            placeholder='Digite sua senha'
                        />
                    </label>
                </div>

                <button className='btn-register'>
                    Cadastre-se
                </button>

            </div>
        </form>
    )
}

export default Register;

