import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonosContactoComponent } from './fonos-contacto.component';

describe('FonosContactoComponent', () => {
  let component: FonosContactoComponent;
  let fixture: ComponentFixture<FonosContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonosContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FonosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
