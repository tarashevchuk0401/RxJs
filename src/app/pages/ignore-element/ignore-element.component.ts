import { Component, OnInit } from '@angular/core';
import { ignoreElements, interval, take } from 'rxjs';

@Component({
  selector: 'app-ignore-element',
  templateUrl: './ignore-element.component.html',
  styleUrls: ['./ignore-element.component.css']
})
export class IgnoreElementComponent implements OnInit{

  ngOnInit(): void {
    interval(1000).pipe(
      take(5),
      ignoreElements()
      )
      .subscribe(d => {console.log(d)},
      error => console.log(error),
      () => console.log('complete')
      )
  }

}
