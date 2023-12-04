import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesStagairesComponent } from './liste-des-stagaires.component';

describe('ListeDesStagairesComponent', () => {
  let component: ListeDesStagairesComponent;
  let fixture: ComponentFixture<ListeDesStagairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesStagairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesStagairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
