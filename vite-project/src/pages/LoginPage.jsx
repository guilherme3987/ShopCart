import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { Form } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false); // Renomeado para seguir o padrão de nomenclatura

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    checkEmailPass(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkEmailPass(email, e.target.value);
  };

  // Verifica a validade do email e da senha
  const checkEmailPass = (email, password) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(email);
    const isPasswordValid = password.length >= 8;

    setFormValid(isEmailValid && isPasswordValid);

    if (!isEmailValid || !isPasswordValid) {
      console.log('Email ou senha inválidos.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //API
    if (formValid) {
      alert('Login válido');
    }else{alert('Email     senha inválidos')}
  };


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
      
      <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} required/>
  
      <button type="submit">Entrar</button>
  
    </form>
  );
}
