import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:3005/api";

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}/users/`);
  }
}
