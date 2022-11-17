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
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome e sobrenome'></input>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='Nova senha' />
                <select id='options'>
                    <option value="service">Salão</option>
                    <option value="kitchen">Cozinha</option>
                </select>
                <button className='btn-register'>Cadastrar-se</button>
            </div>
        </form>
    )
}

export default Register;

