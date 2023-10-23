import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  ProductName:string = "Phone";
  ProductImage:string = "assets/images/3.jpg";
  ProductDescrpition:string = "This is Hello message from a phone"


}
