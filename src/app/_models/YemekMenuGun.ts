import {YemekMenuItem} from './YemekMenuItem'
export class YemekMenuGun {
    constructor(
        public Tarih: string,
        public GunAd: string,
        public FiyatlarGorunsunMu:boolean,
        public ToplamFiyatGorunsunMu:boolean,

        public ToplamFiyat:number,

        public YemekMenuItems: YemekMenuItem[]

    ) {
    }
}