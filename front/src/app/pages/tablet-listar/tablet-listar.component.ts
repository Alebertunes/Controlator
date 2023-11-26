import { HttpClient } from '@angular/common/http';
import { Tablet } from './../../model/tablet';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablet-listar',
  templateUrl: './tablet-listar.component.html',
  styleUrls: ['./tablet-listar.component.css']
})
export class TabletListarComponent {

  tablet : Tablet[] = [];

  constructor(private client: HttpClient, private router: Router){ }

  ngOnInit() : void{
  console.log("O componente foi carregado!")

  this.client.get<Tablet[]>("https://localhost:7171/listar").subscribe
  ({
    next: (tablet) =>{
      this.tablet = tablet;
      console.table(tablet);
    },
    error: (erro) => {
      console.log(erro);
    }
  })
  }

  editar(tabletId?: number): void {
    this.router.navigate(["pages/tablet-atualizar", tabletId]);
  }

  deletar(tabletId?: number){
    this.router.navigate(["pages/tablet-deletar", tabletId])
  }


}
