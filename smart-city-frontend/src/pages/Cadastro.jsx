import { useState } from 'react';
import '../css/Cadastro.css'; 



const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Aqui você pode enviar os dados para uma API ou salvar localmente
    console.log('Usuário cadastrado:', { nome, email });

    alert('Cadastro realizado com sucesso!');
    setNome('');
    setEmail('');
    setSenha('');
    setConfirmaSenha('');
  };

  return (
    <div className="cadastro">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          required
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          required
          onChange={(e) => setSenha(e.target.value)}
        />

        <label htmlFor="confirmaSenha">Confirmar Senha:</label>
        <input
          type="password"
          id="confirmaSenha"
          value={confirmaSenha}
          required
          onChange={(e) => setConfirmaSenha(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
