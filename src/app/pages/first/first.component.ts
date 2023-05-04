import { Component, OnInit } from '@angular/core';
import { first, interval, of } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  ngOnInit(): void {
    of(1, 2, 3 ,4).pipe(first(d => d % 5 === 0)).subscribe(d => {
      console.log(d)
    },
      error => { console.log(error) }
    )
  }
}
