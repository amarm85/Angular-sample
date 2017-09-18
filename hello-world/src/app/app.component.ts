import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is sample app';
  post = {
    title: 'Some post here',
    isFavorite: false
  };

  twite = {
    text: 'This is sample twite',
    numberOfLikes: 30,
    isliked: true
  };

  onFavoriteChange(given) {
    console.log('is Favorite ' + given.newValue);
  }
}
