import {ComponentFixture, TestBed, tick} from '@angular/core/testing';

import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {By} from "@angular/platform-browser";
import {IndexComponent} from "../auth/index.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ProfileService} from "../profile/profile.service";


describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let component2: IndexComponent;
  let fixture2: ComponentFixture<IndexComponent>;
  let service: ProfileService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ MainComponent, IndexComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
    service = TestBed.inject(ProfileService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture2 = TestBed.createComponent(IndexComponent);
    component2 = fixture2.componentInstance;

    fixture.detectChanges();
    fixture2.detectChanges();
  });

  function updateForm(userEmail: string, userPassword: string) {
    component2.logForm.controls['username'].setValue(userEmail);
    component2.logForm.controls['password'].setValue(userPassword);

  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log out a user (login state should be cleared)', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component2.onSubmit();
    component.testing = true;
    component.ngOnInit();
    //Check log in state


    //Check user
    expect(component.user).toBe('Bret')
    //Check status
    expect(component.newStatus).toBe('Multi-layered client-server neural-net')
    //Check peoples who posts show up on feed
    expect(component.people).toEqual([1,2,3,4]);
    //Check followers
    expect(component.followers).toEqual([{id: 1, name: "Antonette", status: "Proactive didactic contingency"},
      {id: 2, name: "Samantha", status: "Face to face bifurcated interface"}, {id: 3, name: "Karianne", status: "Multi-tiered zero tolerance productivity"}])

    //Log out
    component.gotoLanding();

    //Check log out state

    //Check user
    expect(component.user).toBe('')
    //Check status
    expect(component.newStatus).toBe('')
    //Check peoples who posts show up on feed
    expect(component.people).toEqual([]);
    //Check followers
    expect(component.followers).toEqual([])

  });

  it('should fetch all articles for current logged in user (post state is set)', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component2.onSubmit();
    component.testing = true;
    component.ngOnInit();

    expect(component.allPosts.length).toBe(40)

  });

  it('should add articles when adding a follower (posts state is larger )', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component2.onSubmit();
    component.testing = true;
    component.ngOnInit();
    component.newFollower = "Antonette";
    component.testing = true;
    component.addFollower();

    expect(component.allPosts.length).toBe(50)

  });

  it('should remove articles when removing a follower (posts state is smaller)', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component2.onSubmit();
    component.testing = true;
    component.ngOnInit();

    component.unFollow("Antonette");

    expect(component.allPosts.length).toBe(30)

  });

  it('should log in a user', () => {
    //Log in
    updateForm("Bret", "Kulas Light");
    component2.onSubmit();
    component.testing = true;
    component.ngOnInit();
    component.changeStatus();
    component.checkRegister();


    expect(component.user).toBe('Bret');
    expect(component.registered).toEqual(false);

  });







});
