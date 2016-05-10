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

@Component({
    selector: 'my-app',
    template: `
    
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
        ObservablesComponent]
    ,providers:[TweetService]
})
export class AppComponent {
     
    tweets;
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}