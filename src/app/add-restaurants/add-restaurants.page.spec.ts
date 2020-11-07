import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddRestaurantsPage } from './add-restaurants.page';

describe('AddRestaurantsPage', () => {
  let component: AddRestaurantsPage;
  let fixture: ComponentFixture<AddRestaurantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestaurantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
