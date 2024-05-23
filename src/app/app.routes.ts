import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformeComponent } from './informe/informe.component';

export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'informe', component: InformeComponent }

];
