import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { EnviarComponent } from './enviar/enviar.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { EventComponent } from './event/event.component';
import { PropertyComponent } from './property/property.component';
import { InicioComponent } from './inicio/inicio.component';
import { OutroComponent } from './outro/outro.component';
import { PaginaComponent } from './pagina/pagina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "vaiPagina", component: PaginaComponent },
  { path: "outro", component: OutroComponent },
  { path: "Inicio", component: InicioComponent },
  { path: "property", component: PropertyComponent},
  { path: "event", component: EventComponent},
  { path: "maoDupla", component: MaoDuplaComponent},
  { path: "receber/:info1/:dado2/:teste", component: ReceberDadosComponent},
  { path: "enviar", component: EnviarComponent},
  { path: "diretivaIf", component: DiretivaIfComponent},
  { path: "diretivaFor/:lista", component: DiretivaForComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
