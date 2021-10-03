import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  //Bottom scroll
  private bottomScroll = new BehaviorSubject<any>(null);
  public _bottomScroll = this.bottomScroll.asObservable();

  //Home component
  private homeComponent = new BehaviorSubject<any>(null);
  public _homeComponent = this.bottomScroll.asObservable();

  constructor() { }


  setBottomScroll(bottom: boolean): void {
    this.bottomScroll.next(bottom);
  }
  
  homeComponentActive(home: boolean): void {
    this.bottomScroll.next(home);
  }
}
