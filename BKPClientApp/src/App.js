import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import CadastroPaciente from './components/CadastroPaciente'; // Remova as chaves {} da importação
import ListaPacientes from './components/ListaPacientes'; // Remova as chaves {} da importação

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                    <Route path="/cadastro-paciente" component={CadastroPaciente} />
                </Routes>
            </Layout>
        );
    }
}
