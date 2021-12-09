import React, { useState } from 'react';
import Lista from './Lista';
export default function App() {
  const [nome, setNome] = useState(' ');
  const [telefone, setTelefone] = useState(' ');
  const [endereço, setEndereço] = useState(' ');
  const [CPF, setCpf] = useState(' ');
  const [dados, setDados] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault(); // evita o evento reload da página
    // cria uma cópia do array e faz um append com o objeto criado
    setDados([...dados, { nome, telefone, endereço, CPF }]);
  };
  const remove = (e, index) => {
    e.preventDefault(); // evita o evento popupmenu
    const temp = [...dados]; //cria uma cópia do array
    temp.splice(index, 1); //remove o elemento que está na posição indexsetDados(temp); //atualiza a propriedade dados
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div> CHINA'S AUTOCAR</div>
        <div> Cadastro de Clientes da empresa</div>
        <div>
          <label>Nome</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>Telefone</label>
          <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </div>
        <div>
          <label>Endereço</label>
          <input value={endereço} onChange={(e) => setEndereço(e.target.value)} />
        </div>
        <div>
          <label>CPF</label>
          <input value={CPF} onChange={(e) => setCpf(e.target.value)} />
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
      <Lista dados={dados} remove={remove} />
    </>
  );
}
