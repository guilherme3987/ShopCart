import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); 

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
      setErrorMessage('Email ou senha inválidos.');
    }else{
      setErrorMessage(' ');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid) {
      alert('Login válido');
      navigate('/products')
    }//else{alert('Email ou senha inválidos')}
  };


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
      
      <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} required/>
  
      <button type="submit" disabled={!formValid} >Entrar</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </form>
  );
}
