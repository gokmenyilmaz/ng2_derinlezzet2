import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AlakartMenu} from '../_models/AlakartMenu';
import {AlakartMenuItem} from '../_models/AlakartMenuItem';

@Injectable()
export class AlakartService {

    constructor(private afDb: AngularFireDatabase) {}

    alakartVerileriniGetir() {

        var yol = `/AlakartMenu`;
        return this.afDb.object(yol);
    }

    alakartVeriKaydet(data:AlakartMenu[] ) {
        var yol = `/AlakartMenu`;
        delete data['$key'];
        delete data['$exists'];

        return this.afDb.object(yol).set(data);

    }


}