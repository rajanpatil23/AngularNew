import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyComponent } from './app.component';

// mod start

@NgModule({
  declarations: [MyComponent],
  imports: [BrowserModule], // ____Module
  bootstrap: [MyComponent], // to run root compo
})
export class MyModule {}
// mod end
