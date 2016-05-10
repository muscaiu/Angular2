/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, Rx_1;
    var ObservablesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ObservablesComponent = (function () {
                function ObservablesComponent() {
                    var keyups = Rx_1.Observable.fromEvent($("#search"), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length >= 3; })
                        .debounceTime(400)
                        .distinctUntilChanged();
                    keyups.subscribe(function (data) { return console.log(data); });
                }
                ObservablesComponent = __decorate([
                    core_1.Component({
                        selector: 'observables',
                        template: "\n        <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"search for artists..\">\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObservablesComponent);
                return ObservablesComponent;
            }());
            exports_1("ObservablesComponent", ObservablesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9ic2VydmFibGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVc1QztnQkFDSTtvQkFDSSxJQUFJLE1BQU0sR0FBRyxlQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBQyxPQUFPLENBQUM7eUJBQ2xELEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFkLENBQWMsQ0FBQzt5QkFDeEIsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sSUFBRyxDQUFDLEVBQWYsQ0FBZSxDQUFDO3lCQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDO3lCQUNqQixvQkFBb0IsRUFBRSxDQUFDO29CQUU1QixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFBO2dCQUMvQyxDQUFDO2dCQWZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFBRSxpSEFFVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFXRiwyQkFBQztZQUFELENBVkEsQUFVQyxJQUFBO1lBVkQsdURBVUMsQ0FBQSIsImZpbGUiOiJvYnNlcnZhYmxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvYnNlcnZhYmxlcycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgYXJ0aXN0cy4uXCI+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlc0NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHZhciBrZXl1cHMgPSBPYnNlcnZhYmxlLmZyb21FdmVudCgkKFwiI3NlYXJjaFwiKSxcImtleXVwXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZSA9PiBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgLmZpbHRlcih0ZXh0ID0+IHRleHQubGVuZ3RoID49MylcclxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSg0MDApXHJcbiAgICAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGtleXVwcy5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
