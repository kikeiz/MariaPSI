import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private scrollService: ScrollService) { }
  ngOnDestroy(): void {
    this.scrollService.homeComponentActive(false)

  }

  ngOnInit(): void {
    this.scrollService.homeComponentActive(true)
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d')
    context.beginPath();
    context.arc(25, 5, 20, 0, Math.PI, false);
    context.closePath();
    context.lineWidth = 1.5;
    context.fillStyle = 'rgb(196,186,167)';
    context.fill();
    context.strokeStyle = 'black';
    context.stroke();
    
  }

}
