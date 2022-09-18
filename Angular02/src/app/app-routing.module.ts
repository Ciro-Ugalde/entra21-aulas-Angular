import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';
import { SegurancaService } from './seguranca.service';
import { LoginComponent } from './login/login.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { EnviarComponent } from './enviar/enviar.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { MaoDuplaComponent } from './bindings/mao-dupla/mao-dupla.component';
import { EventComponent } from './bindings/event/event.component';
import { PropertyComponent } from './bindings/property/property.component';
import { InicioComponent } from './inicio/inicio.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';


const routes: Routes = [
  { path: "pagina", component: PaginaComponent, canActivate:[SegurancaService] },
  { path: "outro", component: OutroComponent, canActivate:[SegurancaService] },
  { path: "Inicio", component: InicioComponent, canActivate:[SegurancaService]},
  { path: "", component: LoginComponent},
  { path: "property", component: PropertyComponent, canActivate:[SegurancaService]},
  { path: "event", component: EventComponent, canActivate:[SegurancaService]},
  { path: "maoDupla", component: MaoDuplaComponent, canActivate:[SegurancaService]},
  { path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent, canActivate:[SegurancaService]},
  { path: "enviar", component: EnviarComponent, canActivate:[SegurancaService]},
  { path: "diretivaIf", component: DiretivaIfComponent, canActivate:[SegurancaService]},
  { path: "diretivaFor/:lista", component: DiretivaForComponent, canActivate:[SegurancaService]}, 
  { path: "login", component: LoginComponent, canActivate:[SegurancaService]},
  { path: "consumindo-api", component: ConsumindoApiComponent, canActivate:[SegurancaService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
