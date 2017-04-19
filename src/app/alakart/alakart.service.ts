import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import {AlakartMenu} from '../_models/AlakartMenu';
import {AlakartMenuItem} from '../_models/AlakartMenuItem';

@Injectable()
export class AlakartService {

    constructor(private af: AngularFire) {

    }

    alakartVerileriniGetir() {

        var yol = `/AlakartMenu`;
        return this.af.database.object(yol);
    }

    alakartVeriKaydet(data:AlakartMenu[] ) {
        var yol = `/AlakartMenu`;
        delete data['$key'];
        delete data['$exists'];

        return this.af.database.object(yol).set(data);

    }


}