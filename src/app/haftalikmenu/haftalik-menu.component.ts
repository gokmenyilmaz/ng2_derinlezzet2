import { Component, OnInit } from '@angular/core';
import { HaftalikMenuService } from './haftalik-menu.service'
import {AppGlobalsService} from "../globals";

import {YemekMenuGun} from "../_models/YemekMenuGun";
import {YemekMenuItem} from "../_models/YemekMenuItem";
import {KeyValue} from "../_models/KeyValue";
import {User} from "../_models/User";

import {UserInfo}  from 'firebase';


@Component({
    moduleId: module.id,
    selector: 'haftalik-menu',
    templateUrl: 'haftalik-menu.component.html',
    styleUrls: ['haftalik-menu.component.css'],
    providers: [HaftalikMenuService]
})




export class HaftalikMenuComponent {
    readonly MAX_YEMEKGUN_SAYISI: number=7;

    gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    aylar = [
        { id: 0, value: "Ay Seçiniz" },
        { id: 1, value: "Ocak" }, { id: 2, value: "Şubat" }, { id: 3, value: "Mart" }, { id: 4, value: "Nisan" }, { id: 5, value: "Mayıs" }, { id: 6, value: "Haziran" },
        { id: 7, value: "Temmuz" }, { id: 8, value: "Ağustos" }, { id: 9, value: "Eylül" }, { id: 10, value: "Ekim" }, { id: 11, value: "Kasım" }, { id: 12, value: "Aralık" },
    ];

    YemekMenuGunListe: YemekMenuGun[] = [];
    yil: number;
    ay_onikili: number;
    pazartesiKey: number;
    ay_pazartesiler: KeyValue[] = [];

     _isEditMode:boolean=false;

    constructor(private haftalikMenuService: HaftalikMenuService,public globalService:AppGlobalsService) {

        this.varsayilanTarihAyarla();
        this.yukle();

    }

    varsayilanTarihAyarla() {
        var d = new Date();

        this.yil = d.getFullYear();
        this.ay_onikili = d.getMonth() + 1;
        this.ay_pazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili)

        var ptGun = d.getDate() - d.getDay() + 1;
        this.pazartesiKey = ptGun;

    

        if(Number(this.ay_pazartesiler[0].value)<this.MAX_YEMEKGUN_SAYISI){
             this.ay_onikili = this.ay_onikili-1;
             var oncekiAyPazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili);

            this.pazartesiKey =Number(oncekiAyPazartesiler[oncekiAyPazartesiler.length-1].value);
                
        }


    }

    yukle() {
        this.YemekMenuGunListe = [];

        if (this.pazartesiKey == -1) return;

        console.log(this.yil, this.ay_onikili, this.pazartesiKey,this.pazartesiKey);

        this.haftalikMenuService.haftaVerileriniGetir(this.yil, this.ay_onikili, this.pazartesiKey).subscribe(data => {
            this.YemekMenuGunListe = data;
            if (data.$exists() == false) {
                this.setBosYemekMenuItems();
            }
        });
    }

    setBosYemekMenuItems() {
        this.YemekMenuGunListe = [];

        for (let g = 0; g < 5; g++) {
            let tarih = new Date();
            tarih.setFullYear(this.yil, this.ay_onikili - 1, this.pazartesiKey + g);

            let gun = new YemekMenuGun(tarih.toLocaleDateString(), this.gunler[tarih.getDay() - 1],false,true,0, []);

            for (let i = 0; i < 5; i++) {
                gun.YemekMenuItems.push(new YemekMenuItem("0", ""));
            }

            this.YemekMenuGunListe.push(gun);
        }
    }


    tarihDegisti() {
        this.ay_pazartesiler = this.getAyPazartesiler(this.yil, this.ay_onikili);
        this.pazartesiKey = -1;

        this.yukle();

    }

    gunDegisti() {
        this.yukle();

    }

    kaydet() {
        this.haftalikMenuService.haftaVeriKaydet(this.yil, this.ay_onikili, this.pazartesiKey, this.YemekMenuGunListe);
        this._isEditMode=false;
    }

    getAyPazartesiler(_yil: number, _ay_onikili: number) {
        let _ay = _ay_onikili - 1;
        let _ptList: KeyValue[] = [];

        let _gunSayisi = new Date(_yil, _ay + 1, 0).getDate(); //bir sonraki ayın 0 ıncı günü gün sayısını verir. Okunabilirlik açısından böyle yazıldı

        if (_ay == -1) return _ptList;

        for (let i: number = 1; i <= _gunSayisi; i++) {
            var gun = new Date(_yil, _ay, i).getDay();
            if (gun == 1) _ptList.push(new KeyValue(i, i.toString()));

        }

        return _ptList;
    }

    duzenle()
    {
        this._isEditMode=true;
    }

    yeniSatirEkle(m:YemekMenuGun)
    {
        let _yeniYemekMenuItem=new YemekMenuItem("0", "")
        m.YemekMenuItems.push(_yeniYemekMenuItem);
    }

    satirSil(m:YemekMenuGun,i:YemekMenuItem)
    {
        this.removeFromArray(m,i);
    }

    removeFromArray(m:YemekMenuGun, value:any) {
        var idx = m.YemekMenuItems.indexOf(value);
        if (idx !== -1) {
            m.YemekMenuItems.splice(idx, 1);
        }
        return m.YemekMenuItems;
    }

}