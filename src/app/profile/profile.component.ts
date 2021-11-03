import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile/profile.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import * as UsersJson from '../users.json';

interface USER{
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?:any;
  zipcode?:string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  User: USER[]= UsersJson;
  user: string | null;
  pas: string | null;

  e: string | null;
  p: string | null;
  z: any;
  testing: boolean;



  constructor(private profServ: ProfileService, private router: Router) {

    this.user = "";
    this.pas = "";

    this.e = "";
    this.p = "";
    this.z = "";

    this.testing = false;

  }


  updateForm = new FormGroup({
    account2: new FormControl('', [Validators.pattern("^[A-Za-z0-9]+$")]),
    email2: new FormControl('', [Validators.email]),
    phone2: new FormControl('', [Validators.pattern("[0-9]{10}")]),
    zip2: new FormControl('', [Validators.pattern("[0-9]{5}")]),
    pass1: new FormControl('')
  })


  ngOnInit(): void {

    console.log(this.profServ.account)
    if (this.profServ.account != "" && this.testing == true){
      this.user = this.profServ.account
    }

    if (sessionStorage.getItem("user") == null){
      this.user = this.profServ.username;
      sessionStorage.setItem("user", this.user)
    }
    else{
      this.user = sessionStorage.getItem("user")
      if (this.testing == true){
        this.user = this.profServ.username;
      }
    }

    if (sessionStorage.getItem("password") == null){

      this.pas = this.profServ.password;
      sessionStorage.setItem("password", this.pas)
    }
    else{
      this.pas = sessionStorage.getItem("password")
    }

    if (sessionStorage.getItem("email") == null){

      this.e = this.profServ.email;
      sessionStorage.setItem("email", this.e)
    }
    else{
      this.e= sessionStorage.getItem("email")
    }

    if (sessionStorage.getItem("phone") == null){

      this.p = this.profServ.phone;
      sessionStorage.setItem("phone", this.p)
    }
    else{
      this.p= sessionStorage.getItem("phone")
    }

  let temp = "";
    for(let i=0; i< this.profServ.password.length;i++){
      temp = temp + "*";
    }
    this.pas = temp;


    if(this.user == this.User[0].username){
      if (this.User[0].email != undefined){
        this.e = this.User[0].email;
      }
      if (this.User[0].phone != undefined){
        this.p = this.User[0].phone;
      }

    }

    if(this.user == this.User[1].username){
      if (this.User[1].email != undefined){
        this.e = this.User[1].email;
      }
      if (this.User[1].phone != undefined){
        this.p = this.User[1].phone;
      }
    }

    if(this.user == this.User[2].username){
      if (this.User[2].email != undefined){
        this.e = this.User[2].email;
      }
      if (this.User[2].phone != undefined){
        this.p = this.User[2].phone;
      }
    }

    if(this.user == this.User[3].username){
      if (this.User[3].email != undefined){
        this.e = this.User[3].email;
      }
      if (this.User[3].phone != undefined){
        this.p = this.User[3].phone;
      }
    }

    if(this.user == this.User[4].username){
      if (this.User[4].email != undefined){
        this.e = this.User[4].email;
      }
      if (this.User[4].phone != undefined){
        this.p = this.User[4].phone;
      }
    }

    if(this.user == this.User[5].username){
      if (this.User[5].email != undefined){
        this.e = this.User[5].email;
      }
      if (this.User[5].phone != undefined){
        this.p = this.User[5].phone;
      }
    }

    if(this.user == this.User[6].username){
      if (this.User[6].email != undefined){
        this.e = this.User[6].email;
      }
      if (this.User[6].phone != undefined){
        this.p = this.User[6].phone;
      }
    }

    if(this.user == this.User[7].username){
      if (this.User[7].email != undefined){
        this.e = this.User[7].email;
      }
      if (this.User[7].phone != undefined){
        this.p = this.User[7].phone;
      }
    }

    if(this.user == this.User[8].username){
      if (this.User[8].email != undefined){
        this.e = this.User[8].email;
      }
      if (this.User[8].phone != undefined){
        this.p = this.User[8].phone;
      }
    }

    if(this.user == this.User[9].username){
      if (this.User[9].email != undefined){
        this.e = this.User[9].email;
      }
      if (this.User[9].phone != undefined){
        this.p = this.User[9].phone;
      }
    }
    if(this.user == ""){
      this.user = this.profServ.account;
      this.e = this.profServ.email;
      this.z = this.profServ.zip;
      this.p = this.profServ.phone;
      let temp2 = "";
      for(let i=0; i< this.profServ.pwd1.length;i++){
        temp2 = temp2 + "*";
      }
      this.pas = temp2;
    }

  }

  get account2() {
    return this.updateForm.get('account2') as FormControl;
  }

  get email2() {
    return this.updateForm.get('email2') as FormControl;
  }

  get phone2() {
    return this.updateForm.get('phone2') as FormControl;
  }


  get zip2() {
    return this.updateForm.get('zip2') as FormControl;
  }

  get pass1() {
    return this.updateForm.get('pass1') as FormControl;
  }


  onSubmit(){
    if (this.updateForm.value.account2 != ""){
      this.user = this.updateForm.value.account2;
    }
    if (this.updateForm.value.email2 != ""){
      this.e = this.updateForm.value.email2;
    }
    if (this.updateForm.value.phone2 != ""){
      this.p = this.updateForm.value.phone2;
    }
    if (this.updateForm.value.zip2 != ""){
      this.z = this.updateForm.value.zip2;
    }
    if (this.updateForm.value.pass1 != ""){
      let temp3 = "";
      for(let i=0; i< this.updateForm.value.pass1.length;i++){
        temp3 = temp3 + "*";
      }
      this.pas = temp3;
    }
  }













}

