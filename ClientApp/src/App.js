import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import CadastroPaciente from './components/CadastroPaciente';
import ListaPacientes from './components/ListaPacientes';

const App = () => {
    return (
        <Layout>
            <Routes>
                {AppRoutes.map((route, index) => {
                    const { element, ...rest } = route;
                    return <Route key={index} {...rest} element={element} />;
                })}
                <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
                <Route path="/lista-pacientes" element={<ListaPacientes />} />
            </Routes>
        </Layout>
    );
};

export default App;
