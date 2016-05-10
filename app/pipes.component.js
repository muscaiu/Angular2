System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1;
    var PipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            PipesComponent = (function () {
                function PipesComponent() {
                    //curtom pipes
                    this.post = {
                        title: "Custom Pipes",
                        body: "\n         Lorem ipsum dkj powq dpoqwdp qw\n         qwdj pqwdj oqpwdj pqwjd\n         oq dpoqwkjd poqwkj dpoqjwkpodjqpwo\n        "
                    };
                    this.course = {
                        title: "Angular2",
                        students: 5981,
                        rating: 4.974112,
                        price: 99.95,
                        releaseDate: new Date(2016, 4, 1)
                    };
                }
                PipesComponent = __decorate([
                    core_1.Component({
                        selector: 'pipes',
                        template: "\n        {{ course.title | uppercase | lowercase }}\n        <br>\n        {{ course.students | number }}\n        <br>\n        {{ course.rating | number:'2.2-2' }}\n        <br>\n        {{ course.price | currency:'AUD':true:'2.2-2'}}\n        <br>\n        {{ course.releaseDate | date:'MMM yyyy' }}\n        <br>\n        {{ course  | json}}\n        <br>\n        <hr>\n        {{ post.title }}\n        <br>\n        {{ post.body | summary:11}}\n    ",
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PipesComponent);
                return PipesComponent;
            }());
            exports_1("PipesComponent", PipesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpcGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFDSSxjQUFjO29CQUNkLFNBQUksR0FBRzt3QkFDSCxLQUFLLEVBQUMsY0FBYzt3QkFDcEIsSUFBSSxFQUFDLHFJQUlKO3FCQUNKLENBQUE7b0JBRUQsV0FBTSxHQUFFO3dCQUNKLEtBQUssRUFBRSxVQUFVO3dCQUNqQixRQUFRLEVBQUUsSUFBSTt3QkFDZCxNQUFNLEVBQUUsUUFBUTt3QkFDaEIsS0FBSyxFQUFFLEtBQUs7d0JBQ1osV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUNwQyxDQUFBO2dCQUNMLENBQUM7Z0JBeENEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBQywyY0FpQlI7d0JBQ0QsS0FBSyxFQUFDLENBQUMsMEJBQVcsQ0FBQztxQkFDdEIsQ0FBQzs7a0NBQUE7Z0JBbUJGLHFCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCwyQ0FrQkMsQ0FBQSIsImZpbGUiOiJwaXBlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnR7U3VtbWFyeVBpcGV9IGZyb20gJy4vc3VtbWFyeS5waXBlJ1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGlwZXMnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIHt7IGNvdXJzZS50aXRsZSB8IHVwcGVyY2FzZSB8IGxvd2VyY2FzZSB9fVxyXG4gICAgICAgIDxicj5cclxuICAgICAgICB7eyBjb3Vyc2Uuc3R1ZGVudHMgfCBudW1iZXIgfX1cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAge3sgY291cnNlLnJhdGluZyB8IG51bWJlcjonMi4yLTInIH19XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIHt7IGNvdXJzZS5wcmljZSB8IGN1cnJlbmN5OidBVUQnOnRydWU6JzIuMi0yJ319XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIHt7IGNvdXJzZS5yZWxlYXNlRGF0ZSB8IGRhdGU6J01NTSB5eXl5JyB9fVxyXG4gICAgICAgIDxicj5cclxuICAgICAgICB7eyBjb3Vyc2UgIHwganNvbn19XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxocj5cclxuICAgICAgICB7eyBwb3N0LnRpdGxlIH19XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIHt7IHBvc3QuYm9keSB8IHN1bW1hcnk6MTF9fVxyXG4gICAgYCwgXHJcbiAgICBwaXBlczpbU3VtbWFyeVBpcGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaXBlc0NvbXBvbmVudCB7XHJcbiAgICAvL2N1cnRvbSBwaXBlc1xyXG4gICAgcG9zdCA9IHtcclxuICAgICAgICB0aXRsZTpcIkN1c3RvbSBQaXBlc1wiLFxyXG4gICAgICAgIGJvZHk6YFxyXG4gICAgICAgICBMb3JlbSBpcHN1bSBka2ogcG93cSBkcG9xd2RwIHF3XHJcbiAgICAgICAgIHF3ZGogcHF3ZGogb3Fwd2RqIHBxd2pkXHJcbiAgICAgICAgIG9xIGRwb3F3a2pkIHBvcXdraiBkcG9xandrcG9kanFwd29cclxuICAgICAgICBgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvdXJzZT0ge1xyXG4gICAgICAgIHRpdGxlOiBcIkFuZ3VsYXIyXCIsXHJcbiAgICAgICAgc3R1ZGVudHM6IDU5ODEsXHJcbiAgICAgICAgcmF0aW5nOiA0Ljk3NDExMixcclxuICAgICAgICBwcmljZTogOTkuOTUsXHJcbiAgICAgICAgcmVsZWFzZURhdGU6IG5ldyBEYXRlKDIwMTYsIDQsIDEpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
