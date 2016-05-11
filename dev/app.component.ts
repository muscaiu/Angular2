import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'
import {NgIfComponent} from './ngif.component'
import {NgSwitchComponent} from'./ngswitch.component'
import {NgForComponent} from './ngfor.component'
import {PipesComponent} from'./pipes.component'
import {FavoriteComponent} from './favorite.component'
import {NgStyleComponent} from './ngstyle.component'
import {ElvisOperatorComponent} from'./elvisoperator.component'
import {NgContentComponent} from './ngcontent.component'
import {ZippyComponent} from'./zippy.component'
import {ContactFormComponent} from './contact-form.component'
import {SubscriptionFormComponent} from'./subscription-form.component'
import {SignupFormComponent} from './signup-form.component'
import {ObservablesComponent} from './Observables/observables.component'
//(94) Connecting to Server we must import also HTTP_PROVIDERS
import {PostService} from './ServerConnect/post.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {OnInit} from 'angular2/core'
import {GithubProfileComponent} from './ServerConnect/Solution/github-profile.component'

@Component({
    selector: 'my-app',
    template: `    
    <hr>
    <github-profile> </github-profile>
    <hr>
    <observables></observables>
    <hr>
    <signup-form> </signup-form>
    <hr>
    <subscription-form> </subscription-form>
    <hr>
    <contact-form></contact-form>
    <hr>
    <zippy title="Who can see my stuff?">
        Content of who can see my stuff
    </zippy>
    <zippy title="Who can contact me?">
        Content of who can concact me
    </zippy>    
    <hr>
        <ngcontent>
            <div class="heading">This is from appcomponent</div>
            <div class="body">This is from appcomponent</div>
            <div class="body">This is another body from app component</div>            
        </ngcontent>
    <hr>
        <elvisoperator> </elvisoperator>
    <hr>
        <ngstyle> </ngstyle>
    <hr>
        <favorite> </favorite>
    <hr>
        <pipes> </pipes>
    <hr>
        <ngfor> </ngfor>
    <hr>    
        <ngswitch></ngswitch>
    <hr>    
        <ngif class="container"></ngif>
    <hr>
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>    
    `
    ,directives:[
        TweetComponent,
        NgIfComponent, 
        NgSwitchComponent, 
        NgForComponent,
        PipesComponent,
        FavoriteComponent,
        NgStyleComponent,
        ElvisOperatorComponent,
        NgContentComponent, 
        ZippyComponent,
        ContactFormComponent, 
        SubscriptionFormComponent,
        SignupFormComponent,
        ObservablesComponent,
        GithubProfileComponent]
    ,providers:[
        TweetService, 
        //(94.4)We have to impost PostService and all it's services like Http 
        PostService,HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {     
    tweets;
     //(97 Showing Loader Icon)
    isLoading = true;
    //(94.3 inect the service into the constructor after importing it up)
    constructor(private _postService:PostService, tweetService: TweetService){
      //the data here need to be like the interface in Post.ts
      //this._postService.createPost({userId:1, title:"a", body:"b"});
      this.tweets = tweetService.getTweets();       
    }
    //(95.1) ngOnInit is used to call the server
    ngOnInit(){
        //(94.5)Using the Service
        this._postService.getPosts()
            //(96)to get intellisense for post.ts
            .subscribe(posts =>{
              this.isLoading = false;
              console.log(posts[1].title)
            });  
    }
}