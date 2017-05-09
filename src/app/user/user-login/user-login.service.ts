import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../../user/model/user-model';
import {Subject} from "rxjs/Subject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserLoginService {

  public userLoginUrl = 'src/mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject<User>();

  constructor(public http: Http,
              public observable: Observable<User>) {

  }
  public get currenUser() : Observable<User>{
    return this.subject.asObservable();
  }

  public login(user: User){
    return this.http
            .get(this.userLoginUrl)
            .map((response: Response) => {
                let user = response.json();
                if(user && user.token){
                    localStorage.setItem('currentUser',user);
                    this.subject.next(Object.assign({}, user));
                }
                return response;
            })
            .subscribe(
                data => {
                  console.log("login success>"+data);
                },
                error => {
                  console.error(error);
                }
            );
  }

  ngOnInit(){

  }

}
