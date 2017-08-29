import {YemekMenuItem} from './YemekMenuItem'
export class YemekMenuGun {
    constructor(
        public Tarih: Date,
        public GunAd: string,
        public FiyatlarGorunsunMu:boolean,
        public ToplamFiyatGorunsunMu:boolean,

        public ToplamFiyat:number,
       

        public YemekMenuItems: YemekMenuItem[],
        public GunBaslik:string,
        public image:string,

        public Aciklama:string
        

    ) {
    }
}