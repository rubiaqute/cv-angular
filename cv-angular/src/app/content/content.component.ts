import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],

})
export class ContentComponent implements OnInit {

code=`function flip(fn) {
  return (...args) => fn.apply(this, args.reverse());
}`
  constructor() { }
  ngOnInit(): void {
  }

}
