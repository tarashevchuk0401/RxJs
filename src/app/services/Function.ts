import { Observable } from "rxjs";

export function functionObs(){
    console.log('fn call');
    return '1';
}

export const funcObservable = new Observable (observer=> {
    console.log("observer call");
    observer.next('1')
    observer.next('2')
})