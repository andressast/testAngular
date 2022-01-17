import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaTituloComponent } from './noticia-titulo.component';

describe('NoticiaTituloComponent', () => {
  let component: NoticiaTituloComponent;
  let fixture: ComponentFixture<NoticiaTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
