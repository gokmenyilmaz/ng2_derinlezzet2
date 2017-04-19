import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from "./_models/User";
import {UserInfo}  from 'firebase';


import { AngularFire, AuthProviders,FirebaseListObservable, AuthMethods,FirebaseObjectObservable } from 'angularfire2';



@Injectable() 
export class AppGlobalsService {

  public _userInfo:UserInfo;
  public user:BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(this._userInfo);

  constructor(private af: AngularFire)
  {
  
  }

  logInGenel()
  {

  }

  logIn(){
      this.af.auth.login({ 
          provider: AuthProviders.Facebook, 
          method: AuthMethods.Popup
        }).then(userdata=>{
          this._userInfo=userdata.auth;
          this.user.next(this._userInfo);
      }).catch(hata=>{
          console.log(hata);
          alert("mail adresi veya parolanız yanlış...");
      })
 
  }

  logOut()
  {
      
       this.af.auth.logout();
       
       this._userInfo=null;
        location.reload();
       
      
  }
}