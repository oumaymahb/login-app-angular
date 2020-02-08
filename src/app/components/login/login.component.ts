import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service"
import { User } from 'src/app/models/user';

import {ActivatedRoute, Params} from '@angular/router';

import { FormBuilder, Validators,FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User()
  form:FormGroup
  show:Boolean=false
  constructor(private uservice:LoginService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new FormGroup({
      utilisateur: new FormControl(),
      motdepasse: new FormControl()
   });
    this.form = this.formBuilder.group({
      utilisateur: [null, [Validators.required]],
      motdepasse: [null, Validators.required],
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  login(user:User){
    this.show=!this.uservice.login(user)    
  }

}
