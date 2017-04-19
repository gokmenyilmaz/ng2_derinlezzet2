import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class IstatistikBarService {

    constructor(private af: AngularFire) {

    }

    istatistikGetir(ref: string) {
        var yol = ref;
        return this.af.database.object(yol);
    }

    kaydet(ref: string, istatistik: any) {
        var yol = ref;
        return this.af.database.object(yol).set(istatistik);

    }


}