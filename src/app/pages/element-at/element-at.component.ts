import { Component, OnInit } from '@angular/core';
import { elementAt, interval, of } from 'rxjs';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.css']
})
export class ElementAtComponent implements OnInit {

  ngOnInit(): void {
    of(1, 2, 3).pipe(elementAt((1), 'er')).subscribe(d => console.log(d))
  }

}
