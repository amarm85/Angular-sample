import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  inp: any;
  formatedText = '';

  _keyUp($event) {
    let spaceStart = false;
    console.log($event);
    if ($event.key === ' ') {
      spaceStart = true;
    } else { spaceStart = false; }

    if (spaceStart) {
      this.formatedText = this.formatedText + $event.key.toUpperCase();
    } else {
      this.formatedText = this.formatedText + $event.key.toLowerCase();
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
