import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStagaireComponent } from './add-stagaire.component';

describe('AddStagaireComponent', () => {
  let component: AddStagaireComponent;
  let fixture: ComponentFixture<AddStagaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStagaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStagaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
