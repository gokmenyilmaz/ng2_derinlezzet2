import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable()
export class IstatistikBarService {

     constructor(private afDb: AngularFireDatabase) {}


    istatistikGetir(ref: string) {
        var yol = ref;
        return this.afDb.object<any>(yol);
    }

    kaydet(ref: string, istatistik: any) {
        var yol = ref;
        return this.afDb.object(yol).set(istatistik);

    }


}