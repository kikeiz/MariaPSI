import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }
  

  public color: string = 'color-1'
  public height: string = '150px'
  public display: boolean = true
  public noHeaderMovement:boolean = false


  @HostListener('window:scroll', ['$event'])
  items: MenuItem[];

  ngOnInit() {    
    this.scrollService._homeComponent.subscribe((event: boolean)=>{
      this.noHeaderMovement = event
    })
      this.items = [
          {
            label: 'Sobre mí',
            routerLink: 'sobremi'
          },
          {
            label: 'Terapias',
            routerLink: 'psicoterapia'
          },
          {
            label: 'Contacto',
            routerLink: 'contacto'
          }
      ];
  }

  onWindowScroll($event:Event) {
    if(document.documentElement.scrollTop + document.documentElement.offsetHeight == document.documentElement.scrollHeight + 16)
      this.scrollService.setBottomScroll(true)
      
    let header = document.querySelector('.header') as HTMLElement;
    let element = document.querySelector('.element') as HTMLElement;
    let element2 = document.querySelector('.menu') as HTMLElement;

    let height_difference: number = window.pageYOffset - element.clientHeight

  
    
    if(height_difference === 0 || this.noHeaderMovement){      
      header.classList.replace(this.color, 'color-1')
      element2.classList.remove('white')
      this.height = '150px'
      return this.color = 'color-1'
    }



    //COLOR CONTROL
    if (height_difference > 0 && height_difference < 5) { 
      header.classList.replace(this.color, 'color-2')
      element2.classList.remove('white')
      this.color = 'color-2'
      this.height = '150px'

    } else if(height_difference >= 5 && height_difference < 10) {
      header.classList.replace(this.color, 'color-3')
      element2.classList.remove('white')
      this.color = 'color-3'
      this.height = '149px'

    }else if(height_difference >= 10 && height_difference < 15){
      header.classList.replace(this.color, 'color-4')
      element2.classList.remove('white')
      this.color = 'color-4'
      this.height = '148px'


    }else if(height_difference >= 15 && height_difference < 20){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-5')
      this.color = 'color-5'
      this.height = '147px'

    }else if(height_difference >= 20 && height_difference < 25){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-6')
      this.color = 'color-6'
      this.height = '146px'

    }else if(height_difference >= 25 && height_difference < 30){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-7')
      this.color = 'color-7'
      this.height = '145px'

    }else if(height_difference >= 30 && height_difference < 35){
      header.classList.replace(this.color, 'color-8')
      this.color = 'color-8'
      this.height = '144px'

    }else if(height_difference >= 35 && height_difference < 40){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-9')
      this.color = 'color-9'
      this.height = '143px'

    }else if(height_difference >= 40 && height_difference < 45){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-10')
      this.color = 'color-10'
      this.height = '142px'

    }else if(height_difference >= 45 && height_difference < 50){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-11')
      this.color = 'color-11'
      this.height = '141px'

    }else if(height_difference >= 50 && height_difference < 55){
      element2.classList.remove('white')
      header.classList.replace(this.color, 'color-12')
      this.color = 'color-12'
      this.height = '140px'

    }else if(height_difference >= 55 && height_difference < 60){
      header.classList.replace(this.color, 'color-13')
      this.color = 'color-13'
      this.height = '139px'

    }else if(height_difference >= 60 && height_difference < 65){
      header.classList.replace(this.color, 'color-14')
      this.color = 'color-14'
      this.height = '138px'

    }else if(height_difference >= 65 && height_difference < 70){
      header.classList.replace(this.color, 'color-15')
      this.color = 'color-15'
      this.height = '137px'

    }else if(height_difference >= 70 && height_difference < 75){
      header.classList.replace(this.color, 'color-16')
      this.color = 'color-16'
      this.height = '136px'

    }else if(height_difference >= 75 && height_difference < 80){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '135px'


    }else if(height_difference >= 80 && height_difference < 85){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '134px'


    }else if(height_difference >= 85 && height_difference < 90){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '133px'


    }else if(height_difference >= 90 && height_difference < 95){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '132px'


    }else if(height_difference >= 95 && height_difference < 100){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '131px'


    }else if(height_difference >= 100 && height_difference < 105){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '130px'

    }else if(height_difference >= 105 && height_difference < 110){
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '129px'
    }else{
      header.classList.replace(this.color, 'color-17')
      this.color = 'color-17'
      this.height = '128px'

    }


    

  }
}


