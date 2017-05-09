import { Component, OnInit } from '@angular/core';
import {UserLoginService} from "./user-login.service";
import {fadeIn} from '../../animations/fade-in';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations: [fadeIn]
})
export class UserLoginComponent implements OnInit {

  constructor(public userService: UserLoginService) { }

  ngOnInit() {
  }

  public login(){

  }

  public logout(){

  }
}


