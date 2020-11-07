import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreRestaurantsPage } from './explore-restaurants.page';

describe('ExploreRestaurantsPage', () => {
  let component: ExploreRestaurantsPage;
  let fixture: ComponentFixture<ExploreRestaurantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreRestaurantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreRestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
