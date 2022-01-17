import { NoticiaTituloComponent } from './noticia-titulo/noticia-titulo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaService } from './shared/noticia.service';
import { NoticiaCardsComponent } from './noticia-cards/noticia-cards.component';
import { NoticiaCategoriasComponent } from './noticia-categorias/noticia-categorias.component';



@NgModule({
  declarations: [
    NoticiaTituloComponent,
    NoticiaCardsComponent,
    NoticiaCategoriasComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NoticiaService
  ]
})
export class NoticiaPesquisaModule { }
