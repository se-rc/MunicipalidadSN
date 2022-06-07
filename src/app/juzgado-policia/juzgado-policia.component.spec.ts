import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuzgadoPoliciaComponent } from './juzgado-policia.component';

describe('JuzgadoPoliciaComponent', () => {
  let component: JuzgadoPoliciaComponent;
  let fixture: ComponentFixture<JuzgadoPoliciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuzgadoPoliciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuzgadoPoliciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
