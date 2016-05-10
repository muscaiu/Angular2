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
    var ContactFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactFormComponent = (function () {
                function ContactFormComponent() {
                }
                ContactFormComponent.prototype.log = function (x) {
                    console.log(x);
                };
                ContactFormComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                ContactFormComponent = __decorate([
                    core_1.Component({
                        selector: 'contact-form',
                        templateUrl: 'dev/contact-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactFormComponent);
                return ContactFormComponent;
            }());
            exports_1("ContactFormComponent", ContactFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkFPQSxDQUFDO2dCQU5HLGtDQUFHLEdBQUgsVUFBSSxDQUFDO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsdUNBQVEsR0FBUixVQUFTLElBQUk7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDckIsQ0FBQztnQkFWTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixXQUFXLEVBQUUsaUNBQWlDO3FCQUNqRCxDQUFDOzt3Q0FBQTtnQkFRRiwyQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdURBT0MsQ0FBQSIsImZpbGUiOiJjb250YWN0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29udGFjdC1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnZGV2L2NvbnRhY3QtZm9ybS5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RGb3JtQ29tcG9uZW50IHtcclxuICAgIGxvZyh4KXtcclxuICAgICAgICBjb25zb2xlLmxvZyh4KTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgb25TdWJtaXQoZm9ybSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
