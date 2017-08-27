import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Mutfak} from '../_models/mutfak'

@Injectable()
export class MutfaklarService {

  constructor(private af:AngularFireDatabase) { }

  verileriGetir(yayinBaslangicTarihi:Date)
  {
    var u=yayinBaslangicTarihi.toLocaleDateString().replace(/\./g,'-')
    var yol = `/Mutfaklar/${u}`;
    return this.af.object(yol);
  }

  kaydet(yayinBaslangicTarihi:Date, data:any)
  {

    var u=yayinBaslangicTarihi.toLocaleDateString().replace(/\./g,'-')
    var yol = `/Mutfaklar/${u}`;

    return this.af.object(yol).set(data);
  }




}
