import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCardsComponent } from './noticia-cards.component';

describe('NoticiaCardsComponent', () => {
  let component: NoticiaCardsComponent;
  let fixture: ComponentFixture<NoticiaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
