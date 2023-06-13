import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PagesComponent } from './pages/error404-pages/error404-pages.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    Error404PagesComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      Error404PagesComponent,
      LogoComponent
  ]
})
export class SharedModule { }
