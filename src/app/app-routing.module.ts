import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListadoEmpleadosComponent } from './components/listado-empleados/listado-empleados.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'empleados', component: ListadoEmpleadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
