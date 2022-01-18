import { NoticiasService } from './../shared/noticias.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia-cards',
  templateUrl: './noticia-cards.component.html',
  styleUrls: ['./noticia-cards.component.css']
})
export class NoticiaCardsComponent implements OnInit {

  noticias = []
  constructor (private noticiasService: NoticiasService){
    
  }
  
  ngOnInit(): void {
    this.noticiasService.getNoticias()
    .subscribe((data) => {
      this.noticias = data;
    })
  }
}
  