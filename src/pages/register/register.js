import React, { useState } from 'react';
import './register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');




    return (
        <form id='Register'>
            <div className='register-modal'>
                <h1>Cadastro</h1>
                <label>Nome e sobrenome</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome'></input>
                <label>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <label>Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Senha' />
                <select ></select>
                <button className='btn-register'>Cadastrar-se</button>
            </div>
        </form>
    )
}

export default Register;

