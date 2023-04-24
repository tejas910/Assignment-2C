import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  signupUsers: any[] =[];
  signupobj:any ={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };

  constructor() {

  }
  
  ngOnInit(): void {
    
  }
  onsignup(){
    // this.signupUsers.push(this.signupobj);
    // localStorage.setItem('signupusers',JSON.stringify(this.signupUsers));
    // this.signupobj ={
    //   firstName:'',
    //   lastName:'',
    //   email:'',
    //   password:''
    // };

    localStorage.setItem('firstname',this.signupobj.firstName);
    localStorage.setItem('lastname',this.signupobj.lastName);
    localStorage.setItem('email',this.signupobj.email);
    localStorage.setItem('password',this.signupobj.password);

  }
}
