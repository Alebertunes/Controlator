import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabletListarComponent } from './pages/tablet-listar/tablet-listar.component';
import { TabletCadastrarComponent } from './pages/tablet-cadastrar/tablet-cadastrar.component';
import { TabletAtualizarComponent } from './pages/tablet-atualizar/tablet-atualizar.component';
import { TabletDeletarComponent } from './pages/tablet-deletar/tablet-deletar.component';

const routes: Routes = [
  {
    path : "",
    component : TabletListarComponent
  },
  {
    path : "pages/tablet-listar",
    component : TabletListarComponent

  },
  {
    path : "pages/tablet-cadastrar",
    component : TabletCadastrarComponent
  },
  {
    path : "pages/tablet-atualizar",
    component : TabletAtualizarComponent
  },
  {
    path: "pages/tablet-atualizar/:id",
    component: TabletAtualizarComponent
  },
  {
    path : "pages/tablet-deletar/:id",
    component : TabletDeletarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
