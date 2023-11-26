import { Tablet } from './../../model/tablet';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablet-cadastrar',
  templateUrl: './tablet-cadastrar.component.html',
  styleUrls: ['./tablet-cadastrar.component.css']
})
export class TabletCadastrarComponent {

  constructor(private client: HttpClient, private router : Router){}

  modelo!: string;
  imei!: string;
  plaqueta!: string;

  cadastrar() : void {
    let tablet : Tablet = {
      modelo: this.modelo,
      imei: this.imei,
      plaqueta: this.plaqueta
    };
    console.log(tablet);
    this.client.post<Tablet>("https://localhost:7171/Cadastrar", tablet).subscribe({
      next : (data) =>{
        console.log(data);
        alert("Cadastrado com sucesso")
      },

      error: (erro) => {
        console.log(erro);
      }
    })
  }
}

