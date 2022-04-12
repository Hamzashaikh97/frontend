import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginUser : boolean  = true;

  newUser: any ={name:"Hassan",role: "Check"};

  constructor(private route: Router, private formBuilder: FormBuilder, private userService: UserService) { 
    this.loginUser = true;

  }

  ngOnInit(): void {

  }
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }
  Next() {
    this.goPost();
    this.route.navigate(['/user']);
    this.loginUser = false;
  }
  goPost()
  {
    this.userService.postUser(this.newUser).subscribe(data => this.newUser.push(data));;
  }
}
