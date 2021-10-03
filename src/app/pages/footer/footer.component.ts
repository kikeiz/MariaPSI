import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public home: boolean = false
  constructor(private router: Router, private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService._homeComponent.subscribe((event: boolean)=>{
      this.home = event
    })
  }

  goTo(to:string){
    this.router.navigate([to])
    
  }
}
