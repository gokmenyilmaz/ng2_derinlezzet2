import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule, MyW3CarouselComponent, MyTabComponent,MyHighLightDirective } from './shared/index';

import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './_home/home.component';
import { MainSlideComponent } from './mainslide/main-slide.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';


import { AlakartComponent } from './alakart/alakart.component';
import { AlakartMenuComponent } from './alakart-menu/alakart-menu.component';

import { HaftalikMenuComponent } from './haftalikmenu/haftalik-menu.component';
import { ResimGaleriComponent } from './galeri/resim-galeri.component';
import { IstatistikBarComponent } from './istatistikbar/istatistik-bar.component';
import { FooterBarComponent } from './footer/footer-bar.component';
import { EkipmanComponent } from './ekipmanlar/ekipman.component';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {AppGlobalsService} from "./globals";
import { MutfaklarComponent } from './mutfaklar/mutfaklar.component';

import { LOCALE_ID } from '@angular/core';


export const config = {
  apiKey: "AIzaSyDNmRF1JtItI0MiLhIjnJEN9nqboi4mWzM",
  authDomain: "derinlezzetdb.firebaseapp.com",
  databaseURL: "https://derinlezzetdb.firebaseio.com",
  storageBucket: "derinlezzetdb.appspot.com",
  messagingSenderId: "310765295981"
};



@NgModule({
  imports:
  [
    BrowserModule, SharedModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireAuthModule
  ],
  declarations:
  [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    MainSlideComponent,
    HakkimizdaComponent,
    
    AlakartComponent,
    AlakartMenuComponent,
    HaftalikMenuComponent,
    ResimGaleriComponent,
    IstatistikBarComponent,
    FooterBarComponent,
    EkipmanComponent,

    MyHighLightDirective,

    MutfaklarComponent


  ],
  bootstrap: [AppComponent],
  providers:
  [
    AppGlobalsService,
    { provide: LOCALE_ID, useValue: "tr-TR" }
  ]
})
export class AppModule { }
