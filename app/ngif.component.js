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
    var NgIfComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgIfComponent = (function () {
                function NgIfComponent() {
                    this.courses = [];
                }
                NgIfComponent = __decorate([
                    core_1.Component({
                        selector: 'ngif',
                        template: "\n        <div [hidden]=\"courses.length == 0\">\n            List of courses\n        </div>\n        \n        <div [hidden]=\"courses.length > 0\">\n            You don't have any courses yet.\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgIfComponent);
                return NgIfComponent;
            }());
            exports_1("NgIfComponent", NgIfComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5naWYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBY0E7Z0JBQUE7b0JBQ0ksWUFBTyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxNQUFNO3dCQUNoQixRQUFRLEVBQUUsMk5BUVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBR0Ysb0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHlDQUVDLENBQUEiLCJmaWxlIjoibmdpZi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25naWYnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiY291cnNlcy5sZW5ndGggPT0gMFwiPlxyXG4gICAgICAgICAgICBMaXN0IG9mIGNvdXJzZXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IFtoaWRkZW5dPVwiY291cnNlcy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgIFlvdSBkb24ndCBoYXZlIGFueSBjb3Vyc2VzIHlldC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nSWZDb21wb25lbnQge1xyXG4gICAgY291cnNlcyA9IFtdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
