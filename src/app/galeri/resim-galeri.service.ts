import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FigureItem } from './resim-galeri.component';



@Injectable()
export class ResimGaleriService {

 constructor(private afDb: AngularFireDatabase) {}


    resimleriGetir(ref: string) {

        var yol = ref;
        return this.afDb.list<FigureItem>(yol);
    }

    kaydet(ref: string, galeri: any) {
        var yol = ref;
        return this.afDb.object(yol).set(galeri);

    }


}