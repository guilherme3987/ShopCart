import React, { useState } from 'react';
import '../styles/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Autenticação 
    // Regex
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
      
      <input type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} required/>
  
      <button type="submit">Entrar</button>
  
    </form>
  );
}
