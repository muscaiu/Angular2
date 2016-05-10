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
    var ElvisOperatorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ElvisOperatorComponent = (function () {
                function ElvisOperatorComponent() {
                    this.task = {
                        title: "Elvis Operator",
                        asigneee: null
                    };
                }
                ElvisOperatorComponent = __decorate([
                    core_1.Component({
                        selector: 'elvisoperator',
                        template: "\n         {{task.title}} <br>\n         {{task.asigneee?.name}}\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ElvisOperatorComponent);
                return ElvisOperatorComponent;
            }());
            exports_1("ElvisOperatorComponent", ElvisOperatorComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsdmlzb3BlcmF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7b0JBQ0ksU0FBSSxHQUFDO3dCQUNELEtBQUssRUFBQyxnQkFBZ0I7d0JBQ3RCLFFBQVEsRUFBRSxJQUFJO3FCQUlqQixDQUFBO2dCQUNMLENBQUM7Z0JBaEJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLGVBQWU7d0JBQ3hCLFFBQVEsRUFBQyw0RUFHSjtxQkFDUixDQUFDOzswQ0FBQTtnQkFVRiw2QkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsMkRBUUMsQ0FBQSIsImZpbGUiOiJlbHZpc29wZXJhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonZWx2aXNvcGVyYXRvcicsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgIHt7dGFzay50aXRsZX19IDxicj5cclxuICAgICAgICAge3t0YXNrLmFzaWduZWVlPy5uYW1lfX1cclxuICAgICAgICBgICAgIFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVsdmlzT3BlcmF0b3JDb21wb25lbnR7XHJcbiAgICB0YXNrPXtcclxuICAgICAgICB0aXRsZTpcIkVsdmlzIE9wZXJhdG9yXCIsXHJcbiAgICAgICAgYXNpZ25lZWU6IG51bGxcclxuICAgICAgICAvL3tcclxuICAgICAgICAgICAgLy9uYW1lOlwiQ3Jpc1wiXHJcbiAgICAgICAgLy99XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
