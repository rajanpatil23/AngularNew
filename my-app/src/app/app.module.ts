import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';

// mod start

@NgModule({
  declarations: [MyComponent, NavComponent, BannerOneComponent],
  imports: [BrowserModule], // ____Module
  bootstrap: [MyComponent], // to run root compo
})
export class MyModule {}
// mod end
