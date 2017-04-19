import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class FooterBarService {


    constructor(private af: AngularFire) {

    }

    footerDataGetir() {
        var yol = `/Firma`;
        return this.af.database.object(yol);
    }

    kaydet(data:any) {
        var yol = `/Firma`;

        delete data['$key'];
        delete data['$exists'];

        return this.af.database.object(yol).set(data);

    }

    mesajGonder()
    {
        alert("Mesajınız iletildi");
    }

}