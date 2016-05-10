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
    var NgForComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgForComponent = (function () {
                function NgForComponent() {
                    this.courses = [
                        "Course1", "Course2", "Course3"
                    ];
                }
                NgForComponent = __decorate([
                    core_1.Component({
                        selector: 'ngfor',
                        template: "\n        <ul>\n            <li *ngFor=\"#course of courses, #i = index\">\n                {{i+1}} - {{course}}\n            </li>\n        </ul>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgForComponent);
                return NgForComponent;
            }());
            exports_1("NgForComponent", NgForComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nZm9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUFBO29CQUNJLFlBQU8sR0FBRzt3QkFDTixTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7cUJBQ2xDLENBQUE7Z0JBQ0wsQ0FBQztnQkFkRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsMEpBTVQ7cUJBQ0osQ0FBQzs7a0NBQUE7Z0JBS0YscUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELDJDQUlDLENBQUEiLCJmaWxlIjoibmdmb3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ2ZvcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cIiNjb3Vyc2Ugb2YgY291cnNlcywgI2kgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAge3tpKzF9fSAtIHt7Y291cnNlfX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdGb3JDb21wb25lbnQge1xyXG4gICAgY291cnNlcyA9IFtcclxuICAgICAgICBcIkNvdXJzZTFcIiwgXCJDb3Vyc2UyXCIsIFwiQ291cnNlM1wiXHJcbiAgICBdXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
