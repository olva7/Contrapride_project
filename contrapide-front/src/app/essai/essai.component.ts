import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
//import 'jspdf-autotable';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.scss']
})
export class EssaiComponent implements OnInit {
  images = [{
    name: "Image 1", url:"https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg"
  },
  {
    name:"Image 2",
    url:"https://akm-img-a-in.tosshub.com/indiatoday/559_102017023826.jpg?TZlWXro5W8Rj4VbO.MpENgo1F2MX93j"
  }]


    items = {
      "Name" : "XYZ",
      "Age" : "22",
      "Gender" : "Male"
      
    };

  ngOnInit() {

  }
  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  




  download() {
    let doc = new jsPDF();
    var col = ["Fields", "Inputs"];
    var rows = [];
  
    for (var i = 0; i < this.images.length; i++) {
      let imgElement = document.getElementById('img' + i) as HTMLImageElement;
      let imageData = this.getBase64Image(imgElement);
      console.log(imageData);
  
      doc.addImage(imageData, "JPG", 10, (i + 1) * 10, 180, 150);
      doc.addPage();
    }
  
    doc.save('FirstPdf.pdf');


   
    //doc.save('Test.pdf');
  }

}
