import { GithubFollowerService } from './../services/github-follower/github-follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followersArray: any[];
  private url = 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private githubService: GithubFollowerService) { }

  ngOnInit() {

    this.githubService.getAllFollowers(this.url)
    .subscribe(
      response => {
        this.followersArray = response;
        //console.log(response);
      }
    );
  }

}
