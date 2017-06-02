import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class IstatistikBarService {

     constructor(private afDb: AngularFireDatabase) {}


    istatistikGetir(ref: string) {
        var yol = ref;
        return this.afDb.object(yol);
    }

    kaydet(ref: string, istatistik: any) {
        var yol = ref;
        return this.afDb.object(yol).set(istatistik);

    }


}