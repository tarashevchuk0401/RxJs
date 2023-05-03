import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  templateUrl: './cancelling-observable.component.html',
  styleUrls: ['./cancelling-observable.component.css']
})
export class CancellingObservableComponent implements OnInit {

  ngOnInit(): void {
    // const newObservable$ = new Observable(observer => {
    //   let i = 0;
    //   setTimeout(() => {
    //     console.log("imterval executing")
    //     observer.next(i++)
    //   },1000);
    // });
  
  
  }

}
