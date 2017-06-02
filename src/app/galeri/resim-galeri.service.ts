import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ResimGaleriService {

 constructor(private afDb: AngularFireDatabase) {}


    resimleriGetir(ref: string) {

        var yol = ref;
        return this.afDb.object(yol);
    }

    kaydet(ref: string, galeri: any) {
        var yol = ref;
        return this.afDb.object(yol).set(galeri);

    }


}