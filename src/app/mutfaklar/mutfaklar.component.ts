import { Component, OnInit } from '@angular/core';
import {MutfaklarService} from './mutfaklar.service'
import {Mutfak} from '../_models/mutfak'
import {YemekMenuItem} from '../_models/YemekMenuItem'

@Component({
  selector: 'mutfaklar',
  templateUrl: './mutfaklar.component.html',
  styleUrls: ['./mutfaklar.component.css'],
  providers:[MutfaklarService]
})
export class MutfaklarComponent implements OnInit {

  _mutfak:any;
  constructor(private mutfaklarService: MutfaklarService)
  { 

      var aktifTarih= new Date();
      mutfaklarService.verileriGetir(aktifTarih).subscribe(c=>{
        this._mutfak=c;

        if (c.$exists() == false) {

          var mutfak= new Mutfak(new Date(),"Çin Mutfağı",500, "Resim",[]);

          mutfak.YemekItems.push(new YemekMenuItem("0", "yeniii"));
          mutfak.YemekItems.push(new YemekMenuItem("0", "yeniii3333"));

        }
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
