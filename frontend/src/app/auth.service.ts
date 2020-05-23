import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  submitRegister(body:any)
  {
    var headers=new Headers();
    headers.append('Content-Type','application/json');
    return this._http.post('http://localhost:3000/register',body,{observe:'body'})
    
  }
}