import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  baseUrl = "http://localhost:3005/api";

  constructor(private httpClient: HttpClient) {
  }
    getProduits(): Observable<Produit[]>{
      return this.httpClient.get<Produit[]>(`${this.baseUrl}/produits/`);
  }
}

