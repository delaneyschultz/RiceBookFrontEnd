import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../profile/profile.service";
import * as UsersJson from '../users.json';
import {DatePipe} from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


interface USER{
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: any;
  street?: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  logForm: FormGroup
  User: USER[]= UsersJson;

  username2: string;
  password2: string;

  isDisabled: boolean;
  passwords: any[];
  isVisible: boolean;

  constructor(private router: Router, private profServ: ProfileService) {
    this.logForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })

    this.username2 = "";
    this.password2 = "";
    this.isDisabled = false;
    this.passwords = [];
    this.isVisible = false;

  }


  get username(){
    return this.logForm.get('username') as FormControl;
  }
  get password() {
    return this.logForm.get('password') as FormControl;
  }


  onSubmit(): void{
    this.profServ.username = this.logForm.value.username;
    this.profServ.password = this.logForm.value.password;
    console.log("password", this.profServ.password)
    this.username2 = this.logForm.value.username;
    this.password2 = this.logForm.value.password;
    if(this.username2!= '' && !(this.username2 === this.User[0].username || this.username2 === this.User[1].username || this.username2 === this.User[2].username
      || this.username2 === this.User[3].username || this.username2 === this.User[4].username || this.username2 === this.User[5].username || this.username2 === this.User[6].username
      || this.username2 === this.User[7].username || this.username2 === this.User[8].username || this.username2 === this.User[9].username)){
      let error  = document.getElementById('username-error-msg') as HTMLElement;
      error.innerHTML = "Username does not exist. Please register for an account.";
    }
    if (this.password2!= '' && !(this.password2 === this.passwords[0]|| this.password2 === this.passwords[1] || this.password2 === this.passwords[2]
      || this.password2 === this.passwords[3] || this.password2 === this.passwords[4] || this.password2 === this.passwords[5] || this.password2 === this.passwords[6]
      || this.password2 === this.passwords[7] || this.password2 === this.passwords[8] || this.password2 === this.passwords[9])){
      let error  = document.getElementById('password-error-msg') as HTMLElement;
      error.innerHTML = "Password is not correct.";
    }
  }

  ngOnInit(){
    this.isDisabled = false;
    for (let i=0; i < 10; i++){
      this.passwords.push(this.User[i].address.street)
    }
  }

  redirect(){
    this.router.navigate(['main']);
  }




}
