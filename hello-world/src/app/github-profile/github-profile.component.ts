import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

    private username: string;
    private id: number;

    constructor(private activatedRoute: ActivatedRoute, private router: Router ) { }

     ngOnInit(){ 

    console.log('GithubProfileComponent onInit');
      
    this.activatedRoute.paramMap.subscribe(

    params => {
        this.username = params.get('username');
        this.id = +params.get('id');
    }
); 
 }

submit(){
        
    this.router.navigate(['/followers'], { queryParams: { page: 1, order: 'newest' } });
}



}