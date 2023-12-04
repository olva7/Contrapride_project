import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfcontratComponent } from './pdfcontrat.component';

describe('PdfcontratComponent', () => {
  let component: PdfcontratComponent;
  let fixture: ComponentFixture<PdfcontratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfcontratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfcontratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
