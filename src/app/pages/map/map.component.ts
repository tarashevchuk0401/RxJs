import { Component, OnInit } from '@angular/core';
import { interval, map, mapTo } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    // interval(1000).pipe(map(item => item + ': escunds')).subscribe(d => console.log(d))
  }

  mapTo (){
    interval(1000).pipe(mapTo(' map timer ')).subscribe(d => console.log(d));
  }

}
