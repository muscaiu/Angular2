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
    var NgStyleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgStyleComponent = (function () {
                function NgStyleComponent() {
                    this.canSave = true;
                }
                NgStyleComponent = __decorate([
                    core_1.Component({
                        selector: 'ngstyle',
                        template: "\n        <button \n            [style.backgroundColor]=\"canSave ? 'blue' : 'gray'\"\n            [style.color]=\"canSave ? 'white' : 'black'\"\n            [style.fontWeight] = \"canSave ? 'bold' : 'normal'\"\n            \n            [ngStyle]=\"{\n                backgroundColor: canSave ? 'blue' : 'gray', \n                color: canSave ? 'white' : 'black',\n                fontWeight : canSave ? 'bold' : 'black'\n            }\"            \n        >Submit</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgStyleComponent);
                return NgStyleComponent;
            }());
            exports_1("NgStyleComponent", NgStyleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nc3R5bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUFBO29CQUNJLFlBQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLENBQUM7Z0JBbkJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBRSxzZUFZVDtxQkFDSixDQUFDOztvQ0FBQTtnQkFJRix1QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsK0NBRUMsQ0FBQSIsImZpbGUiOiJuZ3N0eWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nc3R5bGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNhblNhdmUgPyAnYmx1ZScgOiAnZ3JheSdcIlxyXG4gICAgICAgICAgICBbc3R5bGUuY29sb3JdPVwiY2FuU2F2ZSA/ICd3aGl0ZScgOiAnYmxhY2snXCJcclxuICAgICAgICAgICAgW3N0eWxlLmZvbnRXZWlnaHRdID0gXCJjYW5TYXZlID8gJ2JvbGQnIDogJ25vcm1hbCdcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjYW5TYXZlID8gJ2JsdWUnIDogJ2dyYXknLCBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjYW5TYXZlID8gJ3doaXRlJyA6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0IDogY2FuU2F2ZSA/ICdib2xkJyA6ICdibGFjaydcclxuICAgICAgICAgICAgfVwiICAgICAgICAgICAgXHJcbiAgICAgICAgPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5nU3R5bGVDb21wb25lbnR7XHJcbiAgICBjYW5TYXZlID0gdHJ1ZTsgICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
