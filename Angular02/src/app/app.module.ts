import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaIfComponent } from './diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretiva-for/diretiva-for.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    PropertyComponent,
    EventComponent,
    MaoDuplaComponent,
    HeaderComponent,
    MenuComponent,
    ReceberDadosComponent,
    EnviarComponent,
    DiretivaIfComponent,
    DiretivaForComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
