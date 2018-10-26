import { Component, OnChanges, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'app';
  arr = [3, 7, 8, 2, 1];
  ngOnChanges() {
    console.log("onchange");
  }

  ngOnInit() {
    console.log("oninit");
  }




}
