import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin" : "",
    "Allow": "GET",
    "Content-type": "Application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/employees";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`,httpOptions);
  }


  postUser(user:User): Observable<User>
  {
    return this.http.post<User>(`${this.baseUrl}`,user,httpOptions);

  }
}