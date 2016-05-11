System.register(['angular2/core', './tweet.component', './tweet.service', './ngif.component', './ngswitch.component', './ngfor.component', './pipes.component', './favorite.component', './ngstyle.component', './elvisoperator.component', './ngcontent.component', './zippy.component', './contact-form.component', './subscription-form.component', './signup-form.component', './Observables/observables.component', './ServerConnect/post.service', 'angular2/http', './ServerConnect/Solution/github-profile.component'], function(exports_1, context_1) {
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
    var core_1, tweet_component_1, tweet_service_1, ngif_component_1, ngswitch_component_1, ngfor_component_1, pipes_component_1, favorite_component_1, ngstyle_component_1, elvisoperator_component_1, ngcontent_component_1, zippy_component_1, contact_form_component_1, subscription_form_component_1, signup_form_component_1, observables_component_1, post_service_1, http_1, github_profile_component_1;
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
            },
            function (github_profile_component_1_1) {
                github_profile_component_1 = github_profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //(94.3 inect the service into the constructor after importing it up)
                function AppComponent(_postService, tweetService) {
                    this._postService = _postService;
                    //(97 Showing Loader Icon)
                    this.isLoading = true;
                    //the data here need to be like the interface in Post.ts
                    //this._postService.createPost({userId:1, title:"a", body:"b"});
                    this.tweets = tweetService.getTweets();
                }
                //(95.1) ngOnInit is used to call the server
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //(94.5)Using the Service
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[1].title);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "    \n    <hr>\n    <github-profile> </github-profile>\n    <hr>\n    <observables></observables>\n    <hr>\n    <signup-form> </signup-form>\n    <hr>\n    <subscription-form> </subscription-form>\n    <hr>\n    <contact-form></contact-form>\n    <hr>\n    <zippy title=\"Who can see my stuff?\">\n        Content of who can see my stuff\n    </zippy>\n    <zippy title=\"Who can contact me?\">\n        Content of who can concact me\n    </zippy>    \n    <hr>\n        <ngcontent>\n            <div class=\"heading\">This is from appcomponent</div>\n            <div class=\"body\">This is from appcomponent</div>\n            <div class=\"body\">This is another body from app component</div>            \n        </ngcontent>\n    <hr>\n        <elvisoperator> </elvisoperator>\n    <hr>\n        <ngstyle> </ngstyle>\n    <hr>\n        <favorite> </favorite>\n    <hr>\n        <pipes> </pipes>\n    <hr>\n        <ngfor> </ngfor>\n    <hr>    \n        <ngswitch></ngswitch>\n    <hr>    \n        <ngif class=\"container\"></ngif>\n    <hr>\n        <div *ngFor=\"#tweet of tweets\">\n            <tweet [data]=\"tweet\"></tweet>\n        </div>    \n    ",
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
                            observables_component_1.ObservablesComponent,
                            github_profile_component_1.GithubProfileComponent],
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF3RkE7Z0JBSUkscUVBQXFFO2dCQUNyRSxzQkFBb0IsWUFBd0IsRUFBRSxZQUEwQjtvQkFBcEQsaUJBQVksR0FBWixZQUFZLENBQVk7b0JBSDNDLDBCQUEwQjtvQkFDM0IsY0FBUyxHQUFHLElBQUksQ0FBQztvQkFHZix3REFBd0Q7b0JBQ3hELGdFQUFnRTtvQkFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsNENBQTRDO2dCQUM1QywrQkFBUSxHQUFSO29CQUFBLGlCQVFDO29CQVBHLHlCQUF5QjtvQkFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7eUJBRXZCLFNBQVMsQ0FBQyxVQUFBLEtBQUs7d0JBQ2QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQXJGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNG9DQTBDVDt3QkFDQSxVQUFVLEVBQUM7NEJBQ1IsZ0NBQWM7NEJBQ2QsOEJBQWE7NEJBQ2Isc0NBQWlCOzRCQUNqQixnQ0FBYzs0QkFDZCxnQ0FBYzs0QkFDZCxzQ0FBaUI7NEJBQ2pCLG9DQUFnQjs0QkFDaEIsZ0RBQXNCOzRCQUN0Qix3Q0FBa0I7NEJBQ2xCLGdDQUFjOzRCQUNkLDZDQUFvQjs0QkFDcEIsdURBQXlCOzRCQUN6QiwyQ0FBbUI7NEJBQ25CLDRDQUFvQjs0QkFDcEIsaURBQXNCLENBQUM7d0JBQzFCLFNBQVMsRUFBQzs0QkFDUCw0QkFBWTs0QkFDWixzRUFBc0U7NEJBQ3RFLDBCQUFXLEVBQUMscUJBQWMsQ0FBQztxQkFDbEMsQ0FBQzs7Z0NBQUE7Z0JBcUJGLG1CQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx1Q0FvQkMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1R3ZWV0Q29tcG9uZW50fSBmcm9tICcuL3R3ZWV0LmNvbXBvbmVudCdcclxuaW1wb3J0IHtUd2VldFNlcnZpY2V9IGZyb20gJy4vdHdlZXQuc2VydmljZSdcclxuaW1wb3J0IHtOZ0lmQ29tcG9uZW50fSBmcm9tICcuL25naWYuY29tcG9uZW50J1xyXG5pbXBvcnQge05nU3dpdGNoQ29tcG9uZW50fSBmcm9tJy4vbmdzd2l0Y2guY29tcG9uZW50J1xyXG5pbXBvcnQge05nRm9yQ29tcG9uZW50fSBmcm9tICcuL25nZm9yLmNvbXBvbmVudCdcclxuaW1wb3J0IHtQaXBlc0NvbXBvbmVudH0gZnJvbScuL3BpcGVzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtGYXZvcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9mYXZvcml0ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7TmdTdHlsZUNvbXBvbmVudH0gZnJvbSAnLi9uZ3N0eWxlLmNvbXBvbmVudCdcclxuaW1wb3J0IHtFbHZpc09wZXJhdG9yQ29tcG9uZW50fSBmcm9tJy4vZWx2aXNvcGVyYXRvci5jb21wb25lbnQnXHJcbmltcG9ydCB7TmdDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL25nY29udGVudC5jb21wb25lbnQnXHJcbmltcG9ydCB7WmlwcHlDb21wb25lbnR9IGZyb20nLi96aXBweS5jb21wb25lbnQnXHJcbmltcG9ydCB7Q29udGFjdEZvcm1Db21wb25lbnR9IGZyb20gJy4vY29udGFjdC1mb3JtLmNvbXBvbmVudCdcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25Gb3JtQ29tcG9uZW50fSBmcm9tJy4vc3Vic2NyaXB0aW9uLWZvcm0uY29tcG9uZW50J1xyXG5pbXBvcnQge1NpZ251cEZvcm1Db21wb25lbnR9IGZyb20gJy4vc2lnbnVwLWZvcm0uY29tcG9uZW50J1xyXG5pbXBvcnQge09ic2VydmFibGVzQ29tcG9uZW50fSBmcm9tICcuL09ic2VydmFibGVzL29ic2VydmFibGVzLmNvbXBvbmVudCdcclxuLy8oOTQpIENvbm5lY3RpbmcgdG8gU2VydmVyIHdlIG11c3QgaW1wb3J0IGFsc28gSFRUUF9QUk9WSURFUlNcclxuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSAnLi9TZXJ2ZXJDb25uZWN0L3Bvc3Quc2VydmljZSdcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCdcclxuaW1wb3J0IHtPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnXHJcbmltcG9ydCB7R2l0aHViUHJvZmlsZUNvbXBvbmVudH0gZnJvbSAnLi9TZXJ2ZXJDb25uZWN0L1NvbHV0aW9uL2dpdGh1Yi1wcm9maWxlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGAgICAgXHJcbiAgICA8aHI+XHJcbiAgICA8Z2l0aHViLXByb2ZpbGU+IDwvZ2l0aHViLXByb2ZpbGU+XHJcbiAgICA8aHI+XHJcbiAgICA8b2JzZXJ2YWJsZXM+PC9vYnNlcnZhYmxlcz5cclxuICAgIDxocj5cclxuICAgIDxzaWdudXAtZm9ybT4gPC9zaWdudXAtZm9ybT5cclxuICAgIDxocj5cclxuICAgIDxzdWJzY3JpcHRpb24tZm9ybT4gPC9zdWJzY3JpcHRpb24tZm9ybT5cclxuICAgIDxocj5cclxuICAgIDxjb250YWN0LWZvcm0+PC9jb250YWN0LWZvcm0+XHJcbiAgICA8aHI+XHJcbiAgICA8emlwcHkgdGl0bGU9XCJXaG8gY2FuIHNlZSBteSBzdHVmZj9cIj5cclxuICAgICAgICBDb250ZW50IG9mIHdobyBjYW4gc2VlIG15IHN0dWZmXHJcbiAgICA8L3ppcHB5PlxyXG4gICAgPHppcHB5IHRpdGxlPVwiV2hvIGNhbiBjb250YWN0IG1lP1wiPlxyXG4gICAgICAgIENvbnRlbnQgb2Ygd2hvIGNhbiBjb25jYWN0IG1lXHJcbiAgICA8L3ppcHB5PiAgICBcclxuICAgIDxocj5cclxuICAgICAgICA8bmdjb250ZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlRoaXMgaXMgZnJvbSBhcHBjb21wb25lbnQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvZHlcIj5UaGlzIGlzIGZyb20gYXBwY29tcG9uZW50PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+VGhpcyBpcyBhbm90aGVyIGJvZHkgZnJvbSBhcHAgY29tcG9uZW50PC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9uZ2NvbnRlbnQ+XHJcbiAgICA8aHI+XHJcbiAgICAgICAgPGVsdmlzb3BlcmF0b3I+IDwvZWx2aXNvcGVyYXRvcj5cclxuICAgIDxocj5cclxuICAgICAgICA8bmdzdHlsZT4gPC9uZ3N0eWxlPlxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxmYXZvcml0ZT4gPC9mYXZvcml0ZT5cclxuICAgIDxocj5cclxuICAgICAgICA8cGlwZXM+IDwvcGlwZXM+XHJcbiAgICA8aHI+XHJcbiAgICAgICAgPG5nZm9yPiA8L25nZm9yPlxyXG4gICAgPGhyPiAgICBcclxuICAgICAgICA8bmdzd2l0Y2g+PC9uZ3N3aXRjaD5cclxuICAgIDxocj4gICAgXHJcbiAgICAgICAgPG5naWYgY2xhc3M9XCJjb250YWluZXJcIj48L25naWY+XHJcbiAgICA8aHI+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCIjdHdlZXQgb2YgdHdlZXRzXCI+XHJcbiAgICAgICAgICAgIDx0d2VldCBbZGF0YV09XCJ0d2VldFwiPjwvdHdlZXQ+XHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgYFxyXG4gICAgLGRpcmVjdGl2ZXM6W1xyXG4gICAgICAgIFR3ZWV0Q29tcG9uZW50LFxyXG4gICAgICAgIE5nSWZDb21wb25lbnQsIFxyXG4gICAgICAgIE5nU3dpdGNoQ29tcG9uZW50LCBcclxuICAgICAgICBOZ0ZvckNvbXBvbmVudCxcclxuICAgICAgICBQaXBlc0NvbXBvbmVudCxcclxuICAgICAgICBGYXZvcml0ZUNvbXBvbmVudCxcclxuICAgICAgICBOZ1N0eWxlQ29tcG9uZW50LFxyXG4gICAgICAgIEVsdmlzT3BlcmF0b3JDb21wb25lbnQsXHJcbiAgICAgICAgTmdDb250ZW50Q29tcG9uZW50LCBcclxuICAgICAgICBaaXBweUNvbXBvbmVudCxcclxuICAgICAgICBDb250YWN0Rm9ybUNvbXBvbmVudCwgXHJcbiAgICAgICAgU3Vic2NyaXB0aW9uRm9ybUNvbXBvbmVudCxcclxuICAgICAgICBTaWdudXBGb3JtQ29tcG9uZW50LFxyXG4gICAgICAgIE9ic2VydmFibGVzQ29tcG9uZW50LFxyXG4gICAgICAgIEdpdGh1YlByb2ZpbGVDb21wb25lbnRdXHJcbiAgICAscHJvdmlkZXJzOltcclxuICAgICAgICBUd2VldFNlcnZpY2UsIFxyXG4gICAgICAgIC8vKDk0LjQpV2UgaGF2ZSB0byBpbXBvc3QgUG9zdFNlcnZpY2UgYW5kIGFsbCBpdCdzIHNlcnZpY2VzIGxpa2UgSHR0cCBcclxuICAgICAgICBQb3N0U2VydmljZSxIVFRQX1BST1ZJREVSU11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7ICAgICBcclxuICAgIHR3ZWV0cztcclxuICAgICAvLyg5NyBTaG93aW5nIExvYWRlciBJY29uKVxyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIC8vKDk0LjMgaW5lY3QgdGhlIHNlcnZpY2UgaW50byB0aGUgY29uc3RydWN0b3IgYWZ0ZXIgaW1wb3J0aW5nIGl0IHVwKVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcG9zdFNlcnZpY2U6UG9zdFNlcnZpY2UsIHR3ZWV0U2VydmljZTogVHdlZXRTZXJ2aWNlKXtcclxuICAgICAgLy90aGUgZGF0YSBoZXJlIG5lZWQgdG8gYmUgbGlrZSB0aGUgaW50ZXJmYWNlIGluIFBvc3QudHNcclxuICAgICAgLy90aGlzLl9wb3N0U2VydmljZS5jcmVhdGVQb3N0KHt1c2VySWQ6MSwgdGl0bGU6XCJhXCIsIGJvZHk6XCJiXCJ9KTtcclxuICAgICAgdGhpcy50d2VldHMgPSB0d2VldFNlcnZpY2UuZ2V0VHdlZXRzKCk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8oOTUuMSkgbmdPbkluaXQgaXMgdXNlZCB0byBjYWxsIHRoZSBzZXJ2ZXJcclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgLy8oOTQuNSlVc2luZyB0aGUgU2VydmljZVxyXG4gICAgICAgIHRoaXMuX3Bvc3RTZXJ2aWNlLmdldFBvc3RzKClcclxuICAgICAgICAgICAgLy8oOTYpdG8gZ2V0IGludGVsbGlzZW5zZSBmb3IgcG9zdC50c1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBvc3RzID0+e1xyXG4gICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdHNbMV0udGl0bGUpXHJcbiAgICAgICAgICAgIH0pOyAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
