import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../Models/user';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  show:Boolean=false
  constructor(private http: HttpClient,private router: Router) { }
  LoginUrlApi="http://localhost:3000/users/ajout"
  public register(user:User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
  });
    this.http.post(this.LoginUrlApi,user)
      .subscribe(
        data => {
          this.router.navigate(['../login'])
          this.show=true
        },
        error => {
          console.log('Error', error);
        }
      );
      return this.show
  }
}