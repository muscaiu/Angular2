System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin', './github.service'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, github_service_1;
    var GithubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            GithubProfileComponent = (function () {
                function GithubProfileComponent(_gitHubService) {
                    this._gitHubService = _gitHubService;
                    this.isLoading = true;
                    this.username = "johnpapa";
                    this.user = {};
                    this.followers = [];
                }
                GithubProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._gitHubService.getUser(this.username), this._gitHubService.getFollowers(this.username))
                        .subscribe(function (res) {
                        _this.user = res[0];
                        _this.followers = res[1];
                    }, null, function () { _this.isLoading = false; });
                };
                GithubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        styles: [
                            "\n            .avatar{\n                width: 100;\n                height: 100;\n                border-radius: 50%;\n            }\n        "
                        ],
                        template: "\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        <h2>@{{ user.login }}</h2>\n        <img class=\"avatar\" src=\"{{ user.avatar_url }}\">\n        \n        <h3>Followers</h3>\n        <div *ngFor=\"#follower of followers\" class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                <img class=\"media-object avatar\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{ follower.login }}</h4>\n            </div>\n        </div>\n    ",
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubProfileComponent);
                return GithubProfileComponent;
            }());
            exports_1("GithubProfileComponent", GithubProfileComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZlckNvbm5lY3QvU29sdXRpb24vZ2l0aHViLXByb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVDQTtnQkFNSSxnQ0FBb0IsY0FBNEI7b0JBQTVCLG1CQUFjLEdBQWQsY0FBYyxDQUFjO29CQUxoRCxjQUFTLEdBQUcsSUFBSSxDQUFDO29CQUNqQixhQUFRLEdBQUcsVUFBVSxDQUFDO29CQUN0QixTQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNWLGNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBR2YsQ0FBQztnQkFFRCx5Q0FBUSxHQUFSO29CQUFBLGlCQVlDO29CQVhHLHVCQUFVLENBQUMsUUFBUSxDQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUNsRDt5QkFDQSxTQUFTLENBQ04sVUFBQSxHQUFHO3dCQUNDLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUNELElBQUksRUFDSixjQUFPLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pDLENBQUM7Z0JBckRMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLGdCQUFnQjt3QkFDekIsTUFBTSxFQUFDOzRCQUNILGlKQU1DO3lCQUNKO3dCQUNELFFBQVEsRUFBRSxvb0JBZ0JUO3dCQUVELFNBQVMsRUFBQyxDQUFDLDhCQUFhLEVBQUUscUJBQWMsQ0FBQztxQkFDNUMsQ0FBQzs7MENBQUE7Z0JBd0JGLDZCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCwyREFzQkMsQ0FBQSIsImZpbGUiOiJTZXJ2ZXJDb25uZWN0L1NvbHV0aW9uL2dpdGh1Yi1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZm9ya0pvaW4nO1xyXG5cclxuaW1wb3J0IHtHaXRodWJTZXJ2aWNlfSBmcm9tJy4vZ2l0aHViLnNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidnaXRodWItcHJvZmlsZScsXHJcbiAgICBzdHlsZXM6W1xyXG4gICAgICAgIGBcclxuICAgICAgICAgICAgLmF2YXRhcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxpICpuZ0lmPVwiaXNMb2FkaW5nXCIgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtM3hcIj48L2k+XHJcbiAgICAgICAgPGgyPkB7eyB1c2VyLmxvZ2luIH19PC9oMj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwie3sgdXNlci5hdmF0YXJfdXJsIH19XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGgzPkZvbGxvd2VyczwvaDM+XHJcbiAgICAgICAgPGRpdiAqbmdGb3I9XCIjZm9sbG93ZXIgb2YgZm9sbG93ZXJzXCIgY2xhc3M9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZWRpYS1vYmplY3QgYXZhdGFyXCIgc3JjPVwie3sgZm9sbG93ZXIuYXZhdGFyX3VybCB9fVwiIGFsdD1cIi4uLlwiPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1lZGlhLWhlYWRpbmdcIj57eyBmb2xsb3dlci5sb2dpbiB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgLFxyXG4gICAgcHJvdmlkZXJzOltHaXRodWJTZXJ2aWNlLCBIVFRQX1BST1ZJREVSU11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHaXRodWJQcm9maWxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHVzZXJuYW1lID0gXCJqb2hucGFwYVwiO1xyXG4gICAgdXNlciA9IHt9O1xyXG4gICAgZm9sbG93ZXJzID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2dpdEh1YlNlcnZpY2U6R2l0aHViU2VydmljZSl7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBPYnNlcnZhYmxlLmZvcmtKb2luKFxyXG4gICAgICAgICAgICB0aGlzLl9naXRIdWJTZXJ2aWNlLmdldFVzZXIodGhpcy51c2VybmFtZSksXHJcbiAgICAgICAgICAgIHRoaXMuX2dpdEh1YlNlcnZpY2UuZ2V0Rm9sbG93ZXJzKHRoaXMudXNlcm5hbWUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSByZXNbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGxvd2VycyA9IHJlc1sxXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgKCkgPT4ge3RoaXMuaXNMb2FkaW5nID0gZmFsc2U7IH0pXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
