import { AfterViewInit, Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { funcObservable, functionObs } from './services/Function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'rxjsExercise';

  postArray = [
    {titel: 'Leela1', description: 'descr1'},
    {titel: 'Leela2', description: 'descr2'},
    {titel: 'Leela3', description: 'descr3'},
    {titel: 'Leela4', description: 'descr4'},
  ]

  postArrayObservable$ = from(this.postArray.map(item => item));

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolving'),
      reject('nooo')
    })
  })

  promiseObservable$ = from(this.promise)

  constructor(){
    // this.postArrayObservable$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete:() => console.log('done')
    // })

    // this.promiseObservable$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (d) => console.log(d + 'err')
    // })
    // console.log('before fn')
    // console.log(functionObs())
    // console.log(functionObs())
    // console.log('after fn')
    // console.log('__________');

    // // console.log(funcObservable())

    // funcObservable.subscribe(d => console.log(d))
    // funcObservable.subscribe(d => console.log(d))
    // console.log('__________');

  }

  ngAfterViewInit(): void {
    // fromEvent(document.getElementById('clickButton')!, 'click').subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete:() => console.log('AFTER V')
    // })
  }


}
