import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfAttestationComponent } from './pdf-attestation.component';

describe('PdfAttestationComponent', () => {
  let component: PdfAttestationComponent;
  let fixture: ComponentFixture<PdfAttestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfAttestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfAttestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
