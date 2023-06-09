import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  apiUrl="http://localhost:3000/user";
  
  getAll(){
    return this.http.get(this.apiUrl);
  }

  getByCode(code:string){
    return this.http.get(`${this.apiUrl}?user=${code}`);
  }

  proceedRegister(inputData:any){
    return this.http.post(this.apiUrl, inputData);
  }

  updateUser(code: any, inputData: any){
    return this.http.post(this.apiUrl+"/"+code, inputData);
  }
  isLoggedIn(){
    return sessionStorage.getItem("username")!=null;
  }
}
