import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutfaklarComponent } from './mutfaklar.component';

describe('MutfaklarComponent', () => {
  let component: MutfaklarComponent;
  let fixture: ComponentFixture<MutfaklarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutfaklarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutfaklarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
