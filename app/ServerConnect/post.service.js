System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostService;
    return {
        setters:[],
        execute: function() {
            //after this go Index.html and import: <script src="node_modules/angular2/bundles/http.dev.js"></script>
            PostService = (function () {
                //Inject this Http Class into the Constructor of our Post Service
                function PostService(_http) {
                    this._http = _http;
                }
                PostService.prototype.getPost = function () {
                    this._http.get("http://jsonplaceholder.typicode.com/posts");
                };
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZlckNvbm5lY3QvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFHQSx3R0FBd0c7WUFDeEc7Z0JBQ0ksaUVBQWlFO2dCQUNqRSxxQkFBb0IsS0FBVTtvQkFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO2dCQUU5QixDQUFDO2dCQUNELDZCQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQTtnQkFDL0QsQ0FBQztnQkFHTCxrQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQscUNBVUMsQ0FBQSIsImZpbGUiOiJTZXJ2ZXJDb25uZWN0L3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKDkyKUNvbm5lY3RpbmcgdG8gYSBTZXJ2ZXJcclxuLy8oOTIuMSlcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJyBcclxuLy9hZnRlciB0aGlzIGdvIEluZGV4Lmh0bWwgYW5kIGltcG9ydDogPHNjcmlwdCBzcmM9XCJub2RlX21vZHVsZXMvYW5ndWxhcjIvYnVuZGxlcy9odHRwLmRldi5qc1wiPjwvc2NyaXB0PlxyXG5leHBvcnQgY2xhc3MgUG9zdFNlcnZpY2V7XHJcbiAgICAvL0luamVjdCB0aGlzIEh0dHAgQ2xhc3MgaW50byB0aGUgQ29uc3RydWN0b3Igb2Ygb3VyIFBvc3QgU2VydmljZVxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGdldFBvc3QoKXtcclxuICAgICAgICB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpICAgICAgICBcclxuICAgIH1cclxuICAgIC8vdGVzdGluZyBicmFuY2hcclxuICAgIC8vdGVzdGluZyBicmFuY2gxXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
