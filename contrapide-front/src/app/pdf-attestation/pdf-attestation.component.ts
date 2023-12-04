
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Stagaire } from 'app/models/Stagaire';
import { Attestation } from 'app/models/Attestation';

@Component({
  selector: 'app-pdf-attestation',
  templateUrl: './pdf-attestation.component.html',
  styleUrls: ['./pdf-attestation.component.scss']
})
export class PdfAttestationComponent implements OnInit {
  stagaire: Stagaire;
  attestation:Attestation;
  title:String = "Attestation de stage"
  @ViewChild("couponPage", { static: true }) couponPage: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {     
  console.log('Data received in PdfcontratComponent:', data);
  console.log('contrat:', data?.attestation?.date_debut);

  }

  ngOnInit(): void { }

  openPDF(): void {
    const DATA = this.couponPage.nativeElement;
    const doc = new jsPDF();
  
    // Set the PDF page size
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();
  
    // Calculate the scaling factor for html2canvas
    const scale = pdfWidth / DATA.offsetWidth;
  
    // Adjust font size to avoid huge letters
    const fontSize = 10; // Experiment with the font size to find the best fit
  
    doc.setFontSize(fontSize);
    doc.html(DATA, {
      html2canvas: { scale },
      callback: () => {
        doc.save('mon-fichier.pdf');
      },
    });
  }
  
  openPDF2(): void {
  const DATA = this.couponPage.nativeElement.innerHTML; 
  const doc = new jsPDF();
  doc.html(DATA, {
    callback: (pdf) => {
      pdf.save('mon-fichier.pdf');
    },
  });
}




generateSalutation(): string {
  if (this.data.stagaire?.gendre === 'homme') {
    return `Monsieur ${this.data.stagaire?.nom?.toUpperCase()} ${this.data.stagaire?.prenom},`;
  } else if (this.data.stagaire?.gendre === 'femme') {
    return `Madame ${this.data.stagaire?.nom?.toUpperCase()} ${this.data.stagaire?.prenom},`;
  } else {
    // Handle other genders or undefined case if needed
    return ''; // Default value
  }}
formatDate(dateString: string): string {
  const dateObj = new Date(dateString);
  const day = this.padZero(dateObj.getDate());
  const month = this.padZero(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

formatDate2(dateString: string): string {
  const dateObj = new Date(dateString);
  const day = this.padZero(dateObj.getDate());
  const month = this.padZero(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}
padZero(num: number): string {
  return num.toString().padStart(2, '0');
}


exportDataToPDF() {
  // Creating a unique file name for my PDF
  const fileName = this.title.replace(' ', '_') + '_' + Math.floor((Math.random() * 1000000) + 1) + '.pdf';
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF();

  // Add logo image to the PDF and center it
  const logoImg = 'https://media.licdn.com/dms/image/C560BAQHwV_esHzmEkA/company-logo_200_200/0/1566583937508?e=2147483647&v=beta&t=ZkuOOoAV69qjuCAS3BKTQn3t2fc_n5lTL52f-Ue0N3w';
  const imgWidth = 40;
  const imgHeight = 40;
  const imgXPos = (doc.internal.pageSize.getWidth() - imgWidth) / 2; // Centered horizontally
  const imgYPos = 20; // Adjust the vertical position as needed
  doc.addImage(logoImg, 'PNG', imgXPos, imgYPos, imgWidth, imgHeight);

  // Add the title "Attestation de stage" and underline it
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  const titleXPos = (doc.internal.pageSize.getWidth() / 2);
  const titleYPos = imgYPos + imgHeight + 10; // Adjust the vertical position as needed
  doc.text("Attestation de stage", titleXPos, titleYPos, { align: 'center' });
  doc.line(titleXPos - 40, titleYPos + 1, titleXPos + 40, titleYPos + 1); // Underline

  // Sample data for texts (replace this with your actual data)
  const data = [
    {
      text: "Je, soussigné, Monsieur BOUSSEMA RJEB, gérant de la société WG CONSULTING,atteste par la présente que" + this.generateSalutation() + " né le " + (this.data?.stagiaire?.datedenaissance || '20/03/2000') + " titulaire de carte d'identité numéro : " + (this.data.stagiaire?.cin || '14023876') + " a effectué avec succès un stage au sein de notre entreprise du 19/06/2023 au 31/07/2023 en qualité de stagiaire. Le stagiaire a passé son stage dans des très bonnes conditions en termes de connaissances professionnelles et d'assiduité dans le travail.\n\n\n\n\n\nNous lui délivrons la présente attestation pour servir et valoir ce que de droit.\n\n\n                                                                                   Signature et cachet"
    },
    {
      text: "                                      Signature et cachet"
    },
    // Add more text data here as needed
  ];

   
  // Position variable for text
  let textYPos = 95;
  
  // Loop through the data and add text to the PDF
  data.forEach((item) => {
    doc.setFontSize(15); // Augmenter la taille des lettres
    doc.setFont('helvetica', 'normal');
    const wrappedText = doc.splitTextToSize(item.text, doc.internal.pageSize.getWidth() - 20);
    const textLines = wrappedText.length; // Get the number of lines in the wrapped text
    doc.text(wrappedText, 10, textYPos, { align: 'left' });

    // Calculate the total height of the wrapped text
    const textHeight = textLines * 15; // Assuming 15 as the line height for the text

    // Add some extra spacing between texts (adjust the value as needed)
    const lineSpacing = 5;
    textYPos += textHeight + lineSpacing;
  });

  // Save the PDF
  doc.save(fileName);


}


}
