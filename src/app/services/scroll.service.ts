import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private bottomScroll = new BehaviorSubject<any>(null);
  public _bottomScroll = this.bottomScroll.asObservable();

  constructor() { }


  setBottomScroll(bottom: boolean): void {
    this.bottomScroll.next(bottom);
  }
}
