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


  postUser( name:string,  role :string)
  {
    return this.http.post(`${this.baseUrl}`,{name,role},httpOptions).subscribe(data =>  {
      console.log(data);
    });

  }
}