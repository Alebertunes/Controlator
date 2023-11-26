import { Tablet } from './../../model/tablet';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablet-deletar',
  templateUrl: './tablet-deletar.component.html',
  styleUrls: ['./tablet-deletar.component.css']
})
export class TabletDeletarComponent {

  constructor(private client: HttpClient, private route: ActivatedRoute, private router: Router){}

  tabletid =+this.route.snapshot.params['id'];
  tablet: any;

  ngOnInit(): void{
    this.client.get("https://localhost:7171/listar" + this.tabletid ).subscribe({
      next : (tablet) =>
      {
        console.log(tablet);
        this.tablet = tablet;
      },
      error : (erro) =>
      {
        console.log(erro)
      }
      }
    )
  }

  deletar(){
    this.client.delete<string>("https://localhost:7171/deletar/" + this.tabletid)
    .subscribe({
      next : (e) =>{
        console.log(e);
      },
      error : (erro) =>{
        console.log(erro);
      }
    })
  }
}
