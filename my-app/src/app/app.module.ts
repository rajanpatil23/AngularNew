import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { ProductsComponent } from './layout/products/products.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';

// mod start

@NgModule({
  declarations: [
    MyComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    ContactUsComponent,
    FooterComponent,
    BannerTwoComponent,
    BannerThreeComponent,
  ],
  imports: [BrowserModule], // ____Module
  bootstrap: [MyComponent], // to run root compo
})
export class MyModule {}
// mod end
