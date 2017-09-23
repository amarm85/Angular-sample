import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
        
    ShippingDetails = 'Shipping Details';
    courses;
    onAdd() {

        this.courses.push({ id: 4, name: 'course 4' });
    }


     task = {
         
        title:'Review Application',
         assignee: null
     }   ;

    onLoad() {
        this.courses = [
            { id: 1, name: 'course 1' },
            { id: 2, name: 'course 2' },
            { id: 3, name: 'course 3' }
        ]

    }
    
    trackCourse(index,course){
        
        return course ? course.id:undefined;
        
    }
    
    post = {
        title: 'Some post here',
        isFavorite: false
    };
    
    onFavoriteChange(given) {
        console.log('is Favorite ' + given.newValue);
    }

    /*
    viewMode = 'maps';

    courses = [1, 2];

    title = 'This is sample app';
    
    twite = {
        text: 'This is sample twite',
        numberOfLikes: 30,
        isliked: true
    };

    
    */
}
