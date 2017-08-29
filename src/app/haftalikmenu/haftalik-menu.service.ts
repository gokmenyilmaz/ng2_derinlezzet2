import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class HaftalikMenuService {

    constructor(private afDb: AngularFireDatabase) {}

    haftaVerileriniGetir(_menuAd:string,_yil: number, _ay: number, _pazartesiKey: number) {

        var yol = `/${_menuAd}/${_yil}/${_ay}/${_pazartesiKey}`;
        return this.afDb.object(yol);
    }

    haftaVeriKaydet(_menuAd:string,_yil: number, _ay: number, _pazartesiKey: number, _haftaData: any) {
        var yol = `/${_menuAd}/${_yil}/${_ay}/${_pazartesiKey}`;
        delete _haftaData['$key'];
        delete _haftaData['$exists'];
   
        return this.afDb.object(yol).set(_haftaData);

    }


}