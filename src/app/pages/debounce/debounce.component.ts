import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {

  click = fromEvent(document.getElementsByTagName('div'), 'click');

  ngOnInit(): void {
    interval(1000).pipe(debounce(v => interval(2000))).subscribe(d => console.log(d));

    // this.click.pipe(debounce(v => interval(1500))).subscribe(d => console.log('work!'))
    // this.click.pipe(debounceTime(1500)).subscribe(d => console.log('work!'))
  }
 
}
