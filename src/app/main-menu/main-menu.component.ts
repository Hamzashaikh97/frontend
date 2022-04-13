import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['../app.component.scss']
})
export class MainMenuComponent implements OnInit {
  loginUser : boolean  = true;
  report : boolean = false ;

  constructor(private router: Router) { 
    this.loginUser=true;
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
  Report()
    {
      this.report = true;
    }

}
