import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegistrationComponent } from './registration.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {By} from "@angular/platform-browser";
import {ProfileComponent} from "../profile/profile.component";
import {IndexComponent} from "../auth/index.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  let component2: ProfileComponent;
  let fixture2: ComponentFixture<ProfileComponent>;

  let component3: IndexComponent;
  let fixture3: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ RegistrationComponent ],
      providers: [DatePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;

    fixture2 = TestBed.createComponent(ProfileComponent);
    component2 = fixture2.componentInstance;

    fixture3 = TestBed.createComponent(IndexComponent);
    component3 = fixture3.componentInstance;

    fixture.detectChanges();
    fixture2.detectChanges();
    fixture3.detectChanges();
  });

  function updateForm(account: string, display: string, email: string, phone: string,
                      date: string, zip: string, pwd1: string, pwd2: string) {
    component.regForm.controls['account'].setValue(account);
    component.regForm.controls['display'].setValue(display);
    component.regForm.controls['email'].setValue(email);
    component.regForm.controls['phone'].setValue(phone);
    component.regForm.controls['date'].setValue(date);
    component.regForm.controls['zip'].setValue(zip);
    component.regForm.controls['pwd1'].setValue(pwd1);
    component.regForm.controls['pwd2'].setValue(pwd2);


  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should properly register user', () => {
    //Log in
    updateForm("delaney", "Delaney", "dls11@rice.edu", "3147184971", "1997-02-06", "63130", "red", "red");
    component.onSubmit();

    expect(component2.user).toBe("");


  });

});
