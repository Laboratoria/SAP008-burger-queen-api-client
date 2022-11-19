import React, { useState } from 'react';
import './register.css';
import { CreateUser } from '../../API/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('service');
    const navigate = useNavigate();
    // const errorMessage = document.querySelector('#error');

    const userRegister = (e) => {
        e.preventDefault();
        CreateUser(name, email, password, role)
            .then((resp) => {
                if (resp.status === 200) {
                    navigate('/login');
                    return resp.json()
                }
            }).catch((erro) => console.log(erro));
    }

    return (
        <form id='Register'>
            <div className='register-modal'>
                <h1>Cadastro</h1>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Nome e sobrenome'></input>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Nova senha' />
                <p id='error'></p>
                <div className='selectOptions'>
                    <label htmlFor='options'>Eu sou:</label>
                    <select className ='options' onChange={(e) => setRole(e.target.value)}>
                        <option value="service">Atendente</option>
                        <option value="kitchen">Chef</option>
                    </select>
                </div>
                <button className='btn-register' onClick={userRegister}>Cadastrar-se</button>
            </div>
        </form>
    )
}

export default Register;
