import { AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, skip, skipLast, take, tap, fromEvent, Observable, skipUntil } from 'rxjs';

type NewType = Event;

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit, AfterViewInit {

  buttonEvent!: Observable<NewType>;
  counter : number = 0;
  intervalsss = interval(1000)
  intervalO = this.intervalsss.pipe(
    take(3)
  ).subscribe()

  startTimer() {
    interval(1000).pipe(
      take(3)
    ).subscribe(d => this.counter = d)
  }



  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.buttonEvent! =  fromEvent(document.getElementById('skipUntil')!, 'click')

    // interval(500).pipe(skipUntil(this.intervalO)).subscribe(data => console.log(data))

  }


  skip() {
    interval(1000).pipe(
      skip(2)
    ).subscribe(d => console.log(d))
  }
  skipLast() {
    interval(1000).pipe(
      tap((d) => console.log('tap== ' + d)),
      take(8),
      skipLast(5)
    ).subscribe(d => console.log(d))
  }

  skipUntil() {

  }
}
