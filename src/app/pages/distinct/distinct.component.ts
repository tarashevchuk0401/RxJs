import { Component, OnInit } from '@angular/core';
import { distinct, distinctUntilKeyChanged, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent implements OnInit{

  ngOnInit(): void {
    of(1,2, 2 ,3, 3, 4, 5).pipe(
      distinct()
    ).subscribe(d => console.log(d))
  }

  distinctUntillKeyChanges(){
    let employees = [
      {id:1, name: 'taras'},
      {id:2, name: 'taras'},
      {id:3, name: 'ivan'},
      {id:1, name: 'petro'},
    ];

    from(employees).pipe(distinctUntilKeyChanged('name')).subscribe(d => console.log(d))
  }

}
 