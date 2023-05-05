import { Component, OnInit } from '@angular/core';
import { interval, of, single } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit  {


  ngOnInit(): void {
    of(6).pipe(
      single(value => value > 5)).subscribe(
      d => console.log(d),
     error => console.log('errrr single'),
     () => console.log('single done!')
      )
  }
}
