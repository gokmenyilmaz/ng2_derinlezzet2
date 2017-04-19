import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders,FirebaseListObservable, AuthMethods,FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HaftalikMenuService {

    constructor(private af: AngularFire) {
       
 
    }

    haftaVerileriniGetir(_yil: number, _ay: number, _pazartesiKey: number) {

        var yol = `/HaftalikMenu/${_yil}/${_ay}/${_pazartesiKey}`;
        return this.af.database.object(yol);
    }

    haftaVeriKaydet(_yil: number, _ay: number, _pazartesiKey: number, _haftaData: any) {
        var yol = `/HaftalikMenu/${_yil}/${_ay}/${_pazartesiKey}`;
        delete _haftaData['$key'];
        delete _haftaData['$exists'];


   
        return this.af.database.object(yol).set(_haftaData);

    }


}