import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bem-vindo, ${email}!`);
    // Aqui você pode integrar com a API de autenticação
  };

  return (
    <section className="login" aria-labelledby="titulo-login" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2 id="titulo-login" tabIndex="0">Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-required="true"
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          required
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          aria-required="true"
        />

        <button type="submit" style={{ marginTop: '10px' }}>Entrar</button>
      </form>

      <p style={{ marginTop: '15px' }}>
        <Link to="/cadastro">Não tem conta? Cadastre-se</Link>
      </p>
    </section>
  );
};

export default Login;
