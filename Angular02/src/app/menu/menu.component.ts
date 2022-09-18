import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.links = new Array();
    this.links.push({
      rota: "pagina",
      textContent: "Página",
      cor: "nav-icon fas fa-tachometer-alt text-sucess",
    });
    this.links.push({
      rota: "outro",
      textContent: "Outro",
      cor: "nav-icon fas fa-tachometer-alt text-danger",
    });
    this.links.push({
      rota: "property",
      textContent: "Property",
      cor: "nav-icon fas fa-tachometer-alt text-warning",
    })
    this.links.push({
      rota: "event",
      textContent: "Event",
      cor: "nav-icon fas fa-tachometer-alt text-primary",
    })
    this.links.push({
      rota: "maoDupla",
      textContent: "Mão Dupla",
      cor: "nav-icon fas fa-tachometer-alt text-dark",
    })
    this.links.push({
      rota: "enviar",
      textContent: "Enviar",
      cor: "nav-icon fas fa-tachometer-alt text-secundary",
    })
    this.links.push({
      rota: "diretivaIf",
      textContent: "Diretiva IF",
      cor: "nav-icon fas fa-tachometer-alt text-danger"
    })
    this.links.push({
      rota: ["diretivaFor", ""],
      textContent: "Diretiva For",
      cor: "nav-icon fas fa-tachometer-alt text-warning"
    })
    this.links.push({
      rota: ["receber", "Ciro", "33", "pb"],
      textContent: "Receber Infos",
      cor: "nav-icon fas fa-tachometer-alt text-danger"
    })
    this.links.push({
      rota: ["consumindo-api"],
      textContent: "Consumindo APIs",
      cor: "nav-icon fas fa-tachometer-alt text-dark"
    })
  }
}
