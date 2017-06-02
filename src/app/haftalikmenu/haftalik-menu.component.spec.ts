import { TestBed, async } from '@angular/core/testing';
import { HaftalikMenuComponent } from './haftalik-menu.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

describe('haftalik-menu', () => {

  let comp:HaftalikMenuComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HaftalikMenuComponent
      ],
      imports:[
        FormsModule,
        AppModule
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(HaftalikMenuComponent);
    comp=fixture.componentInstance;

  }));

  it('Önceki ay pt key 29 olmalı', async(() => {
    
    comp.yil=2017;
    comp.ay_onikili=6;
    comp.varsayilanTarihAyarla(new Date(2017,6,2));
    expect(comp.aktifPazartesiKey).toBe(29);


  }));

 
});
