import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 使用表单元素要引入该包

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';


/**
 * @description 定义AppModule，根模块为 Angular 描述如何组装应用。
 * 目前，它只声明了AppComponent。 不久，它将声明更多组件。
 * @exp,
    HeroesComponentort
 * @class AppModule
 */
@NgModule({
  // 每个组件都必须声明在（且只能声明在）一个 NgModule 中。
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  // 该应用所需外部模块的列表。
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
