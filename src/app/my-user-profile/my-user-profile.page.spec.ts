import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyUserProfilePage } from './my-user-profile.page';

describe('MyUserProfilePage', () => {
  let component: MyUserProfilePage;
  let fixture: ComponentFixture<MyUserProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUserProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyUserProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
