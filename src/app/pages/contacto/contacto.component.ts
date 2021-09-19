import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public options: any;
  public overlays: any;
  public showQuestions: boolean = false
  
  lat = 40.43467955
  lng = -3.71490270979186
  zoom = 17;

  public checked: boolean = false

  constructor() { }

  faEnvelope = faEnvelope;

  ngOnInit(): void {
    
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };

    AOS.init({duration: 1200})

  }

}
