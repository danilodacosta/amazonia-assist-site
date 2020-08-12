import { Contato } from './../model/contato.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://amazoniassist-api-com-br.umbler.net/api/send-email';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) {}

  send(contato: Contato) {
      return this.http.post(URL, contato, {responseType: 'text'});
  }
}
