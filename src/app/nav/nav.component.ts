import { Component, OnInit,Input } from '@angular/core';//input passible to move data between two componnets

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input() text:string;
@Input() url:string;
  constructor() { }

  ngOnInit() {
  }

}
