import { Component, OnInit } from '@angular/core';
import { last, of } from 'rxjs';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  ngOnInit(): void {
    of(1, 2, 3, 55).pipe(last(d => d % 2 === 1)).subscribe(d => console.log(d))
  }

}
