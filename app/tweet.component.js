System.register(['angular2/core', './like.component'], function(exports_1, context_1) {
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
    var core_1, like_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent() {
                    console.log(this.data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "data", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n<div class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"{{ data.imageUrl }}\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n        {{ data.author }} <span class=\"handle\">{{ data.handle }}</span>\n    </h4>\n    {{ data.body }}\n    <div>\n        <like [totalLikes]=\"data.totalLikes\" [iLike]=\"data.iLike\"></like>\n    </div>\n  </div>\n</div>    \n    ",
                        styles: ["\n        .handle {\n            color: #ccc;\n        }\n        \n        .media {\n            margin-bottom: 20px;\n        }\n        \n        .media-object {\n            border-radius: 10px;\n        }\n    "],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3ZWV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVDQTtnQkFDSTtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRDtvQkFBQyxZQUFLLEVBQUU7OzREQUFBO2dCQXZDWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsNGNBaUJUO3dCQUNELE1BQU0sRUFBRSxDQUFDLHlOQVlSLENBQUM7d0JBQ0YsVUFBVSxFQUFFLENBQUMsOEJBQWEsQ0FBQztxQkFDOUIsQ0FBQzs7a0NBQUE7Z0JBTUYscUJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTtZQUxELDJDQUtDLENBQUEiLCJmaWxlIjoidHdlZXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TGlrZUNvbXBvbmVudH0gZnJvbSAnLi9saWtlLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndHdlZXQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cIm1lZGlhXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cclxuICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJtZWRpYS1vYmplY3RcIiBzcmM9XCJ7eyBkYXRhLmltYWdlVXJsIH19XCI+XHJcbiAgICA8L2E+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cclxuICAgIDxoNCBjbGFzcz1cIm1lZGlhLWhlYWRpbmdcIj5cclxuICAgICAgICB7eyBkYXRhLmF1dGhvciB9fSA8c3BhbiBjbGFzcz1cImhhbmRsZVwiPnt7IGRhdGEuaGFuZGxlIH19PC9zcGFuPlxyXG4gICAgPC9oND5cclxuICAgIHt7IGRhdGEuYm9keSB9fVxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bGlrZSBbdG90YWxMaWtlc109XCJkYXRhLnRvdGFsTGlrZXNcIiBbaUxpa2VdPVwiZGF0YS5pTGlrZVwiPjwvbGlrZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj4gICAgXHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5oYW5kbGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lZGlhIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lZGlhLW9iamVjdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF0sXHJcbiAgICBkaXJlY3RpdmVzOiBbTGlrZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFR3ZWV0Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKTtcclxuICAgIH1cclxuICAgIEBJbnB1dCgpIGRhdGE7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
