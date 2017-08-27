import {YemekMenuItem} from './YemekMenuItem'
export class Mutfak {
    constructor(
        public Tarih: Date,
        public MenuAd: string,
        public ToplamFiyat:number,
        public Resim:string,
        public YemekItems:YemekMenuItem[]

    ) {}
}
