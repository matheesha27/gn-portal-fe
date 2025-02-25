import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

export const routes: Routes = [
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: '',
        redirectTo: '', // Default route
        pathMatch: 'full'
    }
];
