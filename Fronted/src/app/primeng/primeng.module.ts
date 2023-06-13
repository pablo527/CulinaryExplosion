import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
 exports: [ButtonModule,InputTextModule,CarouselModule]
})
export class PrimengModule { }
