import { Injectable } from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {User} from "./_models/User";
import {UserInfo}  from 'firebase';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@Injectable() 
export class AppGlobalsService {

  public _userInfo:UserInfo;
  public user:BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(this._userInfo);
  public userPhotoURL="";

  constructor(private afAuth: AngularFireAuth) {  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(userdata=>{

       
          
          this._userInfo=userdata.user;
          this.userPhotoURL= userdata.additionalUserInfo.profile.picture.data.url;
          
         
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