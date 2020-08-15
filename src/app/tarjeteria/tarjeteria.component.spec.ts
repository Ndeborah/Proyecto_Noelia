import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjeteriaComponent } from './tarjeteria.component';

describe('TarjeteriaComponent', () => {
  let component: TarjeteriaComponent;
  let fixture: ComponentFixture<TarjeteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjeteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
