import { Routes } from '@angular/router';
import { HistoricoComponent } from './components/pages/historico/historico.component';
import { BaterPontoComponent } from './components/pages/bater-ponto/bater-ponto.component';
import { MonitorarFuncionariosComponent } from './components/pages/monitorar-funcionarios/monitorar-funcionarios.component';
import { AutenticarGestorComponent } from './components/pages/autenticar-gestor/autenticar-gestor.component';
import { AutenticarFuncionarioComponent } from './components/pages/autenticar-funcionario/autenticar-funcionario.component';

export const routes: Routes = [
    {
        path: 'pages/historico',
        component: HistoricoComponent
    },
    {
        path: 'pages/bater-ponto',
        component: BaterPontoComponent
    },
    {
        path: 'pages/monitorar-funcionarios',
        component: MonitorarFuncionariosComponent
    },
    {
        path: 'pages/autenticar-gestor',
        component: AutenticarGestorComponent
    },
    {
        path: 'pages/autenticar-funcionario',
        component: AutenticarFuncionarioComponent
    },
    {
        path: '', pathMatch: 'full', //ROTA raiz do projeto
        redirectTo: '/pages/autenticar-funcionario'
    }
];
