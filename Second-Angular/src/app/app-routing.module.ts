import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { BuscaComponent } from '../app/busca/busca.component';
import { TarefasComponent } from '../app/tarefas/tarefas.component';


const routes: Routes = [  
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Busca', component:BuscaComponent    },
  { path: 'Tarefas', component: TarefasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
