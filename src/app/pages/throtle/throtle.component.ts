import { Component, OnInit } from '@angular/core';
import { interval, throttle } from 'rxjs';

@Component({
  selector: 'app-throtle',
  templateUrl: './throtle.component.html',
  styleUrls: ['./throtle.component.css']
})
export class ThrotleComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(throttle(v => interval(4000), {leading: false, trailing: true})).subscribe(d => console.log(d))
  }

}
