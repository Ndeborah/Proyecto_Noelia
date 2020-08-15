import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouveniresComponent } from './souvenires.component';

describe('SouveniresComponent', () => {
  let component: SouveniresComponent;
  let fixture: ComponentFixture<SouveniresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouveniresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouveniresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
