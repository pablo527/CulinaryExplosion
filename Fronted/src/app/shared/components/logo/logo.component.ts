import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  constructor() { }
  @Input() color : string = '#CE1616'
  @Input() height : string = '100'
  @Input() width : string = '100'

  ngOnInit(): void {
  }

}
