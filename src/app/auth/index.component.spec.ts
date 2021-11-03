import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import {AppComponent} from "../app.component";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('AuthComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ IndexComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  function updateForm(userEmail: string, userPassword: string) {
    component.logForm.controls['username'].setValue(userEmail);
    component.logForm.controls['password'].setValue(userPassword);

  }


  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in a previously registered user with correct username and password', () => {
    updateForm("Bret", "Kulas Light");
    component.onSubmit();
    expect(fixture.debugElement.query(By.css('#username-error-msg')).nativeElement.innerHTML).toBe('');

  });

  it('should not log in a user with invalid username', () => {
    updateForm("David", "Kulas Light");
    component.onSubmit();
    expect(fixture.debugElement.query(By.css('#username-error-msg')).nativeElement.innerHTML).toBe('Username does not exist. Please register for an account.');

  });

  it('should not log in a user with an invalid password', () => {
    updateForm("Antonette", "Victor");
    component.onSubmit();
    expect(fixture.debugElement.query(By.css('#password-error-msg')).nativeElement.innerHTML).toBe('Password is not correct.');

  });

  it('should register a user with valid registration data', () => {
    updateForm("Antonette", "Victor");
    component.onSubmit();
    expect(fixture.debugElement.query(By.css('#password-error-msg')).nativeElement.innerHTML).toBe('Password is not correct.');

  });

});
