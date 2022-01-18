import { NoticiaTituloComponent } from './noticia-pesquisa/noticia-titulo/noticia-titulo.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiaCardsComponent } from './noticia-pesquisa/noticia-cards';

@NgModule({
  declarations: [
    AppComponent, 
    NoticiaTituloComponent,
    NoticiaCardsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
