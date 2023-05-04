import { Component, OnInit } from '@angular/core';
import { audit, interval } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(audit(val => interval(2000))).subscribe(d => console.log(d))
  }

}
