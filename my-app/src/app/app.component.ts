import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class MyComponent {
  title = 'Hello Angular...!';

  products = [
    {
      prodId: 1001,
      prodName: 'Mobile',
      inStock: 100,
      country: 'India',
      isVeg: true,
      showClass: false,
    },
    {
      prodId: 1002,
      prodName: 'Laptop',
      inStock: 1234,
      country: 'Germany',
      isVeg: false,
      showClass: true,
    },
    {
      prodId: 1003,
      prodName: 'Books',
      inStock: 0,
      country: '',
      isVeg: true,
      showClass: true,
    },
  ];

  calc() {
    let totProds = 0;
    for (let product of this.products) {
      totProds = totProds + product.inStock;
    }
    return totProds;
  }
}

// Bootstrap
