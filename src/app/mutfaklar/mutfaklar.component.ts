import { Component, OnInit } from '@angular/core';
import {MutfaklarService} from './mutfaklar.service'
import {Mutfak} from '../_models/mutfak'
import {YemekMenuItem} from '../_models/YemekMenuItem'
import {AppGlobalsService} from "../globals";

@Component({
  selector: 'mutfaklar',
  moduleId: module.id,
  templateUrl: './mutfaklar.component.html',
  styleUrls: ['./mutfaklar.component.css'],
  providers:[MutfaklarService]
})
export class MutfaklarComponent {

  public _mutfak:Mutfak;
  _isEditMode=true;
  FiyatlarGorunsunMu=true;

  EkrandaGorunsunMu:boolean=true;


  constructor(private mutfaklarService: MutfaklarService,public globalService:AppGlobalsService)
  { 
     this._mutfak=new Mutfak(new Date(),"",0, "",[]);;

      var aktifTarih= new Date();
      mutfaklarService.verileriGetir(aktifTarih).subscribe(
      data=>{
        this._mutfak=data;
      })

  }

  kaydet()
  {

    var mutfak= new Mutfak(new Date(),"Çin Mutfağı",500, "Resim",[]);
    
    mutfak.YemekItems.push(new YemekMenuItem("0", "yeniii"));
    mutfak.YemekItems.push(new YemekMenuItem("0", "yeniii3333"));

    this.mutfaklarService.kaydet(new Date(),mutfak);
  }

  ngOnInit() {
  }

}
