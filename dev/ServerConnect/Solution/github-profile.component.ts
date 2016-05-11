import {Component, OnInit } from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import {GithubService} from'./github.service'

@Component({
    selector:'github-profile',
    styles:[
        `
            .avatar{
                width: 100;
                height: 100;
                border-radius: 50%;
            }
        `
    ],
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h2>@{{ user.login }}</h2>
        <img class="avatar" src="{{ user.avatar_url }}">
        
        <h3>Followers</h3>
        <div *ngFor="#follower of followers" class="media">
            <div class="media-left">
                <a href="#">
                <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>
    `
    ,
    providers:[GithubService, HTTP_PROVIDERS]
})

export class GithubProfileComponent implements OnInit{
    isLoading = true;
    username = "johnpapa";
    user = {};
    followers = [];
    
    constructor(private _gitHubService:GithubService){        
    }
    
    ngOnInit(){
        Observable.forkJoin(
            this._gitHubService.getUser(this.username),
            this._gitHubService.getFollowers(this.username)
        )
        .subscribe(
            res => {
                this.user = res[0];
                this.followers = res[1];
            },
            null,
            () => {this.isLoading = false; })
    }
}