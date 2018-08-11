import {Routes, RouterModule} from '@angular/router';
import { FotosComponent } from './componentes/fotos/fotos.component';
import { CargaComponent } from './componentes/carga/carga.component';


const RUTAS: Routes = [
    { path: 'fotos', component: FotosComponent},
    { path: 'carga', component: CargaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'fotos'}

];

export const APP_ROUTES = RouterModule.forRoot(RUTAS);