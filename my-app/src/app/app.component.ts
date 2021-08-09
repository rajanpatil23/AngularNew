import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class MyComponent {
  title = 'Hello Angular...!';

  products = [
    { prodId: 1001, prodName: 'Mobile' },
    { prodId: 1002, prodName: 'Laptop' },
    { prodId: 1003, prodName: 'Books' },
  ];
}
