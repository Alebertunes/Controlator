import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabletListarComponent } from './pages/tablet-listar/tablet-listar.component';
import { TabletCadastrarComponent } from './pages/tablet-cadastrar/tablet-cadastrar.component';
import { TabletAtualizarComponent } from './pages/tablet-atualizar/tablet-atualizar.component';
import { TabletDeletarComponent } from './pages/tablet-deletar/tablet-deletar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabletListarComponent,
    TabletCadastrarComponent,
    TabletAtualizarComponent,
    TabletDeletarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
