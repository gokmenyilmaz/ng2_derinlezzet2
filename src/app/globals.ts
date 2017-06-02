import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from "./_models/User";
import {UserInfo}  from 'firebase';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';



@Injectable() 
export class AppGlobalsService {

  public _userInfo:UserInfo;
  public user:BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(this._userInfo);

  constructor(private afAuth: AngularFireAuth) {  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(userdata=>{
          
          this._userInfo=userdata.user;
          this.user.next(this._userInfo);
      })
      .catch(hata=>{
          console.log(hata);
          alert("mail adresi veya parolanız yanlış...");
      })
  }

  
  signOut()
  {
      this.afAuth.auth.signOut();
        
       this._userInfo=null;
        location.reload();
       //testxxx
      
  }
}