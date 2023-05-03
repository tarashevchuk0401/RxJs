import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, interval, fromEvent, buffer, take, tap, bufferCount, bufferTime, bufferToggle } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit, AfterViewInit{

  intervalData: number[] = [];
  showData$!: Observable<Event> 

  ngOnInit(): void {
    // interval(1000).pipe(
    //   bufferTime(2000)
    // ).subscribe(d => {
    //   console.log('bufferTime ' + d)
    // })
  }



  ngAfterViewInit(): void {
    this.showData$ = fromEvent(document.getElementById('showDataNow')!, 'click')
  }

  toggle(){

    let opening = interval(600).pipe(tap(() => console.log('open')));
    let clothing = () => interval(100).pipe(tap(() => console.log('cloth')))
    interval(100).pipe(
      tap((d) => console.log(d)),
      bufferToggle(opening, clothing),
      take(3)
    ).subscribe(d => console.log(d))
  }

  startInterval() {
    interval(1000).pipe(
      tap(d => console.log(d)),
      bufferCount(4, 3),
      // take(2)
    ).subscribe((d: number[]) => {
      this.intervalData.push(...d);
      // console.log(this.intervalData)
    })
  }

  


}
