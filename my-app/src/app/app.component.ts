import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class MyComponent {
  title = 'Hello Angular...!';

  products = ['Mobile', 'Laptop', 'Books'];
}
