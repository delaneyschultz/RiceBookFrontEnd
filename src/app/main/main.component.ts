import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfileService} from "../profile/profile.service";
import * as PostsJson from '../posts.json';
import * as UsersJson from '../users.json';
import {Input, Output,EventEmitter } from '@angular/core';

interface POST{
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

interface USER{
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  company? : any;
  catchPhrase?: string;
}



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Post: POST[]= PostsJson;
  User: USER[]= UsersJson;

  user: string | null;
  pas: string | null;

  acc: string;
  dis: string;
  e: string | null;
  p: string | null;
  d: string;
  p1: string;
  p2: string;
  z: string;
  isNew: boolean;
  testing: boolean;

  post1: any;
  post2: any;
  post3: any;
  post4: any;
  post5: any;
  post6: any;
  post7: any;
  post8: any;
  post9: any;
  post10: any;


  user1: any;

  phrases: any[];
  tempID: number;
  tempStatus: string;

  newStatus: string | null;
  po: string;
  newFollower: string;
  newPost: string;
  isShow: boolean;
  isShow2: boolean;
  isShow3: boolean;
  registered:boolean;

  followers: any[];
  people: any[];
  allPosts: any[];
  time: any[];
  timeOptions: any[];
  unfollowed: any[];




  constructor(private profServ: ProfileService, private router: Router) {


    this.user = "";
    this.pas = "";
    this.acc = "";
    this.dis = "";
    this.e = "";
    this.p = "";
    this.z = "";
    this.d = "";
    this.p1 = "";
    this.p2 = "";
    this.isNew = false;
    this.newStatus = "";
    this.newFollower = "";
    this.newPost = "";
    this.isShow = false;
    this.isShow2 = false;
    this.isShow3 = false;
    this.po="";
    this.unfollowed = [];

    this.post1 = "";
    this.post2 = "";
    this.post3 = "";
    this.post4 = "";
    this.post5 = "";
    this.post6 = "";
    this.post7 = "";
    this.post8 = "";
    this.post9 = "";
    this.post10 = "";
    this.testing = false;

    this.registered=true;


    this.user1 = "";
    this.followers = [];
    this.phrases = [];

    this.tempID = 0;
    this.tempStatus = "";
    this.people = [];

    this.allPosts = [];
    this.time = [];
    this.timeOptions = ["2 min ago", "5 min ago", "32 min ago", "47 min ago", "59 min ago", "1 hr ago", "2hr ago", "2 hr ago", "4 hr ago", "6 hr ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 days ago", "3 days ago",
      "4 days ago", "5 days ago", "6 days ago", "6 days ago", "8 days ago", "10 days ago", "15 days ago", "18 days ago", "18 days ago", "23 days ago",
      "26 days ago", "27 days ago", "29 days ago", "1 month ago", "1 month ago", "1 month ago", "1 month ago", "1 month ago", "2 months ago", "2 months ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 day ago", "6 hr ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 day ago", "6 hr ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 day ago", "6 hr ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 day ago", "6 hr ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 day ago", "6 hr ago",
      "8 hr ago", "10 hr ago", "12 hr ago", "16 hr ago", "19 hr ago", "1 day ago", "1 day ago", "1 day ago", "3 day ago", "6 hr ago",];

  }



  ngOnInit(): void {


    if (sessionStorage.getItem("user") == null){

      if (this.profServ.account == ""){
        this.user = this.profServ.username;
      }
      else{
        this.user = this.profServ.account;
      }

      sessionStorage.setItem("user", this.user)
    }
    else{
      this.user = sessionStorage.getItem("user")
    }


    if (sessionStorage.getItem("password") == null){

      if (this.profServ.account == ""){
        this.pas= this.profServ.password;
      }
      else{
        this.pas = this.profServ.pwd1;
      }

      sessionStorage.setItem("password", this.pas)
    }
    else{
      this.pas= sessionStorage.getItem("password")
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

    if(this.testing == true){
      this.user = this.profServ.username;
    }

    this.acc = this.profServ.account;
    this.dis = this.profServ.display;

    this.e = this.profServ.email;
    this.d = this.profServ.date;
    this.z = this.profServ.zip;
    this.p = this.profServ.phone;
    this.p1 = this.profServ.pwd1;
    this.p2 = this.profServ.pwd2;
    this.isNew = this.profServ.newUser;
    this.isShow = false;
    this.checkRegister()



    for (let i=0; i < 10; i++){
      this.phrases[i] = this.User[i].company.catchPhrase;
    }


    this.addPosts()

    if (this.profServ.account == ""){
      for (let i = 0; i < 10; i++) {
        if (this.user === this.User[i].username) {
          if (sessionStorage.getItem("status") == null){
            this.newStatus = this.phrases[i];
            if (this.newStatus !== null){
              sessionStorage.setItem("status", this.newStatus)
            }
          }
          else{
            this.newStatus = sessionStorage.getItem("status")
          }
        }
      }
    }
    else{
      if (sessionStorage.getItem("status2") == null){
        this.newStatus = "Feeling happy";
        sessionStorage.setItem("status2", this.newStatus)
      }
      else{
        this.newStatus = sessionStorage.getItem("status2")
      }
    }



    if (this.profServ.account == ""){
      for (let i=0; i < 10; i++){
        if (this.user == this.User[i].username){
          if (i==8){
            this.followers = [{id: i + 1, name: this.User[i + 1].username, status: this.User[i+1].company.catchPhrase}, {id: i + 2, name: this.User[i + 2].username, status: this.User[i+2].company.catchPhrase}, {id: 0, name: this.User[0].username, status: this.User[0].company.catchPhrase}]

          }
          else if (i==9){
            this.followers = [{id: i + 1, name: this.User[i + 1].username, status: this.User[i+1].company.catchPhrase}, {
              id: 0, name: this.User[0].username, status: this.User[0].company.catchPhrase}, {id: 1, name: this.User[1].username, status: this.User[1].company.catchPhrase}]
          }
          else if (i==10){
            this.followers = [{id: 0, name: this.User[0].username, status: this.User[0].company.catchPhrase}, {
              id: 1, name: this.User[1].username, status: this.User[1].company.catchPhrase}, {id: 2, name: this.User[2].username, status: this.User[2].company.catchPhrase}]
          }
          else {
            this.followers = [{id: i + 1, name: this.User[i + 1].username, status: this.User[i+1].company.catchPhrase}, {
              id: i + 2, name: this.User[i + 2].username, status: this.User[i+2].company.catchPhrase}, {id: i + 3, name: this.User[i + 3].username, status: this.User[i+3].company.catchPhrase}]
          }
        }
      }
    }
    else{
      this.followers = [{id: 0, name: this.User[0].username, status: this.User[0].company.catchPhrase}, {
        id: 1, name: this.User[1].username, status: this.User[1].company.catchPhrase}, {id: 2, name: this.User[2].username, status: this.User[2].company.catchPhrase}]
    }



    if (this.profServ.account == ""){
      for (let i = 0; i < 10; i++) {
        if (this.user == this.User[i].username) {
          this.people.push(i+1);
        }
      }
    }

    for (let follower of this.followers) {
      this.people.push((follower.id) + 1)
    }

    for (let person of this.people) {
      for (let num = 0; num < 100; num++) {
        if (this.Post[num].userId == person) {
          this.allPosts.push({person: this.Post[num].userId, content: this.Post[num].body})
        }
      }
    }

    if (this.profServ.account != ""){
      for(let num2 = -10; num2 < 0; num2 ++){
        this.allPosts.push({person: num2, content: "dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui"})
      }
    }

    this.allPosts = this.shuffle(this.allPosts);









  }



  addPosts(){
    var count=0;
    if (this.post1 == ""){
      for(let i=0; i<10; i++){
        if (this.user === this.User[i].username){
          this.post1 = this.Post[count].body

          count=count+1;
          this.post2 = this.Post[count].body

          count=count+1;
          this.post3 = this.Post[count].body

          count=count+1;
          this.post4 = this.Post[count].body

          count=count+1;
          this.post5 = this.Post[count].body

          count=count+1;
          this.post6 = this.Post[count].body

          count=count+1;
          this.post7 = this.Post[count].body

          count=count+1;

          count=count+1;
          this.post9 = this.Post[count].body

          count=count+1;
          this.post10 = this.Post[count].body

          count=count+1;
        }
        else{
          count=count+10;
        }


      }
    }

  }

  shuffle(array: any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  checkRegister(){
    if(this.acc==""){
      this.registered=false
    }
    else{
      this.registered=true;
    }
  }

  gotoProfile(){
    this.router.navigate(['profile']);
  }

  gotoLanding(){
    this.router.navigate(['']);

    this.user = "";

    this.newStatus = "";
    this.followers = [];
    this.people = [];


    this.allPosts = [];

    sessionStorage.removeItem("user");
    sessionStorage.removeItem("status");
    sessionStorage.removeItem("status2");
    this.profServ.account = "";




  }

  changeStatus(){
    if(this.registered==true && this.testing == false){
      this.newStatus = (<HTMLInputElement>document.getElementById('status2')).value;
      (<HTMLInputElement>document.getElementById('status2')).value = '';
      sessionStorage.setItem("status2", this.newStatus)
    }
    else if (this.registered==false && this.testing == false){
      this.newStatus = (<HTMLInputElement>document.getElementById('status2')).value;
      (<HTMLInputElement>document.getElementById('status2')).value = '';
      sessionStorage.setItem("status", this.newStatus)
    }
  }


  post(){
    if(this.registered==true && this.testing == false) {
      this.po = (<HTMLInputElement>document.getElementById('post')).value;
      (<HTMLInputElement>document.getElementById('post')).value = '';
    }
    else{
      this.po = (<HTMLInputElement>document.getElementById('post2')).value;
      (<HTMLInputElement>document.getElementById('post2')).value = '';
    }
  }

  addFollower(){
    if(this.registered==true && this.testing ==false) {
      this.newFollower = (<HTMLInputElement>document.getElementById('follower')).value;
      (<HTMLInputElement>document.getElementById('follower')).value = '';
    }
    else if (this.registered==false && this.testing == false){
      this.newFollower = (<HTMLInputElement>document.getElementById('follower2')).value;
      (<HTMLInputElement>document.getElementById('follower2')).value = '';
    }


    for (let i = 0; i < 10; i++) {
      if (this.newFollower == this.User[i].username) {
        this.people.push(i);
        for (let num = 0; num < 100; num++) {
          if (this.Post[num].userId == i+1) {
            this.allPosts.push({person: this.Post[num].userId, content: this.Post[num].body})
          }
        }
      }
    }


    this.allPosts = this.shuffle(this.allPosts);

    this.isShow2 = true;

  }

  unFollow(id:string){


    this.unfollowed.push(id);

    for (let i = 0; i < 10; i++) {
      if (id == this.User[i].username) {
        this.removeElement(i+1);
      }
    }

    this.allPosts = [];
    for (let person of this.people) {
      for (let num = 0; num < 100; num++) {
        if (this.Post[num].userId == person) {
          this.allPosts.push({person: this.Post[num].userId, content: this.Post[num].body})
        }
      }
    }

    this.allPosts = this.shuffle(this.allPosts);

    this.isShow3 = true;

  }

  addPost(){
    this.isShow = true
  }

  removeElement(element: number) {
    this.people.forEach((value,index)=>{
      if(value==element) this.people.splice(index,1);
    });
  }

  contains(name: string){
    for (let follower of this.unfollowed){
      if (follower == name){
        return true;
      }
    }
    return false;
  }

  cancel(){
    (<HTMLInputElement>document.getElementById('post2')).value = '';
  }




}
