import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivaFor',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css']
})
export class DiretivaForComponent implements OnInit {

  alunos: Array<string> = new Array()
  nome!: string
  nomes!: Array<string>

  constructor() { }

  ngOnInit(): void {

  }

  deletar(index: number) {
    this.alunos.splice(index, 1)
  }

  adicionar() {
    if (this.nome) {
      this.alunos.push(this.nome)
      this.nome = ""
    }
  }
}