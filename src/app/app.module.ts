import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


/**
 * @description 定义AppModule，根模块为 Angular 描述如何组装应用。 
 * 目前，它只声明了AppComponent。 不久，它将声明更多组件。
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
