import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { TituloComponent } from './titulo/titulo.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscaComponent,
    TituloComponent,
    TarefasComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
