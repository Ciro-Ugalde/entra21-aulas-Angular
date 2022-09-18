import { BindingsModule } from './bindings/bindings.module';
import { SegurancaService } from './seguranca.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { OutroComponent } from './outro/outro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PropertyComponent } from './bindings/property/property.component';
import { EventComponent } from './bindings/event/event.component';
import { FormsModule } from '@angular/forms';
import { MaoDuplaComponent } from './bindings/mao-dupla/mao-dupla.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ReceberDadosComponent } from './receber-dados/receber-dados.component';
import { EnviarComponent } from './enviar/enviar.component';
import { DiretivaIfComponent } from './diretivas/diretiva-if/diretiva-if.component';
import { DiretivaForComponent } from './diretivas/diretiva-for/diretiva-for.component';
import { LoginComponent } from './login/login.component';
import { DiretivasModule } from './diretivas/diretivas.module';
import { ConsumindoApiComponent } from './consumindo-api/consumindo-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    OutroComponent,
    InicioComponent,
    HeaderComponent,
    MenuComponent,
    ReceberDadosComponent,
    EnviarComponent,
    LoginComponent,
    ConsumindoApiComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DiretivasModule,
    BindingsModule,
    HttpClientModule,

  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
