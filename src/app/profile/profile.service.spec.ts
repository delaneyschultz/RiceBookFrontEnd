

import {ComponentFixture, TestBed} from '@angular/core/testing';

import { ProfileService } from './profile.service';
import {IndexComponent} from "../auth/index.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ProfileService', () => {
  let service: ProfileService;
  let component2: IndexComponent;
  let fixture2: ComponentFixture<IndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ ProfileComponent, IndexComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(ProfileService);
    fixture2 = TestBed.createComponent(IndexComponent);
    component2 = fixture2.componentInstance;
  });

  function updateForm(userEmail: string, userPassword: string) {
    component2.logForm.controls['username'].setValue(userEmail);
    component2.logForm.controls['password'].setValue(userPassword);

  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



});
