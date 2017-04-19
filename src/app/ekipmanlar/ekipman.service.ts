import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class EkipmanService {

    constructor(private af: AngularFire) {

    }

    haftaVerileriniGetir(_yil: number, _ay: number, _pazartesiKey: number) {

        var yol = `/HaftalikMenu/${_yil}/${_ay}/${_pazartesiKey}`;
        return this.af.database.object(yol);
    }

    haftaVeriKaydet(_yil: number, _ay: number, _pazartesiKey: number, _haftaData: any) {
        var yol = `/HaftalikMenu/${_yil}/${_ay}/${_pazartesiKey}`;

        console.log(_haftaData);

        return this.af.database.object(yol).set(_haftaData);

    }


}