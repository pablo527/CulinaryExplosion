import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
PrimeIcons
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categorias = [
    { name: 'Gourtmet', icon: PrimeIcons.AMAZON },
    { name: 'Mexicana', icon: PrimeIcons.ANDROID},
    { name: 'Tipica', icon: PrimeIcons.APPLE },
    { name: 'Comida Rapida', icon: PrimeIcons.BITCOIN}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
