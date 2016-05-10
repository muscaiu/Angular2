System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NgContentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgContentComponent = (function () {
                function NgContentComponent() {
                }
                NgContentComponent = __decorate([
                    core_1.Component({
                        selector: 'ngcontent',
                        template: "\n        <div class=\"panel panel-default\">            \n            <div class=\"panel-heading\">\n                Heading from ngcontentComponent\n                <ng-content select = \".heading\"></ng-content>\n            </div>\n                        \n            <div class=\"panel-body\">\n                Body from ngcontentComponent\n                <ng-content select = \".body\"></ng-content>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgContentComponent);
                return NgContentComponent;
            }());
            exports_1("NgContentComponent", NgContentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBQUE7Z0JBRUEsQ0FBQztnQkFuQkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsUUFBUSxFQUFDLG9jQVlSO3FCQUNKLENBQUM7O3NDQUFBO2dCQUlGLHlCQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCxtREFFQyxDQUFBIiwiZmlsZSI6Im5nY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J25nY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIEhlYWRpbmcgZnJvbSBuZ2NvbnRlbnRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdCA9IFwiLmhlYWRpbmdcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIEJvZHkgZnJvbSBuZ2NvbnRlbnRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdCA9IFwiLmJvZHlcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG4vL0luc2VydGluZyBjb250ZW50IGludG8gdGhlIHRlbXBsYXRlIG9mIG91ciBjb21wb25lbnQgZnJvbSB0aGUgb3V0c2lkZTpcclxuZXhwb3J0IGNsYXNzIE5nQ29udGVudENvbXBvbmVudHtcclxuICAgICAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
