import { Component, ViewChild, Input, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {AppGlobalsService} from "../globals";

@Component(
    {
        moduleId: module.id,
        selector: 'nav-menu',
        templateUrl: 'navmenu.component.html',
        styleUrls: ['navmenu.component.css']
    })

export class NavmenuComponent {

    public userPhoto:string;

    @ViewChild('smallMenu', {static: false}) smallMenu: ElementRef;

 
    constructor(public globalService:AppGlobalsService)
    {
      
    }

    signInWithFacebook()
    {
        if(this.globalService._userInfo)
             this.globalService.signOut();
        else{
            var person = prompt("Parolayı giriniz");

            if (person != null && person=="selcuk2020" ) {
                this.globalService._userInfo= 
                {
                    displayName: "İ.Hakkı Yiğit",
                    email: "test",
                    phoneNumber: "test",
                    photoURL:"test",
                    providerId:"test",
                    uid: "test"
                }
        
            }
        }
    }

    openSmallMenu()
    {

        var isBlock=this.smallMenu.nativeElement.style.display=="block";

        if(!isBlock)
            this.smallMenu.nativeElement.style.setProperty("display","block","important");
        else
            this.smallMenu.nativeElement.style.setProperty("display","none","important");
       
     
    }

    closeSmallMenu()
    {
        this.smallMenu.nativeElement.style.setProperty("display","none","important");
    }
   
}

