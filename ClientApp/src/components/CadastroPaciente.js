import React, { useState } from 'react';
import axios from 'axios';

function CadastroPaciente() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Criar objeto com os dados do paciente
        const paciente = {
            nome: nome,
            idade: idade,
            endereco: endereco
        };

        // Enviar requisição POST para cadastrar o paciente
        axios.post('/api/Pacientes', paciente)
            .then(response => {
                console.log('Paciente cadastrado:', response.data);
                // Limpar campos do formulário após cadastrar o paciente
                setNome('');
                setIdade('');
                setEndereco('');
            })
            .catch(error => {
                console.error('Erro ao cadastrar paciente:', error);
            });
    };

    return (
        <div>
            <h1>Cadastro de Paciente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div>
                    <label>Idade:</label>
                    <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroPaciente;
