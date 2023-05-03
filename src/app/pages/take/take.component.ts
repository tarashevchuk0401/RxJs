import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, fromEvent, interval, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit, AfterViewInit {

  buttonEvent! : Observable<Event>;
  seconds$ = interval(1000);
  counter: number = 0;

  ngOnInit(): void {
    this.seconds$.pipe(
      takeWhile(x => x < 5)
    ).subscribe(d => {
    
      console.log(d)
    
    })

  }

  ngAfterViewInit(): void {
 
  }

  // init(){
  //   this.buttonEvent = fromEvent(document.querySelector('takeUntil')!, 'click')
  // } 
  
  startTimer(){
    interval(500).pipe(
      takeUntil(this.buttonEvent)
    ).subscribe(d => console.log(d))
  }

}
