import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
};
