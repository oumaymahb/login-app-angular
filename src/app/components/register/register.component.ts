import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup,FormControl} from '@angular/forms';
import {RegisterService} from "../../services/register.service"
import { User } from 'src/app/models/user';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User()
  form:FormGroup
  show:Boolean=false
  constructor(private uservice:RegisterService,private formBuilder: FormBuilder,private router: Router) { }
  ngOnInit() {
    this.form = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      adresse: new FormControl(),
      telephone: new FormControl(),
      utilisateur: new FormControl(),
      motdepasse: new FormControl()
   });
    this.form = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, Validators.required],
      utilisateur: [null, Validators.required],
      motdepasse: [null, Validators.required],
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  register(user:User){
    this.show=!this.uservice.register(user);
    
    
  }
}
