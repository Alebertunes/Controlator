import { FormBuilder, FormGroup } from '@angular/forms';
import { Tablet } from './../../model/tablet';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tablet-atualizar',
  templateUrl: './tablet-atualizar.component.html',
  styleUrls: ['./tablet-atualizar.component.css']
})
export class TabletAtualizarComponent implements OnInit {
  tabletID!: number;
  tabletForm!: FormGroup;

  constructor(private client: HttpClient, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) {
    this.tabletForm = this.fb.group({
      modelo: [''],
      imei: [''],
      plaqueta: ['']
    });
  }

  ngOnInit(): void {
    // Converti para número o valor obtido da rota para o atributo tabletID
    this.tabletID = +this.route.snapshot.params['id'];

    // Corrigi o caminho da requisição HTTP para obter um tablet específico
    this.client.get<Tablet>("https://localhost:7171/listar/" + this.tabletID).subscribe({
      next: (tablet) => {
        // Atualizei o campo imei para descricao, pois não havia um campo imei na interface Tablet
        this.tabletForm.patchValue({
          modelo: tablet.modelo,
          imei: tablet.imei,
          plaqueta: tablet.plaqueta
        });
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }

  atualizar(): void {
    const dadosEditados = this.tabletForm.value;
    console.log(dadosEditados);

    // Corrigi o caminho da requisição HTTP para a atualização do tablet
    this.client.put<Tablet>("https://localhost:7171/Atializar/" + this.tabletID, dadosEditados).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }
}
