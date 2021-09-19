import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({duration: 1000})

  }

}
