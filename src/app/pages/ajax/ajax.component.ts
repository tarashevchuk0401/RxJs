import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  ngOnInit(): void {
    ajax<any>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(item => {
      console.log(typeof item);
      let post = []
      for (let p of item.response){
        console.log(p)
        post.push(p);
      }
      return post
      
      })
    ).subscribe(
      d => console.log(d)
    )
  }

}
