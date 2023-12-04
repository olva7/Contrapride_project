import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesSalarieComponent } from './liste-des-salarie.component';

describe('ListeDesSalarieComponent', () => {
  let component: ListeDesSalarieComponent;
  let fixture: ComponentFixture<ListeDesSalarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesSalarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
