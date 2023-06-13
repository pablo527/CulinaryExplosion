import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarouselService } from './restaurants/service/carousel.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaleryService } from './restaurants/service/galery/galery.service';
import {GalleriaModule} from 'primeng/galleria';
import {RatingModule} from 'primeng/rating';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    GalleriaModule,
    RatingModule
    
  ],
  providers: [CarouselService, GaleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
