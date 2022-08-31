import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  nome: string = "Ciro"
  sobrenome!: string
  idade: string = '33'
  email: string = "queeee@email.com"
  possuiAviao: boolean = false
  enderecoImagem: string = "https://user-images.githubusercontent.com/1560278/27637937-cb4b9b24-5c11-11e7-949b-15c1e4cdb53c.gif"
  padrao: string = '50'
  google: string = "https://google.com"
  alvo: string = "_blank"
  tabela: string = "table table-bordered table-striped"

  constructor() { }

  ngOnInit(): void {
  }

}
