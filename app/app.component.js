System.register(['angular2/core', './tweet.component', './tweet.service', './ngif.component', './ngswitch.component', './ngfor.component', './pipes.component', './favorite.component', './ngstyle.component', './elvisoperator.component', './ngcontent.component', './zippy.component', './contact-form.component', './subscription-form.component', './signup-form.component', './Observables/observables.component'], function(exports_1, context_1) {
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
    var core_1, tweet_component_1, tweet_service_1, ngif_component_1, ngswitch_component_1, ngfor_component_1, pipes_component_1, favorite_component_1, ngstyle_component_1, elvisoperator_component_1, ngcontent_component_1, zippy_component_1, contact_form_component_1, subscription_form_component_1, signup_form_component_1, observables_component_1;
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
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
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
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE4RUE7Z0JBSUksc0JBQVksWUFBMEI7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQyxDQUFDO2dCQW5FTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsNGxDQXlDVDt3QkFDQSxVQUFVLEVBQUM7NEJBQ1IsZ0NBQWM7NEJBQ2QsOEJBQWE7NEJBQ2Isc0NBQWlCOzRCQUNqQixnQ0FBYzs0QkFDZCxnQ0FBYzs0QkFDZCxzQ0FBaUI7NEJBQ2pCLG9DQUFnQjs0QkFDaEIsZ0RBQXNCOzRCQUN0Qix3Q0FBa0I7NEJBQ2xCLGdDQUFjOzRCQUNkLDZDQUFvQjs0QkFDcEIsdURBQXlCOzRCQUN6QiwyQ0FBbUI7NEJBQ25CLDRDQUFvQixDQUFDO3dCQUN4QixTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO3FCQUM1QixDQUFDOztnQ0FBQTtnQkFRRixtQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdUNBT0MsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1R3ZWV0Q29tcG9uZW50fSBmcm9tICcuL3R3ZWV0LmNvbXBvbmVudCdcclxuaW1wb3J0IHtUd2VldFNlcnZpY2V9IGZyb20gJy4vdHdlZXQuc2VydmljZSdcclxuaW1wb3J0IHtOZ0lmQ29tcG9uZW50fSBmcm9tICcuL25naWYuY29tcG9uZW50J1xyXG5pbXBvcnQge05nU3dpdGNoQ29tcG9uZW50fSBmcm9tJy4vbmdzd2l0Y2guY29tcG9uZW50J1xyXG5pbXBvcnQge05nRm9yQ29tcG9uZW50fSBmcm9tICcuL25nZm9yLmNvbXBvbmVudCdcclxuaW1wb3J0IHtQaXBlc0NvbXBvbmVudH0gZnJvbScuL3BpcGVzLmNvbXBvbmVudCdcclxuaW1wb3J0IHtGYXZvcml0ZUNvbXBvbmVudH0gZnJvbSAnLi9mYXZvcml0ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7TmdTdHlsZUNvbXBvbmVudH0gZnJvbSAnLi9uZ3N0eWxlLmNvbXBvbmVudCdcclxuaW1wb3J0IHtFbHZpc09wZXJhdG9yQ29tcG9uZW50fSBmcm9tJy4vZWx2aXNvcGVyYXRvci5jb21wb25lbnQnXHJcbmltcG9ydCB7TmdDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL25nY29udGVudC5jb21wb25lbnQnXHJcbmltcG9ydCB7WmlwcHlDb21wb25lbnR9IGZyb20nLi96aXBweS5jb21wb25lbnQnXHJcbmltcG9ydCB7Q29udGFjdEZvcm1Db21wb25lbnR9IGZyb20gJy4vY29udGFjdC1mb3JtLmNvbXBvbmVudCdcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25Gb3JtQ29tcG9uZW50fSBmcm9tJy4vc3Vic2NyaXB0aW9uLWZvcm0uY29tcG9uZW50J1xyXG5pbXBvcnQge1NpZ251cEZvcm1Db21wb25lbnR9IGZyb20gJy4vc2lnbnVwLWZvcm0uY29tcG9uZW50J1xyXG5pbXBvcnQge09ic2VydmFibGVzQ29tcG9uZW50fSBmcm9tICcuL09ic2VydmFibGVzL29ic2VydmFibGVzLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIFxyXG4gICAgPGhyPlxyXG4gICAgPG9ic2VydmFibGVzPjwvb2JzZXJ2YWJsZXM+XHJcbiAgICA8aHI+XHJcbiAgICA8c2lnbnVwLWZvcm0+IDwvc2lnbnVwLWZvcm0+XHJcbiAgICA8aHI+XHJcbiAgICA8c3Vic2NyaXB0aW9uLWZvcm0+IDwvc3Vic2NyaXB0aW9uLWZvcm0+XHJcbiAgICA8aHI+XHJcbiAgICA8Y29udGFjdC1mb3JtPjwvY29udGFjdC1mb3JtPlxyXG4gICAgPGhyPlxyXG4gICAgPHppcHB5IHRpdGxlPVwiV2hvIGNhbiBzZWUgbXkgc3R1ZmY/XCI+XHJcbiAgICAgICAgQ29udGVudCBvZiB3aG8gY2FuIHNlZSBteSBzdHVmZlxyXG4gICAgPC96aXBweT5cclxuICAgIDx6aXBweSB0aXRsZT1cIldobyBjYW4gY29udGFjdCBtZT9cIj5cclxuICAgICAgICBDb250ZW50IG9mIHdobyBjYW4gY29uY2FjdCBtZVxyXG4gICAgPC96aXBweT4gICAgXHJcbiAgICA8aHI+XHJcbiAgICAgICAgPG5nY29udGVudD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5UaGlzIGlzIGZyb20gYXBwY29tcG9uZW50PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5XCI+VGhpcyBpcyBmcm9tIGFwcGNvbXBvbmVudDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlRoaXMgaXMgYW5vdGhlciBib2R5IGZyb20gYXBwIGNvbXBvbmVudDwvZGl2PiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvbmdjb250ZW50PlxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxlbHZpc29wZXJhdG9yPiA8L2Vsdmlzb3BlcmF0b3I+XHJcbiAgICA8aHI+XHJcbiAgICAgICAgPG5nc3R5bGU+IDwvbmdzdHlsZT5cclxuICAgIDxocj5cclxuICAgICAgICA8ZmF2b3JpdGU+IDwvZmF2b3JpdGU+XHJcbiAgICA8aHI+XHJcbiAgICAgICAgPHBpcGVzPiA8L3BpcGVzPlxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxuZ2Zvcj4gPC9uZ2Zvcj5cclxuICAgIDxocj4gICAgXHJcbiAgICAgICAgPG5nc3dpdGNoPjwvbmdzd2l0Y2g+XHJcbiAgICA8aHI+ICAgIFxyXG4gICAgICAgIDxuZ2lmIGNsYXNzPVwiY29udGFpbmVyXCI+PC9uZ2lmPlxyXG4gICAgPGhyPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwiI3R3ZWV0IG9mIHR3ZWV0c1wiPlxyXG4gICAgICAgICAgICA8dHdlZXQgW2RhdGFdPVwidHdlZXRcIj48L3R3ZWV0PlxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIGBcclxuICAgICxkaXJlY3RpdmVzOltcclxuICAgICAgICBUd2VldENvbXBvbmVudCxcclxuICAgICAgICBOZ0lmQ29tcG9uZW50LCBcclxuICAgICAgICBOZ1N3aXRjaENvbXBvbmVudCwgXHJcbiAgICAgICAgTmdGb3JDb21wb25lbnQsXHJcbiAgICAgICAgUGlwZXNDb21wb25lbnQsXHJcbiAgICAgICAgRmF2b3JpdGVDb21wb25lbnQsXHJcbiAgICAgICAgTmdTdHlsZUNvbXBvbmVudCxcclxuICAgICAgICBFbHZpc09wZXJhdG9yQ29tcG9uZW50LFxyXG4gICAgICAgIE5nQ29udGVudENvbXBvbmVudCwgXHJcbiAgICAgICAgWmlwcHlDb21wb25lbnQsXHJcbiAgICAgICAgQ29udGFjdEZvcm1Db21wb25lbnQsIFxyXG4gICAgICAgIFN1YnNjcmlwdGlvbkZvcm1Db21wb25lbnQsXHJcbiAgICAgICAgU2lnbnVwRm9ybUNvbXBvbmVudCxcclxuICAgICAgICBPYnNlcnZhYmxlc0NvbXBvbmVudF1cclxuICAgICxwcm92aWRlcnM6W1R3ZWV0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgICAgXHJcbiAgICB0d2VldHM7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHR3ZWV0U2VydmljZTogVHdlZXRTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLnR3ZWV0cyA9IHR3ZWV0U2VydmljZS5nZXRUd2VldHMoKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
