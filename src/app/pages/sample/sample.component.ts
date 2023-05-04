import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, sample, merge, mapTo } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit{

  ngOnInit(): void {
    interval(500).pipe(sample(interval(2000))).subscribe(d => console.log(d))
  }

   listener = merge(
    fromEvent(document, 'mousedown').pipe(mapTo(false)),
    fromEvent(document, 'mousemove').pipe(mapTo(true))
  )
    .pipe(sample(fromEvent(document, 'mouseup')))
    .subscribe(isDragging => {
      console.log('Were you dragging?', isDragging);
    });

}
