import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval, tap } from 'rxjs';

@Component({
  selector: 'app-bufferwhen',
  templateUrl: './bufferwhen.component.html',
  styleUrls: ['./bufferwhen.component.css']
})
export class BufferwhenComponent implements OnInit {

  ngOnInit(): void {
    
    interval(500).pipe(
      tap(() => console.log('a')),
      bufferWhen(() => {
        return interval(1000 + Math.random() * 10000)
      })
    ).subscribe(d => console.log(d))
  }
}
