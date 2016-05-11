System.register(['angular2/core', './tweet.component', './tweet.service', './ngif.component', './ngswitch.component', './ngfor.component', './pipes.component', './favorite.component', './ngstyle.component', './elvisoperator.component', './ngcontent.component', './zippy.component', './contact-form.component', './subscription-form.component', './signup-form.component', './Observables/observables.component', './ServerConnect/post.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweet_component_1, tweet_service_1, ngif_component_1, ngswitch_component_1, ngfor_component_1, pipes_component_1, favorite_component_1, ngstyle_component_1, elvisoperator_component_1, ngcontent_component_1, zippy_component_1, contact_form_component_1, subscription_form_component_1, signup_form_component_1, observables_component_1, post_service_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (ngif_component_1_1) {
                ngif_component_1 = ngif_component_1_1;
            },
            function (ngswitch_component_1_1) {
                ngswitch_component_1 = ngswitch_component_1_1;
            },
            function (ngfor_component_1_1) {
                ngfor_component_1 = ngfor_component_1_1;
            },
            function (pipes_component_1_1) {
                pipes_component_1 = pipes_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (ngstyle_component_1_1) {
                ngstyle_component_1 = ngstyle_component_1_1;
            },
            function (elvisoperator_component_1_1) {
                elvisoperator_component_1 = elvisoperator_component_1_1;
            },
            function (ngcontent_component_1_1) {
                ngcontent_component_1 = ngcontent_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (subscription_form_component_1_1) {
                subscription_form_component_1 = subscription_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (observables_component_1_1) {
                observables_component_1 = observables_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //(94.3 inect the service into the constructor after importing it up)
                function AppComponent(_postService, tweetService) {
                    this._postService = _postService;
                    //the data here need to be like the interface in Post.ts
                    //this._postService.createPost({userId:1, title:"a", body:"b"});
                    this.tweets = tweetService.getTweets();
                }
                //(95.1) ngOnInit is used to call the server
                AppComponent.prototype.ngOnInit = function () {
                    //(94.5)Using the Service
                    this._postService.getPosts()
                        .subscribe(function (posts) { return console.log(posts[1].title); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    \n    <hr>\n    <observables></observables>\n    <hr>\n    <signup-form> </signup-form>\n    <hr>\n    <subscription-form> </subscription-form>\n    <hr>\n    <contact-form></contact-form>\n    <hr>\n    <zippy title=\"Who can see my stuff?\">\n        Content of who can see my stuff\n    </zippy>\n    <zippy title=\"Who can contact me?\">\n        Content of who can concact me\n    </zippy>    \n    <hr>\n        <ngcontent>\n            <div class=\"heading\">This is from appcomponent</div>\n            <div class=\"body\">This is from appcomponent</div>\n            <div class=\"body\">This is another body from app component</div>            \n        </ngcontent>\n    <hr>\n        <elvisoperator> </elvisoperator>\n    <hr>\n        <ngstyle> </ngstyle>\n    <hr>\n        <favorite> </favorite>\n    <hr>\n        <pipes> </pipes>\n    <hr>\n        <ngfor> </ngfor>\n    <hr>    \n        <ngswitch></ngswitch>\n    <hr>    \n        <ngif class=\"container\"></ngif>\n    <hr>\n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>    \n    ",
                        directives: [
                            tweet_component_1.TweetComponent,
                            ngif_component_1.NgIfComponent,
                            ngswitch_component_1.NgSwitchComponent,
                            ngfor_component_1.NgForComponent,
                            pipes_component_1.PipesComponent,
                            favorite_component_1.FavoriteComponent,
                            ngstyle_component_1.NgStyleComponent,
                            elvisoperator_component_1.ElvisOperatorComponent,
                            ngcontent_component_1.NgContentComponent,
                            zippy_component_1.ZippyComponent,
                            contact_form_component_1.ContactFormComponent,
                            subscription_form_component_1.SubscriptionFormComponent,
                            signup_form_component_1.SignupFormComponent,
                            observables_component_1.ObservablesComponent],
                        providers: [
                            tweet_service_1.TweetService,
                            //(94.4)We have to impost PostService and all it's services like Http 
                            post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvRkE7Z0JBRUkscUVBQXFFO2dCQUNyRSxzQkFBb0IsWUFBd0IsRUFBRSxZQUEwQjtvQkFBcEQsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBQzFDLHdEQUF3RDtvQkFDeEQsZ0VBQWdFO29CQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCw0Q0FBNEM7Z0JBQzVDLCtCQUFRLEdBQVI7b0JBQ0kseUJBQXlCO29CQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt5QkFFdkIsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtnQkFDeEQsQ0FBQztnQkE5RUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLDRsQ0F5Q1Q7d0JBQ0EsVUFBVSxFQUFDOzRCQUNSLGdDQUFjOzRCQUNkLDhCQUFhOzRCQUNiLHNDQUFpQjs0QkFDakIsZ0NBQWM7NEJBQ2QsZ0NBQWM7NEJBQ2Qsc0NBQWlCOzRCQUNqQixvQ0FBZ0I7NEJBQ2hCLGdEQUFzQjs0QkFDdEIsd0NBQWtCOzRCQUNsQixnQ0FBYzs0QkFDZCw2Q0FBb0I7NEJBQ3BCLHVEQUF5Qjs0QkFDekIsMkNBQW1COzRCQUNuQiw0Q0FBb0IsQ0FBQzt3QkFDeEIsU0FBUyxFQUFDOzRCQUNQLDRCQUFZOzRCQUNaLHNFQUFzRTs0QkFDdEUsMEJBQVcsRUFBQyxxQkFBYyxDQUFDO3FCQUNsQyxDQUFDOztnQ0FBQTtnQkFnQkYsbUJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHVDQWVDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtUd2VldENvbXBvbmVudH0gZnJvbSAnLi90d2VldC5jb21wb25lbnQnXHJcbmltcG9ydCB7VHdlZXRTZXJ2aWNlfSBmcm9tICcuL3R3ZWV0LnNlcnZpY2UnXHJcbmltcG9ydCB7TmdJZkNvbXBvbmVudH0gZnJvbSAnLi9uZ2lmLmNvbXBvbmVudCdcclxuaW1wb3J0IHtOZ1N3aXRjaENvbXBvbmVudH0gZnJvbScuL25nc3dpdGNoLmNvbXBvbmVudCdcclxuaW1wb3J0IHtOZ0ZvckNvbXBvbmVudH0gZnJvbSAnLi9uZ2Zvci5jb21wb25lbnQnXHJcbmltcG9ydCB7UGlwZXNDb21wb25lbnR9IGZyb20nLi9waXBlcy5jb21wb25lbnQnXHJcbmltcG9ydCB7RmF2b3JpdGVDb21wb25lbnR9IGZyb20gJy4vZmF2b3JpdGUuY29tcG9uZW50J1xyXG5pbXBvcnQge05nU3R5bGVDb21wb25lbnR9IGZyb20gJy4vbmdzdHlsZS5jb21wb25lbnQnXHJcbmltcG9ydCB7RWx2aXNPcGVyYXRvckNvbXBvbmVudH0gZnJvbScuL2Vsdmlzb3BlcmF0b3IuY29tcG9uZW50J1xyXG5pbXBvcnQge05nQ29udGVudENvbXBvbmVudH0gZnJvbSAnLi9uZ2NvbnRlbnQuY29tcG9uZW50J1xyXG5pbXBvcnQge1ppcHB5Q29tcG9uZW50fSBmcm9tJy4vemlwcHkuY29tcG9uZW50J1xyXG5pbXBvcnQge0NvbnRhY3RGb3JtQ29tcG9uZW50fSBmcm9tICcuL2NvbnRhY3QtZm9ybS5jb21wb25lbnQnXHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uRm9ybUNvbXBvbmVudH0gZnJvbScuL3N1YnNjcmlwdGlvbi1mb3JtLmNvbXBvbmVudCdcclxuaW1wb3J0IHtTaWdudXBGb3JtQ29tcG9uZW50fSBmcm9tICcuL3NpZ251cC1mb3JtLmNvbXBvbmVudCdcclxuaW1wb3J0IHtPYnNlcnZhYmxlc0NvbXBvbmVudH0gZnJvbSAnLi9PYnNlcnZhYmxlcy9vYnNlcnZhYmxlcy5jb21wb25lbnQnXHJcbi8vKDk0KSBDb25uZWN0aW5nIHRvIFNlcnZlciB3ZSBtdXN0IGltcG9ydCBhbHNvIEhUVFBfUFJPVklERVJTXHJcbmltcG9ydCB7UG9zdFNlcnZpY2V9IGZyb20gJy4vU2VydmVyQ29ubmVjdC9wb3N0LnNlcnZpY2UnXHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnXHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBcclxuICAgIDxocj5cclxuICAgIDxvYnNlcnZhYmxlcz48L29ic2VydmFibGVzPlxyXG4gICAgPGhyPlxyXG4gICAgPHNpZ251cC1mb3JtPiA8L3NpZ251cC1mb3JtPlxyXG4gICAgPGhyPlxyXG4gICAgPHN1YnNjcmlwdGlvbi1mb3JtPiA8L3N1YnNjcmlwdGlvbi1mb3JtPlxyXG4gICAgPGhyPlxyXG4gICAgPGNvbnRhY3QtZm9ybT48L2NvbnRhY3QtZm9ybT5cclxuICAgIDxocj5cclxuICAgIDx6aXBweSB0aXRsZT1cIldobyBjYW4gc2VlIG15IHN0dWZmP1wiPlxyXG4gICAgICAgIENvbnRlbnQgb2Ygd2hvIGNhbiBzZWUgbXkgc3R1ZmZcclxuICAgIDwvemlwcHk+XHJcbiAgICA8emlwcHkgdGl0bGU9XCJXaG8gY2FuIGNvbnRhY3QgbWU/XCI+XHJcbiAgICAgICAgQ29udGVudCBvZiB3aG8gY2FuIGNvbmNhY3QgbWVcclxuICAgIDwvemlwcHk+ICAgIFxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxuZ2NvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+VGhpcyBpcyBmcm9tIGFwcGNvbXBvbmVudDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlRoaXMgaXMgZnJvbSBhcHBjb21wb25lbnQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5UaGlzIGlzIGFub3RoZXIgYm9keSBmcm9tIGFwcCBjb21wb25lbnQ8L2Rpdj4gICAgICAgICAgICBcclxuICAgICAgICA8L25nY29udGVudD5cclxuICAgIDxocj5cclxuICAgICAgICA8ZWx2aXNvcGVyYXRvcj4gPC9lbHZpc29wZXJhdG9yPlxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxuZ3N0eWxlPiA8L25nc3R5bGU+XHJcbiAgICA8aHI+XHJcbiAgICAgICAgPGZhdm9yaXRlPiA8L2Zhdm9yaXRlPlxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxwaXBlcz4gPC9waXBlcz5cclxuICAgIDxocj5cclxuICAgICAgICA8bmdmb3I+IDwvbmdmb3I+XHJcbiAgICA8aHI+ICAgIFxyXG4gICAgICAgIDxuZ3N3aXRjaD48L25nc3dpdGNoPlxyXG4gICAgPGhyPiAgICBcclxuICAgICAgICA8bmdpZiBjbGFzcz1cImNvbnRhaW5lclwiPjwvbmdpZj5cclxuICAgIDxocj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cIiN0d2VldCBvZiB0d2VldHNcIj5cclxuICAgICAgICAgICAgPHR3ZWV0IFtkYXRhXT1cInR3ZWV0XCI+PC90d2VldD5cclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICBgXHJcbiAgICAsZGlyZWN0aXZlczpbXHJcbiAgICAgICAgVHdlZXRDb21wb25lbnQsXHJcbiAgICAgICAgTmdJZkNvbXBvbmVudCwgXHJcbiAgICAgICAgTmdTd2l0Y2hDb21wb25lbnQsIFxyXG4gICAgICAgIE5nRm9yQ29tcG9uZW50LFxyXG4gICAgICAgIFBpcGVzQ29tcG9uZW50LFxyXG4gICAgICAgIEZhdm9yaXRlQ29tcG9uZW50LFxyXG4gICAgICAgIE5nU3R5bGVDb21wb25lbnQsXHJcbiAgICAgICAgRWx2aXNPcGVyYXRvckNvbXBvbmVudCxcclxuICAgICAgICBOZ0NvbnRlbnRDb21wb25lbnQsIFxyXG4gICAgICAgIFppcHB5Q29tcG9uZW50LFxyXG4gICAgICAgIENvbnRhY3RGb3JtQ29tcG9uZW50LCBcclxuICAgICAgICBTdWJzY3JpcHRpb25Gb3JtQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ251cEZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgT2JzZXJ2YWJsZXNDb21wb25lbnRdXHJcbiAgICAscHJvdmlkZXJzOltcclxuICAgICAgICBUd2VldFNlcnZpY2UsIFxyXG4gICAgICAgIC8vKDk0LjQpV2UgaGF2ZSB0byBpbXBvc3QgUG9zdFNlcnZpY2UgYW5kIGFsbCBpdCdzIHNlcnZpY2VzIGxpa2UgSHR0cCBcclxuICAgICAgICBQb3N0U2VydmljZSxIVFRQX1BST1ZJREVSU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7ICAgICBcclxuICAgIHR3ZWV0cztcclxuICAgIC8vKDk0LjMgaW5lY3QgdGhlIHNlcnZpY2UgaW50byB0aGUgY29uc3RydWN0b3IgYWZ0ZXIgaW1wb3J0aW5nIGl0IHVwKVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6UG9zdFNlcnZpY2UsIHR3ZWV0U2VydmljZTogVHdlZXRTZXJ2aWNlKXtcclxuICAgICAgLy90aGUgZGF0YSBoZXJlIG5lZWQgdG8gYmUgbGlrZSB0aGUgaW50ZXJmYWNlIGluIFBvc3QudHNcclxuICAgICAgLy90aGlzLl9wb3N0U2VydmljZS5jcmVhdGVQb3N0KHt1c2VySWQ6MSwgdGl0bGU6XCJhXCIsIGJvZHk6XCJiXCJ9KTtcclxuICAgICAgdGhpcy50d2VldHMgPSB0d2VldFNlcnZpY2UuZ2V0VHdlZXRzKCk7XHJcbiAgICB9XHJcbiAgICAvLyg5NS4xKSBuZ09uSW5pdCBpcyB1c2VkIHRvIGNhbGwgdGhlIHNlcnZlclxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICAvLyg5NC41KVVzaW5nIHRoZSBTZXJ2aWNlXHJcbiAgICAgICAgdGhpcy5fcG9zdFNlcnZpY2UuZ2V0UG9zdHMoKVxyXG4gICAgICAgICAgICAvLyg5Nil0byBnZXQgaW50ZWxsaXNlbnNlIHRvIFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBvc3RzID0+IGNvbnNvbGUubG9nKHBvc3RzWzFdLnRpdGxlKSkgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
