import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class FooterBarService {


    constructor(private afDb: AngularFireDatabase) {}
    footerDataGetir() {
        var yol = `/Firma`;
        return this.afDb.object(yol);
    }

    kaydet(data:any) {
        var yol = `/Firma`;

        delete data['$key'];
        delete data['$exists'];

        return this.afDb.object(yol).set(data);

    }

    mesajGonder()
    {
        alert("Mesajınız iletildi");
    }

}