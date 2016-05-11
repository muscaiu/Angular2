System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1, context_1) {
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
    var PostService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService(_http) {
                    this._http = _http;
                    //Inject this Http Class into the Constructor of our Post Service
                    this._url = "http://jsonplaceholder.typicode.com/posts";
                }
                //(96) make getPosts have return type of Post[]"array" 
                //(96)in order to have intelisense in app.component
                PostService.prototype.getPosts = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                PostService.prototype.createPost = function (post) {
                    this._http.post(this._url, JSON.stringify(post))
                        .map(function (res) { return res.json(); });
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZlckNvbm5lY3QvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUlJLHFCQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7b0JBSDlCLGlFQUFpRTtvQkFDekQsU0FBSSxHQUFHLDJDQUEyQyxDQUFBO2dCQUcxRCxDQUFDO2dCQUNELHVEQUF1RDtnQkFDdkQsbURBQW1EO2dCQUNuRCw4QkFBUSxHQUFSO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUUzQixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFXLElBQVU7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDM0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQW5CTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkFvQmIsa0JBQUM7WUFBRCxDQWxCQSxBQWtCQyxJQUFBO1lBbEJELHFDQWtCQyxDQUFBIiwiZmlsZSI6IlNlcnZlckNvbm5lY3QvcG9zdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8oOTIpQ29ubmVjdGluZyB0byBhIFNlcnZlclxyXG4vLyg5Mi4xKVxyXG4vL2FmdGVyIHRoaXMgZ28gSW5kZXguaHRtbCBhbmQgaW1wb3J0OiA8c2NyaXB0IHNyYz1cIm5vZGVfbW9kdWxlcy9hbmd1bGFyMi9idW5kbGVzL2h0dHAuZGV2LmpzXCI+PC9zY3JpcHQ+XHJcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy8oOTQuMSkgaW1wb3J0IEluamVjdGFibGVcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuLy8oOTQuMikgVXNlIEluamVjdGFibGVcclxuLy8oOTYpU3RhdGljIHR5cGUgY2hlY2tpbmcgLy9JbXBvcnQgUG9zdCBpbnRlcmZhY2VcclxuaW1wb3J0IHtQb3N0fSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSdcclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNle1xyXG4gICAgLy9JbmplY3QgdGhpcyBIdHRwIENsYXNzIGludG8gdGhlIENvbnN0cnVjdG9yIG9mIG91ciBQb3N0IFNlcnZpY2VcclxuICAgIHByaXZhdGUgX3VybCA9IFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIlxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOkh0dHApeyAgICAgICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8vKDk2KSBtYWtlIGdldFBvc3RzIGhhdmUgcmV0dXJuIHR5cGUgb2YgUG9zdFtdXCJhcnJheVwiIFxyXG4gICAgLy8oOTYpaW4gb3JkZXIgdG8gaGF2ZSBpbnRlbGlzZW5zZSBpbiBhcHAuY29tcG9uZW50XHJcbiAgICBnZXRQb3N0cygpIDogT2JzZXJ2YWJsZSA8UG9zdFtdPntcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5fdXJsKVxyXG4gICAgICAgICAgICAvL3VzaW5nIHRoZSBtYXAgbWV0aG9kIHRvIHRyYW5zZm9ybSB0aGUgcmVzcG9uc2UgdG8ganNvbiBvYmplY3RzIFxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlUG9zdChwb3N0OiBQb3N0KXtcclxuICAgICAgICB0aGlzLl9odHRwLnBvc3QodGhpcy5fdXJsLCBKU09OLnN0cmluZ2lmeShwb3N0KSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
