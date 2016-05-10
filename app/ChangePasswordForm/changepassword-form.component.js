System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var ChangePaswordFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ChangePaswordFormComponent = (function () {
                function ChangePaswordFormComponent(fb) {
                    this.changepasswordForm = fb.group({
                        changepasswordForm: ['', common_1.Validators.compose([
                                common_1.Validators.required
                            ])]
                    });
                }
                ChangePaswordFormComponent.prototype.changePassword = function () {
                    console.log(this.changepasswordForm.value);
                };
                ChangePaswordFormComponent = __decorate([
                    core_1.Component({
                        selector: 'changepassword-form',
                        templateUrl: 'dev/ChangePasswordForm/changepassword-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePaswordFormComponent);
                return ChangePaswordFormComponent;
            }());
            exports_1("ChangePaswordFormComponent", ChangePaswordFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoYW5nZVBhc3N3b3JkRm9ybS9jaGFuZ2VwYXNzd29yZC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUdJLG9DQUFZLEVBQWU7b0JBQ3ZCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUMvQixrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDdkMsbUJBQVUsQ0FBQyxRQUFROzZCQUN0QixDQUFDLENBQUM7cUJBQ04sQ0FBQyxDQUFBO2dCQUNOLENBQUM7Z0JBRUQsbURBQWMsR0FBZDtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDOUMsQ0FBQztnQkFqQkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUscUJBQXFCO3dCQUMvQixXQUFXLEVBQUUsMkRBQTJEO3FCQUMzRSxDQUFDOzs4Q0FBQTtnQkFlRixpQ0FBQztZQUFELENBZEEsQUFjQyxJQUFBO1lBZEQsbUVBY0MsQ0FBQSIsImZpbGUiOiJDaGFuZ2VQYXNzd29yZEZvcm0vY2hhbmdlcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NoYW5nZXBhc3N3b3JkLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvQ2hhbmdlUGFzc3dvcmRGb3JtL2NoYW5nZXBhc3N3b3JkLWZvcm0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXN3b3JkRm9ybUNvbXBvbmVudCB7ICAgIFxyXG4gICAgY2hhbmdlcGFzc3dvcmRGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcil7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VwYXNzd29yZEZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGNoYW5nZXBhc3N3b3JkRm9ybTogWycnLFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgIF0pXVxyXG4gICAgICAgIH0pICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGFuZ2VQYXNzd29yZCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hhbmdlcGFzc3dvcmRGb3JtLnZhbHVlKVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
