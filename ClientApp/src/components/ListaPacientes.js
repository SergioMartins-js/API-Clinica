import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaPacientes() {
    const [pacientes, setPacientes] = useState([]);

    useEffect(() => {
        // Buscar os pacientes cadastrados
        axios.get('/api/Pacientes')
            .then(response => {
                setPacientes(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar pacientes:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Pacientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Endereco</th>
                    </tr>
                </thead>
                <tbody>
                    {pacientes.map(paciente => (
                        <tr key={paciente.id}>
                            <td>{paciente.nome}</td>
                            <td>{paciente.idade}</td>
                            <td>{paciente.endereco}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaPacientes;
