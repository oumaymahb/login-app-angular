import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../Models/user';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  ListUrlApi="http://localhost:3000/users"
  DeleteUrlApi="http://localhost:3000/users/supprimer/"
  DetailsUrlApi="http://localhost:3000/users/details/"
  constructor(private http: HttpClient) { }

  public listUser(){
    return this.http.get<User[]>(this.ListUrlApi);
  }
  public delete(id){
    console.log(this.DeleteUrlApi+id)
    return this.http.delete(this.DeleteUrlApi+id).subscribe(
      data => {
        console.log('Delete Request is successful ', data)
      },
      error => {
        console.log('Error', error)
      }
    );
  }
  public details(id){
    console.log(id)
    console.log(this.DetailsUrlApi+id)
    return this.http.get<User>(this.DetailsUrlApi+id)
  }
}
