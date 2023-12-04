import { contra } from 'app/models/contra';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Salarie } from 'app/models/Salarie';
//import html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-pdfcontrat',
  templateUrl: './pdfcontrat.component.html',
  styleUrls: ['./pdfcontrat.component.scss']
})
export class PdfcontratComponent implements OnInit {
  salarie: Salarie;
  contrat:contra;
  title:String = "contrat"
  @ViewChild("couponPage", { static: true }) couponPage: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {     
  console.log('Data received in PdfcontratComponent:',data);
  console.log('contrat:', data?.contrat?.poste);
  this.contrat = data.contrat;

  }

  ngOnInit(): void { }
  //title: string = "Contrat";
  nombreEnLettres(num: number): string {
    const unites: string[] = ['Zéro', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix',
      'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-sept', 'Dix-huit', 'Dix-neuf'];
    const dizaines: string[] = ['', '', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Soixante-dix', 'Quatre-vingts', 'Quatre-vingt-dix'];
  
    if (num === 0) {
      return 'Zéro';
    }
  
    if ((num = Math.floor(num)) === 0) {
      return '';
    }
  
    let numStr = '';
  
    if (num < 0) {
      numStr += 'Moins ';
      num = -num;
    }
  
    if (num < 20) {
      numStr += unites[num];
    } else if (num < 100) {
      const dizaine = Math.floor(num / 10);
      const unite = num % 10;
      numStr += dizaines[dizaine];
      if (unite > 0) {
        if (dizaine === 7 || dizaine === 9) {
          numStr += '-' + unites[10 + unite];
        } else {
          numStr += '-' + unites[unite];
        }
      }
    } else if (num < 1000) {
      const centaine = Math.floor(num / 100);
      const resteCentaine = num % 100;
      numStr += unites[centaine] + ' Cent';
      if (resteCentaine > 0) {
        numStr += ' et ' + this.nombreEnLettres(resteCentaine);
      }
    } else if (num < 1000000) {
      const millier = Math.floor(num / 1000);
      const resteMillier = num % 1000;
      numStr += this.nombreEnLettres(millier) + ' Mille';
      if (resteMillier > 0) {
        if (resteMillier < 100) {
          numStr += ' et ';
        }
        numStr += this.nombreEnLettres(resteMillier);
      }
    } else if (num < 1000000000) {
      const million = Math.floor(num / 1000000);
      const resteMillion = num % 1000000;
      numStr += this.nombreEnLettres(million) + ' Million';
      if (resteMillion > 0) {
        if (resteMillion < 100) {
          numStr += ' et ';
        }
        numStr += this.nombreEnLettres(resteMillion);
      }
    } else {
      const milliard = Math.floor(num / 1000000000);
      const resteMilliard = num % 1000000000;
      numStr += this.nombreEnLettres(milliard) + ' Milliard';
      if (resteMilliard > 0) {
        if (resteMilliard < 100) {
          numStr += ' et ';
        }
        numStr += this.nombreEnLettres(resteMilliard);
      }
    }
  
    return numStr;
}
nombreEnLettres1(num: number): string {
  const unites: string[] = ['Zéro', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix',
    'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-sept', 'Dix-huit', 'Dix-neuf'];
  const dizaines: string[] = ['', '', 'Vingt', 'Trente', 'Quarante', 'Cinquante', 'Soixante', 'Soixante-dix', 'Quatre-vingts', 'Quatre-vingt-dix'];


  if (num === 0) {
    return 'Zéro';
  }

  if ((num = Math.floor(num)) === 0) {
    return '';
  }

  let numStr = '';

  if (num < 0) {
    numStr += 'Moins ';
    num = -num;
  }

  if (num < 20) {
    numStr += unites[num];
  } else if (num < 100) {
    const dizaine = Math.floor(num / 10);
    const unite = num % 10;
    numStr += dizaines[dizaine];
    if (unite > 0) {
      if (dizaine === 7 || dizaine === 9) {
        numStr += '-' + unites[10 + unite];
      } else {
        numStr += '-' + unites[unite];
      }
    }
  } else if (num < 1000) {
    const centaine = Math.floor(num / 100);
    const resteCentaine = num % 100;
    numStr += unites[centaine] + ' Cent';
    if (resteCentaine > 0) {
      numStr += ' et ' + this.nombreEnLettres(resteCentaine);
    }
  } else if (num < 1000000) {
    const millier = Math.floor(num / 1000);
    const resteMillier = num % 1000;
    numStr += this.nombreEnLettres(millier) + ' Mille';
    if (resteMillier > 0) {
      if (resteMillier < 100) {
        numStr += ' et ';
      }
      numStr += this.nombreEnLettres(resteMillier);
    }
  } else if (num < 1000000000) {
    const million = Math.floor(num / 1000000);
    const resteMillion = num % 1000000;
    numStr += this.nombreEnLettres(million) + ' Million';
    if (resteMillion > 0) {
      if (resteMillion < 100) {
        numStr += ' et ';
      }
      numStr += this.nombreEnLettres(resteMillion);
    }
  } else {
    const milliard = Math.floor(num / 1000000000);
    const resteMilliard = num % 1000000000;
    numStr += this.nombreEnLettres(milliard) + ' Milliard';
    if (resteMilliard > 0) {
      if (resteMilliard < 100) {
        numStr += ' et ';
      }
      numStr += this.nombreEnLettres(resteMilliard);
    }
  }

  return numStr;
}

nombreEnDinarsEtMillimes(num: number): string {
  const dinars = Math.floor(num);
  const millimes = Math.round((num - dinars) * 1000);

  let result = this.nombreEnLettres(dinars) + ' Dinars';

  if (millimes > 0) {
    result += ' et ' + this.nombreEnLettres(millimes) + ' Millimes';
  }

  return result;
}

formatDate(dateString: string): string {
  const dateObj = new Date(dateString);
  const day = this.padZero(dateObj.getDate());
  const month = this.padZero(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

padZero(num: number): string {
  return num.toString().padStart(2, '0');
}

generateSalutation(): string {
  if (this.data.salarie?.gendre === 'homme') {
    return `Monsieur ${this.data.salarie?.nom?.toUpperCase()} ${this.data.salarie?.prenom}`;
  } else if (this.data.salarie?.gendre === 'femme') {
    return `Madame ${this.data.salarie?.nom?.toUpperCase()} ${this.data.salarie?.prenom}`;
  } else {
    // Handle other genders or undefined case if needed
    return ''; // Default value
  }






}
formatDate2(dateString: string): string {
  const dateObj = new Date(dateString);
  if (isNaN(dateObj.getTime())) {
    return "Invalid Date";
  }
  const day = this.padZero(dateObj.getDate());
  const month = this.padZero(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}

exportDataToPDF() {
  // Creating a unique file name for my PDF
  const fileName = this.title.replace(' ', '_') + '_' + Math.floor((Math.random() * 1000000) + 1) + '.pdf';
  // Default export is a4 paper, portrait, using millimeters for units
  const doc = new jsPDF();
  const logoImg = 'https://media.licdn.com/dms/image/C560BAQHwV_esHzmEkA/company-logo_200_200/0/1566583937508?e=2147483647&v=beta&t=ZkuOOoAV69qjuCAS3BKTQn3t2fc_n5lTL52f-Ue0N3w'; // Replace 'path_to_your_logo.png' with the actual path to your logo image

  // Add logo image to the PDF
  const imgWidth = 40; // Adjust the image width as needed
  const imgHeight = 40; // Adjust the image height as needed
  const imgXPos = doc.internal.pageSize.getWidth() - imgWidth - 160;
  const imgYPos = 10;
  doc.addImage(logoImg, 'PNG', imgXPos, imgYPos, imgWidth, imgHeight);

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  const titleXPos = (doc.internal.pageSize.getWidth() / 3) - (doc.getTextWidth("Contrat") / 3);
  doc.text("CONTRAT DE TRAVAIL \n A DURÉE INDÉTERMINÉE", titleXPos, 55);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(14);

  // Sample data for titles and texts (replace this with your actual data)
  const datedebut = this.data?.contrat?.datedebut;
  const formattedDateDebut = datedebut ? this.formatDate2(datedebut) : "Invalid Date";
  const data = [
    { title: "ENTRE LES SOUSSIGNÉS", text: "La société W.G. CONSULTING ayant comme matricule fiscale : 1410177 Q/A/M/000 dont le siège social est situé à Immeuble Chbil Medimegh - Av Habib Bourguiba 5080 Téboulba –Monastir.\nReprésentée par Monsieur Boussema Rjeb agissant en qualité de Gérant.\nD’une part Et " + this.generateSalutation() + ", né le " + (this.data?.contrat?.datedebut || 'DATE_NOT_AVAILABLE') + " à " + (this.data.salarie?.lieu || 'LIEU_NOT_AVAILABLE') + ", demeurant à " + (this.data.salarie?.addresse || 'ADDRESS_NOT_AVAILABLE') + " et ayant comme numéro CIN : " + (this.data.salarie?.cin || 'CIN_NOT_AVAILABLE') + " et de sécurité sociale en cours. D’autre part,\nIl a été convenu ce qui suit :\n" },
    {
      title: "ARTICLE N°01 - Engagement",
      text: "La société W.G. CONSULTING engage, sous réserve des résultats de la visite médicale d’embauche " +
        this.generateSalutation() + ". Il déclare formellement n’être lié à aucune entreprise et libre de tout engagement." +
        "Le contrat est soumis aux dispositions du code de travail, du règlement intérieur et de la convention collective applicable" +
        "dans l’entreprise. Le présent contrat qui prend effet le " + formattedDateDebut +
        " est conclu pour une durée indéterminée. Si des dispositions légales, conventionnelles ou réglementaires" +
        " venaient à être modifiées ou supprimées, les dispositions contractuelles s'y rapportant seraient modifiées de plein droit."
    },
    {
      title: "ARTICLE N°02 - Emploi et qualification",
      text: this.generateSalutation() + " reconnaît et accepte que toute réalisation, création, production effectuée dans le cadre du contrat de travail et/ou dans les locaux de la société W.G.CONSULTING ou de ses clients sont la propriété de la société. Les activités principales de " + this.generateSalutation() + " sont les suivantes :\n- Des prestations de gestion d’infrastructures systèmes et réseaux informatiques ainsi que de conseil auprès des services informatiques ou de formation de sociétés clientes.\n- Plus généralement, de remplir toute fonction qui lui sera confiée par la Direction Générale Les attributions et les responsabilités de " + this.generateSalutation() + " sont susceptibles d'évoluer en fonction de l'évolution de la société, ce que " + this.generateSalutation() + " accepte sous réserve que lui soit conservé le bénéfice de sa rémunération et de sa classification."
    },
    {
      title: "ARTICLE N°03 - Horaire de travail",
      text: "La durée hebdomadaire de travail est fixée à 40 heures, du lundi au vendredi.Il pourra être demandé au salarié d'effectuer des heures supplémentaires, dans les conditions fixées par la loi, la convention collective ou l'accord d’entreprise."
    },
    {
      title: "ARTICLE N°04 - Lieu de travail",
      text: "Le lieu de travail est situé à :\nImmeuble Chbil Medimegh - Av Habib Bourguiba 5080 Téboulba – Monastir.\n Parallèlement, la société se réserve le droit, pour des raisons liées à l'organisation et/ou au bon fonctionnement de l’entreprise, de modifier le lieu de travail actuel de "+ this.generateSalutation() +" Celui-ci pourra ainsi être amené à exercer son activité à titre temporaire ou permanent, en tout lieu du territoire national et/ou international. (Notamment en France) chez les clients de la société."
    },
    {
      title: "ARTICLE N°05 - Rémunération",
      text: this.generateSalutation() +" bénéficiera d’un salaire mensuel brut de "+this.data.contrat?.salaire+" ("+ (this.data.contrat?.salaire)+" Dinars). Cette rémunération a un caractère forfaitaire et prend en considération tous dépassements que "+this.generateSalutation() +" pourrait être amené à effectuer pour l’exercice de ses fonctions."
    },
    {
      title: "ARTICLE N°06 - Congés payés",
      text: this.generateSalutation() +"bénéficiera des congés payés institués conformément à la loi et à la convention collective en faveur des salariés de la société soit actuellement "+(this.data.contrat?.dureconge) +"  par an.Ces journées s'acquièrent en fonction du temps de présence dans la société."
    },
    {
      title: "ARTICLE N°07 - Empêchement - Absence - Maladie ou accident",
      text: "En cas d'absence prévisible, le salarié doit solliciter une autorisation préalable de son supérieur hiérarchique qui indépendamment des motifs de l'absence, ne peut lui être accordée que dans la mesure où elle est compatible avec la bonne marche de l’entreprise. En cas de maladie ou d'accident, le salarié devra, dans les vingt-quatre heures, avertir l’entreprise de son indisponibilité et de la durée probable de son absence. Il devra adresser à celle-ci dans les quarante-huit heures suivant l'interruption de son travail un certificat médical indiquant la durée probable de son indisponibilité. En cas de maladie, accident ou d'incapacité frappant le salarié, et qui rend celui-ci incapable d'accomplir ses fonctions convenablement pendant une période continue de six mois, l’entreprise, sauf clause contraire de la Convention Collective, pourra constater la rupture du présent contrat pour cause légitime."
    },
    {
      title: " Clause de confidentialité",
      text:this.generateSalutation() + " s'engage, tant pendant la durée du présent contrat, qu'après sa cessation, à observer la discrétion la plus absolue sur les informations de toute nature concernant le fonctionnement et les activités de la société d'une part, et les clients de cette société d'autre part. Il s'engage à ne communiquer à des tiers aucune indication sur les travaux, inventions, procédés, méthodes de la société qui seront portés à sa connaissance et à ne divulguer, en aucune façon, les indications qu'il pourrait recueillir du fait de ses fonctions sur tout ce qui touche à l'organisation de la société et à ses relations commerciales. Il s'engage à ne sortir aucun document de la société ou d’un partenaire, disquette ou tout autre support qui ne lui soit pas personnel, sauf autorisation expresse de l’employeur."
    },
    {
      title: " Clause de non concurrence",
      text: "En cas de rupture du présent contrat pour quelque cause que ce soit, "+this.generateSalutation() +" s'engage à ne pas travailler, à quelque titre que ce soit pour une entreprise ayant une activité concurrente et/ou cliente de celle de la société<B> W.G. CONSULTING sans avoir eu l’accord préalable, ou à ne pas s'intéresser directement ou indirectement à toutes activités pouvant concurrencer les activités de la société pendant une durée de 2 ans. Les activités susmentionnées ne pourront être exercées pendant une durée de 2 ans à compter de la cessation du contrat, sur le territoire suivant : En Ile de France en France métropolitaine."
    },
    {
      title: "Clause d'exclusivité",
      text: "Il est interdit au salarié d'exercer une autre activité professionnelle, salariée ou indépendante, pendant toute la durée d'exécution de son contrat de travail."
    },
    {
      title: "Clause de dédit formation",
      text: this.generateSalutation()+" pourra suivre une formation lui permettant de parfaire ses connaissances et d'améliorer ses compétences dans son emploi pendant la période d’exécution de son contrat. Lorsque ce stage n'est pas inclus dans le plan de formation de l'entreprise et les frais correspondant excèdent l'obligation légale ou conventionnelle de l'entreprise en matière de participation au financement de la formation professionnelle. Dans ce cas et en contrepartie de cette formation, "+this.generateSalutation()+" s'engage à rester au service de l'entreprise, pendant une durée minimale de 3 années, à compter de la fin de ce stage de formation. A défaut le salarié rembourserait l'intégralité des sommes engagées en plus du montant de son salaire maintenue pendant la période de formation. Dans le cas où "+this.generateSalutation() + "quitterait l'entreprise de sa propre initiative avant la fin de ce stage, ou à la suite d'une démission ou d'un licenciement pour faute grave ou lourde, pendant le délai indiqué ci-dessus, il serait tenu de rembourser les frais de formation ainsi engagés par l'entreprise."
    },
    {
      title: "ARTICLE N°08 - Rupture du contrat de travail",
      text: "Le présent contrat est résiliable par l'une ou l'autre partie, sous réserve du respect d'un délai de préavis de "+ ( this.data.contrat?.preavis)+" en application des dispositions légales et conventionnelles applicables. Fait en trois exemplaires, à TEBOULBA, le "+ this.formatDate(this.data.contrat?.datedebut) +"\nMonsieur Boussema Rjeb,                                                   "+this.generateSalutation()+"\nGérant de la société\nW.G. CONSULTING                                                   L'employé\nMention manuscrite ' bon pour accord '\n                                                   Mention manuscrite ' bon pour accord '"
    },

  ];
  

  const entreLesSoussignesYPos = imgYPos + imgHeight + 28.35; // Adjust the Y position as needed
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  const wrappedEntreLesSoussignesTitle = doc.splitTextToSize(data[0].title, doc.internal.pageSize.getWidth() - 20);
  doc.text(wrappedEntreLesSoussignesTitle, 10, entreLesSoussignesYPos, { align: 'left' });

  // Set the fixed position of "ENTRE LES SOUSSIGNÉS" text content
  const entreLesSoussignesTextYPos = entreLesSoussignesYPos + wrappedEntreLesSoussignesTitle.length * 15 - 7; // Adjust the Y position as needed
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const wrappedEntreLesSoussignesText = doc.splitTextToSize(data[0].text, doc.internal.pageSize.getWidth() - 20);
  doc.text(wrappedEntreLesSoussignesText, 10, entreLesSoussignesTextYPos, { align: 'left' });

  // Set the fixed position of "ARTICLE N°01 - Engagement" title
  const articleN01YPos = entreLesSoussignesTextYPos + wrappedEntreLesSoussignesText.length * 10 - 38.35; // Adjust the Y position as needed
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  const wrappedArticleN01Title = doc.splitTextToSize(data[1].title, doc.internal.pageSize.getWidth() - 20);
  doc.text(wrappedArticleN01Title, 10, articleN01YPos, { align: 'left' });

  // Set the fixed position of "ARTICLE N°01 - Engagement" text content
  const articleN01TextYPos = articleN01YPos + wrappedArticleN01Title.length * 15 - 7; // Adjust the Y position as needed
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const wrappedArticleN01Text = doc.splitTextToSize(data[1].text, doc.internal.pageSize.getWidth() - 20);
  doc.text(wrappedArticleN01Text, 10, articleN01TextYPos, { align: 'left' });
  
  
  let titleYPos = articleN01TextYPos + wrappedArticleN01Text.length * 10 + 28.35; // Set the starting Y position of titles with a distance of 2 cm
  let textYPos = titleYPos + 28.35; // Set the starting Y position of texts with a distance of 2 cm

  const articleN02TitleYPos = entreLesSoussignesTextYPos + wrappedEntreLesSoussignesText.length * 10 ; ; // Start right after the previous text
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  const wrappedArticleN02Title = doc.splitTextToSize(data[2].title, doc.internal.pageSize.getWidth() - 20 );
  doc.text(wrappedArticleN02Title, 10, articleN02TitleYPos, { align: 'left' });

  // Set the fixed position of "ARTICLE N°02 - Emploi et qualification" text content
  const articleN02TextYPos = articleN02TitleYPos + wrappedArticleN02Title.length * 15 - 5 ; // Adjust the Y position as needed
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const wrappedArticleN02Text = doc.splitTextToSize(data[2].text, doc.internal.pageSize.getWidth() - 20);
  doc.text(wrappedArticleN02Text, 10, articleN02TextYPos, { align: 'left' });

  // Update the starting Y positions for the loop
  let titleYPos11 = articleN02TextYPos + wrappedArticleN02Text.length * 10 + 28.35; // Set the starting Y position of titles with a distance of 2 cm
  let textYPos21 = titleYPos11 + 28.35; // Set the starting Y position of texts with a distance of 2 cm
// Set the fixed position of "ARTICLE N°03 - Horaire de travail" title
const articleN03TitleYPos = articleN02TextYPos + wrappedArticleN02Text.length * 10 -40; // Start right after the previous text
doc.setFontSize(15);
doc.setFont('helvetica', 'bold');
const wrappedArticleN03Title = doc.splitTextToSize(data[3].title, doc.internal.pageSize.getWidth() - 20 );
doc.text(wrappedArticleN03Title, 10, articleN03TitleYPos, { align: 'left' });

// Set the fixed position of "ARTICLE N°03 - Horaire de travail" text content
const articleN03TextYPos = articleN03TitleYPos + wrappedArticleN03Title.length * 15 - 6 ; // Adjust the Y position as needed
doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
const wrappedArticleN03Text = doc.splitTextToSize(data[3].text, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN03Text, 10, articleN03TextYPos, { align: 'left' });

// Update the starting Y positions for the loop
let titleYPos1 = articleN03TextYPos + wrappedArticleN03Text.length * 10 + 28.35; // Set the starting Y position of titles with a distance of 2 cm
let textYPos2 = titleYPos1 + 28.35; 

 
// Set the fixed position of "ARTICLE N°04 - Lieu de travail" title
const articleN04TitleYPos = articleN03TextYPos + wrappedArticleN03Text.length * 10 ;// Start right after the previous text
doc.setFontSize(15);
doc.setFont('helvetica', 'bold');
const wrappedArticleN04Title = doc.splitTextToSize(data[4].title, doc.internal.pageSize.getWidth() - 20 );
doc.text(wrappedArticleN04Title, 10, articleN04TitleYPos, { align: 'left' });

// Set the fixed position of "ARTICLE N°04 - Lieu de travail" text content
const articleN04TextYPos = articleN04TitleYPos + wrappedArticleN04Title.length * 15 - 4 ; // Adjust the Y position as needed
doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
const wrappedArticleN04Text = doc.splitTextToSize(data[4].text, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN04Text, 10, articleN04TextYPos, { align: 'left' });

// Update the starting Y positions for the loop
let titleYPos3 = articleN04TextYPos + wrappedArticleN04Text.length * 10 + 28.35; // Set the starting Y position of titles with a distance of 2 cm
let textYPos3 = titleYPos3 + 28.35; 

// Set the fixed position of "ARTICLE N°05 - Rémunération" title
const articleN05TitleYPos = titleYPos3; // Start right after the previous text
doc.setFontSize(15);
doc.setFont('helvetica', 'bold');
const wrappedArticleN05Title = doc.splitTextToSize(data[5].title, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN05Title, 10, articleN05TitleYPos, { align: 'left' });

// Set the fixed position of "ARTICLE N°05 - Rémunération" text content
const articleN05TextYPos = articleN05TitleYPos + wrappedArticleN05Title.length * 15 - 5; // Adjust the Y position as needed
doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
const wrappedArticleN05Text = doc.splitTextToSize(data[5].text, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN05Text, 10, articleN05TextYPos, { align: 'left' });

// Update the starting Y positions for the loop
let titleYPos4 = articleN05TextYPos + wrappedArticleN05Text.length * 10 - 28.35; // Set the starting Y position of titles with a distance of 2 cm
let textYPos4 = titleYPos4 + 28.35;

// Set the fixed position of "ARTICLE N°06 - Congés payés" title
const articleN06TitleYPos = articleN05TitleYPos + wrappedArticleN05Title.length * 15 - 15; // Start right after the previous text
doc.setFontSize(15);
doc.setFont('helvetica', 'bold');
const wrappedArticleN06Title = doc.splitTextToSize(data[6].title, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN06Title, 10, articleN06TitleYPos, { align: 'left' });

// Set the fixed position of "ARTICLE N°06 - Congés payés" text content
const articleN06TextYPos = articleN06TitleYPos + wrappedArticleN06Title.length * 15 - 5; // Adjust the Y position as needed
doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
const wrappedArticleN06Text = doc.splitTextToSize(data[6].text, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN06Text, 10, articleN06TextYPos, { align: 'left' });

// Update the starting Y positions for the loop
let titleYPos5 = articleN06TextYPos + wrappedArticleN06Text.length * 10 + 28.35; // Set the starting Y position of titles with a distance of 2 cm
let textYPos5 = titleYPos5 + 28.35;

// Set the fixed position of "ARTICLE N°07 - Empêchement - Absence - Maladie ou accident" title
const articleN07TitleYPos = textYPos5; // Start right after the previous text
doc.setFontSize(15);
doc.setFont('helvetica', 'bold');
const wrappedArticleN07Title = doc.splitTextToSize(data[7].title, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN07Title, 10, articleN07TitleYPos, { align: 'left' });

// Set the fixed position of "ARTICLE N°07 - Empêchement - Absence - Maladie ou accident" text content
const articleN07TextYPos = articleN07TitleYPos + wrappedArticleN07Title.length * 15 - 5; // Adjust the Y position as needed
doc.setFontSize(10);
doc.setFont('helvetica', 'normal');
const wrappedArticleN07Text = doc.splitTextToSize(data[7].text, doc.internal.pageSize.getWidth() - 20);
doc.text(wrappedArticleN07Text, 10, articleN07TextYPos, { align: 'left' });

// Update the starting Y positions for the loop
let titleYPos6 = articleN07TextYPos + wrappedArticleN07Text.length * 10 + 28.35; // Set the starting Y position of titles with a distance of 2 cm
let textYPos6 = titleYPos6 + 28.35;

data.slice(5).forEach((item, index) => {
  // Add a new page if necessary
  if (textYPos3 > doc.internal.pageSize.getHeight() - 40) {
    doc.addPage();
    titleYPos3 = 40;
    textYPos3 = 47;
  }

  // Add the title
  doc.setFontSize(15);
  doc.setFont('helvetica', 'bold');
  const wrappedTitle = doc.splitTextToSize(item.title, doc.internal.pageSize.getWidth() - 20);
  doc.text(wrappedTitle, 10, titleYPos3, { align: 'left' });

  // Add the text
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const wrappedText = doc.splitTextToSize(item.text, doc.internal.pageSize.getWidth() - 20);
  
  // Calculate the line heights for title and text
  const titleHeight = wrappedTitle.length * 15 ;
  const textHeight = wrappedText.length * 10 - 93;

  // Determine the larger of the two line heights
  const lineHeight = Math.max(titleHeight, textHeight);

  // Update Y positions for the next iteration
  titleYPos3 += lineHeight + 18.35;
  textYPos3 = titleYPos3 - titleHeight ; // Adjust the spacing between title and text
  
  // Add the text
  doc.text(wrappedText, 10, textYPos3, { align: 'left' });
});




// Save the PDF
doc.save(fileName);


}}
