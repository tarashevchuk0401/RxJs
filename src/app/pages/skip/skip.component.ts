import { Component, OnInit } from '@angular/core';
import { interval, skip } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent  implements OnInit{

  ngOnInit(): void {

  }

  skip(){
    interval(1000).pipe(
      skip(2)
    ).subscribe(d => console.log(d))
  }
}
