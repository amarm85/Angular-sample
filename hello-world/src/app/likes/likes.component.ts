import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input('numberOfLikes') numberOfLikes: number;
  @Input('isLiked') isLiked: boolean;

  userLikedIt() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.numberOfLikes++;
    } else {
      this.numberOfLikes--;
    }


  }

  constructor() { }

  ngOnInit() {
  }

}
