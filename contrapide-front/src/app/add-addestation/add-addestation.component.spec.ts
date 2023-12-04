import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddestationComponent } from './add-addestation.component';

describe('AddAddestationComponent', () => {
  let component: AddAddestationComponent;
  let fixture: ComponentFixture<AddAddestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
