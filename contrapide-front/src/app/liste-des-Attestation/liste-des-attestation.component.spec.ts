import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesAttestationComponent } from './liste-des-attestation.component';

describe('ListeDesAttestationComponent', () => {
  let component: ListeDesAttestationComponent;
  let fixture: ComponentFixture<ListeDesAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesAttestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
