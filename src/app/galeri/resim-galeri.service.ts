import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ResimGaleriService {

    constructor(private af: AngularFire) {

    }

    resimleriGetir(ref: string) {

        var yol = ref;
        return this.af.database.object(yol);
    }

    kaydet(ref: string, galeri: any) {
        var yol = ref;
        return this.af.database.object(yol).set(galeri);

    }


}