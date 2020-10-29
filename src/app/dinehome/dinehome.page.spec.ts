import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DinehomePage } from './dinehome.page';

describe('DinehomePage', () => {
  let component: DinehomePage;
  let fixture: ComponentFixture<DinehomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinehomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DinehomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
