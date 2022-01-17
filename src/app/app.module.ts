import { NoticiaCategoriasComponent } from './noticia-pesquisa/noticia-categorias/noticia-categorias.component';
import { NoticiaCardsComponent } from './noticia-pesquisa/noticia-cards/noticia-cards.component';
import { NoticiaTituloComponent } from './noticia-pesquisa/noticia-titulo/noticia-titulo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NoticiaPesquisaModule } from './noticia-pesquisa';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    NoticiaTituloComponent,
    NoticiaCardsComponent,
    NoticiaCategoriasComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NoticiaPesquisaModule
  ],
  providers: [],
})
export class AppModule { }
