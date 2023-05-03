import { Component, OnInit } from '@angular/core';
import { filter, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-operators-basics',
  templateUrl: './operators-basics.component.html',
  styleUrls: ['./operators-basics.component.css']
})
export class OperatorsBasicsComponent implements OnInit {

  ngOnInit(): void {
    const newObservable$ = interval(1000);

    newObservable$.pipe(
      filter(number => number % 2 === 0 ),
      map((item: number) => item + ' sec')
      )
      .subscribe((number) => {
      console.log(number)
    });



  }
}
