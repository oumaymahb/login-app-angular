import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../Models/user';
import {Router} from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
   show:Boolean=false
    constructor(private http: HttpClient,private router: Router) { }
    LoginUrlApi="http://localhost:3000/users/login"
    public login(user:User) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    });
      this.http.post(this.LoginUrlApi,user)
        .subscribe(
          data => {
            this.router.navigate(['../list'])
            this.show=true
          },
          error => {
            console.log('Error', error);
          }
        );
        return this.show
    }

  /*   getCurrentUser(): any {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            Authorization: 'Bearer ' + token
        });
        return this.http.get('http://localhost:18080/epione-jee-web/api/users', { headers : headers });
    }

    public logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    }

    public register(user) {
        delete user.confirm;
        const headers = new HttpHeaders({
            'Content-Type' : 'application/json'
        });
        return this.http.post('http://localhost:18080/epione-jee-web/api/users/register', user,
        { headers : headers, responseType: 'text' });
    } */
}
