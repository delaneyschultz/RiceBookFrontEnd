import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';
import {ProfileService} from "../profile/profile.service";
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  regForm: FormGroup

  alert:boolean;
  num:boolean;
  date1:any;
  latest_date:any;
  birthdate:any;
  young:boolean;

  constructor(private router: Router, private profServ: ProfileService, private datePipe: DatePipe){
    this.regForm = new FormGroup({
      account: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z0-9]+$")]),
      display: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9]{10}")]),
      date: new FormControl(''),
      zip: new FormControl('', [Validators.required, Validators.pattern("[0-9]{5}")]),
      pwd1: new FormControl('',[Validators.required]),
      pwd2: new FormControl('',[Validators.required])
    })
    this.alert=false;
    this.num=false;
    this.young=false;


  }


  get account() {
    return this.regForm.get('account') as FormControl;
  }

  get email() {
    return this.regForm.get('email') as FormControl;
  }

  get phone() {
    return this.regForm.get('phone') as FormControl;
  }

  get date() {
    return this.regForm.get('date') as FormControl;
  }

  get zip() {
    return this.regForm.get('zip') as FormControl;
  }

  get pwd1() {
    return this.regForm.get('pwd1') as FormControl;
  }

  get pwd2() {
    return this.regForm.get('pwd2') as FormControl;
  }


  onSubmit(){
    this.profServ.account = this.regForm.value.account;
    this.profServ.display = this.regForm.value.display;
    this.profServ.email = this.regForm.value.email;
    this.profServ.phone = this.regForm.value.phone;
    this.profServ.date = this.regForm.value.date;
    this.profServ.zip = this.regForm.value.zip;
    this.profServ.newUser = true;
    this.check()
  }

  check(){
    if (this.regForm.value.pwd1 == this.regForm.value.pwd2) {
      this.profServ.pwd1 = this.regForm.value.pwd1;
      this.alert = false;
    }
    else{
      this.alert = true;
    }
    if (this.regForm.value.account[0] == '1' || this.regForm.value.account[0] == '2' ||
      this.regForm.value.account[0] == '3' || this.regForm.value.account[0] == '4' ||
      this.regForm.value.account[0] == '5' || this.regForm.value.account[0] == '6' ||
      this.regForm.value.account[0] == '7' || this.regForm.value.account[0] == '8' ||
      this.regForm.value.account[0] == '9'){
      this.num = true;
    }
    else{
      this.num = false;
    }


    this.date1=new Date();
    this.latest_date =this.datePipe.transform(this.date1, 'yyyy-MM-dd');
    this.birthdate = this.datePipe.transform(this.regForm.value.date, 'yyyy-MM-dd');
    if(parseInt(this.birthdate.substring(0,4),10) > (parseInt(this.latest_date.substring(0,4),10) -18)){
      this.young = true;
    }
    else{
      this.young = false;
    }

    if(this.alert == false && this.num == false && this.young==false){
      this.router.navigate(['main']);
    }
}






}





