System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var GithubService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            GithubService = (function () {
                function GithubService(_http) {
                    this._http = _http;
                    this._baseUrl = "https://api.github.com/users/";
                }
                GithubService.prototype.getUser = function (username) {
                    return this._http.get(this._baseUrl + username)
                        .map(function (res) { return res.json(); });
                };
                GithubService.prototype.getFollowers = function (username) {
                    return this._http.get(this._baseUrl + username + "/followers")
                        .map(function (res) { return res.json(); });
                };
                GithubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GithubService);
                return GithubService;
            }());
            exports_1("GithubService", GithubService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZlckNvbm5lY3QvU29sdXRpb24vZ2l0aHViLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBSUksdUJBQW9CLEtBQVU7b0JBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztvQkFGdEIsYUFBUSxHQUFHLCtCQUErQixDQUFBO2dCQUVsQixDQUFDO2dCQUVqQywrQkFBTyxHQUFQLFVBQVEsUUFBUTtvQkFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7eUJBQzFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxvQ0FBWSxHQUFaLFVBQWEsUUFBUTtvQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxHQUFHLFlBQVksQ0FBQzt5QkFDekQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQWZMO29CQUFDLGlCQUFVLEVBQUU7O2lDQUFBO2dCQWdCYixvQkFBQztZQUFELENBZkEsQUFlQyxJQUFBO1lBZkQseUNBZUMsQ0FBQSIsImZpbGUiOiJTZXJ2ZXJDb25uZWN0L1NvbHV0aW9uL2dpdGh1Yi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdpdGh1YlNlcnZpY2V7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2Jhc2VVcmwgPSBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvXCJcclxuICAgICAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxyXG4gICAgXHJcbiAgICBnZXRVc2VyKHVzZXJuYW1lKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fYmFzZVVybCArIHVzZXJuYW1lKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Rm9sbG93ZXJzKHVzZXJuYW1lKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fYmFzZVVybCArIHVzZXJuYW1lICsgXCIvZm9sbG93ZXJzXCIpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
