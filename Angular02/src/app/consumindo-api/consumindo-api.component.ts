import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {

  pokemon!: string
  email: String = ""
  senha: String = ""
  backService: any;

  constructor(
    private service: PokemonService, private servicoBack:BackendService
  ) { }

  ngOnInit(): void {
  }

  buscar(): void {
    this.service.quemEhEssePokemon(this.pokemon)
      .pipe(
        catchError(
          (error) => {
            let lista = [
              {
                "ability": {
                  "name": "overgrow",
                  "url": "https://pokeapi.co/api/v2/ability/65/"
                },
                "is_hidden": false,
                "slot": 1
              },
              {
                "ability": {
                  "name": "chlorophyll",
                  "url": "https://pokeapi.co/api/v2/ability/34/"
                },
                "is_hidden": true,
                "slot": 3
              }
            ]
            return of(lista)
          }
        )
      ).subscribe((response) => {
        console.log("Deu certo", response);

      })
  }

  types(): void {
    this.service.quaisOsTipos()
      .pipe(
        catchError((error) => {

          return of(['Merendar', 'Teste'])

        })
      ).subscribe((response) => {
        console.log("Funcionou.."), response;

      })
  }
  login(): void {

    this.BackendService

      .login(this.getDados())

      .pipe(

        catchError((error) => {

          return of(error);

        })

      )

      .subscribe((response: any) => {

        console.log(response);

      });

  }



  register(): void {

    this.BackendService

      .register(this.getDados())

      .pipe(

        catchError((error) => {

          return of(error);

        })

      )

      .subscribe((response: any) => {

        console.log(response);

      });

  }



  getDados(): any {

    return {

      email: this.email,

      senha: this.senha,

    };
  }