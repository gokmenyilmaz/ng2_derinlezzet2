import {YemekMenuItem} from './YemekMenuItem'
export class Mutfak {
    constructor(
        public Tarih: Date,
        public MenuAd: string,
        public MenuAdAltBaslik: string,
        public ToplamFiyat:number,
        public Resim:string,
        public YemekItems:YemekMenuItem[],

        public SatirFiyatGorunsunMu:boolean,
        public ToplamFiyatGorunsunMu:boolean,
      
        public AnaSayfadaGorunsunMu:boolean

    ) {}
}
