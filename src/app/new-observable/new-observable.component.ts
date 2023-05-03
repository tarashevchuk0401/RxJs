import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Observer4 } from '../services/Observer4';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent extends Observer4  implements OnInit{

  ngOnInit(): void {
    const newObservable$ = new Observable<number>(observer => {
      // for(let i = 1; i < 0; i++){
      //  setTimeout(() => {
      //   observer.next(i);
      //  },500)
      //   if(i = 6){
      //     observer.error('!= 6546')
      //   }
      // }
      observer.next(123);
      observer.error('eerrr!!')
      observer.complete()
    })

    let observer = {
      next: (data: number) => console.log('obser(1) ' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log('complete')
    }

    // newObservable$.subscribe(observer);

    //////////////// ______  OR ____________  //////////

    // newObservable$.pipe(take(3)).subscribe({
    //   next: (data: number) => console.log('obser(2) ' + data),
    //   error: (error: string) => console.log(error),
    //   complete: () => console.log('complete')
    // })
    
    // newObservable$.subscribe(new Observer4())
  }

}
