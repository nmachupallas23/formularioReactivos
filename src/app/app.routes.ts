import { Routes } from '@angular/router';
import { Normal } from './normal/normal';
import { Reactivo } from './reactivo/reactivo';

export const routes: Routes = [
      {
        path: '',
        component: Normal,
        title: 'Normal',
    },
    {
        path: 'reactivo',
        component: Reactivo,
        title: 'Reactivo',
    },
];
