import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username:string = "";
  password:string = "";


  account:string = "";
  display:string = "";
  email:string = "";
  phone:string = "";
  date:string = "";
  zip:string = "";
  pwd1:string = "";
  pwd2:string = "";
  newUser: boolean = false;

  constructor() {

  }
}
