import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioAgregarComponent } from './usuario-agregar/usuario-agregar.component';
import { UsuarioModificarComponent } from './usuario-modificar/usuario-modificar.component';

const routes: Routes = [
  {
    path: 'usuarios', component: UsuariosComponent,
    children: [
      {path: 'usuario', component: UsuarioComponent},
      {path: 'usuario-agregar', component: UsuarioAgregarComponent},
      {path: 'usuario-modificar', component: UsuarioModificarComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
