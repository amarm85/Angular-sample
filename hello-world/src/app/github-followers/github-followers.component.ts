import { GithubFollowerService } from './../services/github-follower/github-follower.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

    followersArray: any[];
    private url = 'https://api.github.com/users/mosh-hamedani/followers';

    constructor(private githubService: GithubFollowerService, private route: ActivatedRoute) { }

    ngOnInit() {

        Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .switchMap(combined => {
                console.log(combined);
                return this.githubService.getAllFollowers(this.url);      

            })
            .subscribe(followers => {this.followersArray = followers; });
            
  

    }

}
