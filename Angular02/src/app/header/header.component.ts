import { SegurancaService } from './../seguranca.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rounter: Router, private seguranca: SegurancaService) { }

  ngOnInit(): void {
  }
  sair(): void {
    this.seguranca.entrou = false;
    this.rounter.navigateByUrl("");
  }
}
