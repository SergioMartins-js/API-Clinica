import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import CadastroPaciente from './components/CadastroPaciente';
import ListaPacientes from './components/ListaPacientes';


const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    // Outras rotas...
    {
        path: '/cadastro-paciente',
        element: <CadastroPaciente />
    },
    {
        path: '/lista-pacientes',
        element: <ListaPacientes />
    }
];

export default AppRoutes;
