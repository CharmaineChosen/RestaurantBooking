import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyDishesPage } from './daily-dishes.page';

describe('DailyDishesPage', () => {
  let component: DailyDishesPage;
  let fixture: ComponentFixture<DailyDishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyDishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
