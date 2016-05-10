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
    var FavoriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavoriteComponent = (function () {
                function FavoriteComponent() {
                    this.isFavorite = false;
                }
                FavoriteComponent.prototype.OnClick = function () {
                    this.isFavorite = !this.isFavorite;
                    console.log(this.isFavorite);
                };
                FavoriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favorite',
                        template: "\n        <i class=\"glyphicon\"       \n            [ngClass]=\"{\n                'glyphicon-star-empty': !isFavorite,\n                'glyphicon-star' : isFavorite\n            }\"\n            (click)=\"OnClick()\"> \n        </i>\n    ",
                        styles: ["\n          .glyphicon-star{\n              color: orange;\n          }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavoriteComponent);
                return FavoriteComponent;
            }());
            exports_1("FavoriteComponent", FavoriteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm9yaXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQTtnQkFBQTtvQkFDSSxlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUt2QixDQUFDO2dCQUpPLG1DQUFPLEdBQVA7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQXRCVDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBQyxVQUFVO3dCQUNuQixRQUFRLEVBQUMsbVBBUVI7d0JBQ0QsTUFBTSxFQUFDLENBQUMsK0VBSVAsQ0FBQztxQkFDTCxDQUFDOztxQ0FBQTtnQkFPRix3QkFBQztZQUFELENBTkEsQUFNQyxJQUFBO1lBTkQsaURBTUMsQ0FBQSIsImZpbGUiOiJmYXZvcml0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSdhbmd1bGFyMi9jb3JlJ1xyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvcjonZmF2b3JpdGUnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uXCIgICAgICAgXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcclxuICAgICAgICAgICAgICAgICdnbHlwaGljb24tc3Rhci1lbXB0eSc6ICFpc0Zhdm9yaXRlLFxyXG4gICAgICAgICAgICAgICAgJ2dseXBoaWNvbi1zdGFyJyA6IGlzRmF2b3JpdGVcclxuICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJPbkNsaWNrKClcIj4gXHJcbiAgICAgICAgPC9pPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgICAgLmdseXBoaWNvbi1zdGFye1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVDb21wb25lbnR7XHJcbiAgICBpc0Zhdm9yaXRlID0gZmFsc2U7ICAgIFxyXG4gICAgICAgIE9uQ2xpY2soKXtcclxuICAgICAgICAgICAgdGhpcy5pc0Zhdm9yaXRlID0gIXRoaXMuaXNGYXZvcml0ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0Zhdm9yaXRlKTsgIFxyXG4gICAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
