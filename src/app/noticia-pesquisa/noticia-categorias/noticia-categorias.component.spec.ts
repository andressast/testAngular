import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCategoriasComponent } from './noticia-categorias.component';

describe('NoticiaCategoriasComponent', () => {
  let component: NoticiaCategoriasComponent;
  let fixture: ComponentFixture<NoticiaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
