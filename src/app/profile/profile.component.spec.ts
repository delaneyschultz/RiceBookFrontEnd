import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileComponent } from './profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {IndexComponent} from "../auth/index.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{MainComponent} from "../main/main.component";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let component2: IndexComponent;
  let fixture2: ComponentFixture<IndexComponent>;
  let component3: MainComponent;
  let fixture3: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ ProfileComponent, IndexComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    fixture2 = TestBed.createComponent(IndexComponent);
    component2 = fixture2.componentInstance;

    fixture3 = TestBed.createComponent(MainComponent);
    component3 = fixture3.componentInstance;
    fixture2.detectChanges();
    fixture.detectChanges();
  });

  function updateForm(userEmail: string, userPassword: string) {
    component2.logForm.controls['username'].setValue(userEmail);
    component2.logForm.controls['password'].setValue(userPassword);

  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the logged in users profile username (Bret)', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Bret');
    expect(component.pas).toBe('***********');
    expect(component.e).toBe('Sincere@april.biz');
    expect(component.p).toBe('1-770-736-8031 x56442');
  });

  it('should update the form', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();
    component.onSubmit();

    expect(component.user).toBe('Bret');
    expect(component.pas).toBe('***********');
    expect(component.e).toBe('Sincere@april.biz');
    expect(component.p).toBe('1-770-736-8031 x56442');
  });

  it('should fetch the logged in users profile username (Antonette)', () => {
    //Log in
    updateForm("Antonette", "Victor Plains");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Antonette');

  });

  it('should fetch the logged in users profile username (Samantha)', () => {
    //Log in
    updateForm("Samantha", "Douglas Extension");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Samantha');

  });

  it('should fetch the logged in users profile username (Karianne)', () => {
    //Log in
    updateForm("Karianne", "Hoeger Mall");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Karianne');

  });

  it('should fetch the logged in users profile username (Kamren)', () => {
    //Log in
    updateForm("Kamren", "Skiles Walks");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Kamren');

  });

  it('should fetch the logged in users profile username (Leopoldo_Corkery)', () => {
    //Log in
    updateForm("Leopoldo_Corkery", "Norberto Crossing");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Leopoldo_Corkery');

  });

  it('should fetch the logged in users profile username (Elwyn.Skiles)', () => {
    //Log in
    updateForm("Elwyn.Skiles", "Rex Trail");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Elwyn.Skiles');

  });

  it('should fetch the logged in users profile username (Maxime_Nienow)', () => {
    //Log in
    updateForm("Maxime_Nienow", "Ellsworth Summit");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Maxime_Nienow');

  });

  it('should fetch the logged in users profile username (Delphine)', () => {
    //Log in
    updateForm("Delphine", "Dayna Park");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Delphine');

  });

  it('should fetch the logged in users profile username (Moriah.Stanton)', () => {
    //Log in
    updateForm("Moriah.Stanton", "Kattie Turnpike");
    component.testing = true;
    component2.onSubmit();
    component.ngOnInit();

    expect(component.user).toBe('Moriah.Stanton');

  });

});
