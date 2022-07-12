import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFechasComponent } from './noticias-fechas.component';

describe('NoticiasFechasComponent', () => {
  let component: NoticiasFechasComponent;
  let fixture: ComponentFixture<NoticiasFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
