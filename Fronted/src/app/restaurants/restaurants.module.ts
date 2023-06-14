import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { RestImagePipe } from './pipes/rest-image.pipe';
import { CarouselModule } from 'primeng/carousel';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { TextLimitDirective } from 'src/app/directive/text-limit.directive';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RestaurantPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    CardComponent,
    RestImagePipe,
    CategoriesComponent,
    TextLimitDirective
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MaterialModule,
    CarouselModule,
    NgbCarouselModule,
    PrimengModule,
    SharedModule,
    GalleriaModule,
    CardModule,
    ButtonModule,
    RatingModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class RestaurantsModule { }
