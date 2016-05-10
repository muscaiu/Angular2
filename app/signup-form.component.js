System.register(['angular2/core', 'angular2/common', './usernameValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, usernameValidators_1;
    var SignupFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidators_1_1) {
                usernameValidators_1 = usernameValidators_1_1;
            }],
        execute: function() {
            SignupFormComponent = (function () {
                //(7.71)(1) we use a parameter of type FormBuilder and we import it
                function SignupFormComponent(fb) {
                    //(7.70)
                    //Building a Basic Form that will return an error message is the value in input box is ''
                    //forms built this way are also called Model-driven Forms
                    this.form3 = new common_1.ControlGroup({
                        //Control has 3 porperties u can see if u hover over it:
                        //1. value? witch is optional because it has a '?' after it and we set it as an empty string ''
                        //2. validator? same is optional we use Validators.required and we import Validators class
                        //3. one or more asyncvalidators? optional we dont use it yet
                        username: new common_1.Control('', common_1.Validators.required),
                        password: new common_1.Control('', common_1.Validators.required)
                    });
                    //(7.71)(3) finally we store the values into our form property
                    //(7.71)(3) fb.group is for creating a ControlGroup Object
                    this.form = fb.group({
                        //(7.71)(2)each element of the array represents one of the elements of the ControlGroup Class
                        username: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                usernameValidators_1.UsernameValidators.cannotContainSpace
                            ]),
                            //(7.73) Async Validators
                            //thi is the 3-rd element of the array and it's the async validator from usernameValidators.ts
                            usernameValidators_1.UsernameValidators.shouldBeUnique],
                        password: ['', common_1.Validators.required]
                    });
                }
                SignupFormComponent.prototype.signup = function () {
                    //(7.75) Validating Upon Form Submit (both Username and Password)
                    //var result = authService.login(this.form.value);
                    this.form.find('username').setErrors({
                        invalidLogin: true
                    });
                    //this will return a json object that includes all values in the form
                    console.log(this.form.value);
                };
                SignupFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        templateUrl: 'dev/signup-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupFormComponent);
                return SignupFormComponent;
            }());
            exports_1("SignupFormComponent", SignupFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQWtCSSxtRUFBbUU7Z0JBQ25FLDZCQUFZLEVBQWM7b0JBa0IxQixRQUFRO29CQUNSLHlGQUF5RjtvQkFDekYseURBQXlEO29CQUN6RCxVQUFLLEdBQUcsSUFBSSxxQkFBWSxDQUFDO3dCQUNyQix3REFBd0Q7d0JBQ3hELCtGQUErRjt3QkFDL0YsMEZBQTBGO3dCQUMxRiw2REFBNkQ7d0JBQzdELFFBQVEsRUFBRSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUM5QyxRQUFRLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDakQsQ0FBQyxDQUFDO29CQTNCQyw4REFBOEQ7b0JBQzlELDBEQUEwRDtvQkFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQiw2RkFBNkY7d0JBQzdGLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDOUIsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQix1Q0FBa0IsQ0FBQyxrQkFBa0I7NkJBQ3hDLENBQUM7NEJBQ0UseUJBQXlCOzRCQUN6Qiw4RkFBOEY7NEJBQzlGLHVDQUFrQixDQUFDLGNBQWMsQ0FBQzt3QkFFdEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUV0QyxDQUFDLENBQUE7Z0JBQ04sQ0FBQztnQkFjRCxvQ0FBTSxHQUFOO29CQUNJLGlFQUFpRTtvQkFDakUsa0RBQWtEO29CQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQ2pDLFlBQVksRUFBRSxJQUFJO3FCQUNyQixDQUFDLENBQUM7b0JBRUgscUVBQXFFO29CQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBOURMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFdBQVcsRUFBRSxnQ0FBZ0M7cUJBQ2hELENBQUM7O3VDQUFBO2dCQTRERiwwQkFBQztZQUFELENBM0RBLEFBMkRDLElBQUE7WUEzREQscURBMkRDLENBQUEiLCJmaWxlIjoic2lnbnVwLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBDb250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtVc2VybmFtZVZhbGlkYXRvcnMgfSBmcm9tICcuL3VzZXJuYW1lVmFsaWRhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2lnbnVwLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvc2lnbnVwLWZvcm0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBGb3JtQ29tcG9uZW50IHtcclxuICAgIC8vKDcuNzIpIC0gdGhyb3dzIGVycm9ycyBmb3Igc29tZSByZWFzb24gOihcclxuICAgIC8vIGZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIC8vIGNvbnN0cnVjdG9yKGZiOkZvcm1CdWlsZGVyKXtcclxuICAgIC8vICAgICBmYi5ncm91cCh7XHJcbiAgICAvLyAgICAgICAgIC8vKDcuNzIpKDEpIHRvIHVzZSAucmVxdWlyZWQgYW5kIC5jb25ub3RDb250YWluV2hpdGVTcGFjZSB3ZSBtdXN0IHVzZSBWYWxpZGF0b3JzLmNvbXBvc2UoKSBtZXRvaGRcclxuICAgIC8vICAgICAgICAgLy8oNy43MikoMikgaW4gaHRtbCBhZGQgcGxhY2Vob2xkZXIgZm9yIHRoZSBjdXN0b20gVmFsaWRhdGlvblxyXG4gICAgLy8gICAgICAgICB1c2VybmFtZTpbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAvLyAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLCBcclxuICAgIC8vICAgICAgICAgICAgIFVzZXJuYW1lVmFsaWRhdG9ycy5jYW5ub3RDb250YWluU3BhY2VcclxuICAgIC8vICAgICAgICAgXSldLFxyXG4gICAgLy8gICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vKDcuNzEpXHJcbiAgICAvL1VzaW5nIEZvcm1CdWlsZGVyICh0aGUgbW9yZSBjb21wYWN0IHdheSB0aGVuIGJlbG93IGluIDcuNzApXHJcbiAgICBmb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICAvLyg3LjcxKSgxKSB3ZSB1c2UgYSBwYXJhbWV0ZXIgb2YgdHlwZSBGb3JtQnVpbGRlciBhbmQgd2UgaW1wb3J0IGl0XHJcbiAgICBjb25zdHJ1Y3RvcihmYjpGb3JtQnVpbGRlcil7XHJcbiAgICAgICAgLy8oNy43MSkoMykgZmluYWxseSB3ZSBzdG9yZSB0aGUgdmFsdWVzIGludG8gb3VyIGZvcm0gcHJvcGVydHlcclxuICAgICAgICAvLyg3LjcxKSgzKSBmYi5ncm91cCBpcyBmb3IgY3JlYXRpbmcgYSBDb250cm9sR3JvdXAgT2JqZWN0XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAvLyg3LjcxKSgyKWVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgcmVwcmVzZW50cyBvbmUgb2YgdGhlIGVsZW1lbnRzIG9mIHRoZSBDb250cm9sR3JvdXAgQ2xhc3NcclxuICAgICAgICAgICAgdXNlcm5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZVZhbGlkYXRvcnMuY2Fubm90Q29udGFpblNwYWNlXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICAgICAgLy8oNy43MykgQXN5bmMgVmFsaWRhdG9yc1xyXG4gICAgICAgICAgICAgICAgLy90aGkgaXMgdGhlIDMtcmQgZWxlbWVudCBvZiB0aGUgYXJyYXkgYW5kIGl0J3MgdGhlIGFzeW5jIHZhbGlkYXRvciBmcm9tIHVzZXJuYW1lVmFsaWRhdG9ycy50c1xyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWVWYWxpZGF0b3JzLnNob3VsZEJlVW5pcXVlXSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyg3LjcwKVxyXG4gICAgLy9CdWlsZGluZyBhIEJhc2ljIEZvcm0gdGhhdCB3aWxsIHJldHVybiBhbiBlcnJvciBtZXNzYWdlIGlzIHRoZSB2YWx1ZSBpbiBpbnB1dCBib3ggaXMgJydcclxuICAgIC8vZm9ybXMgYnVpbHQgdGhpcyB3YXkgYXJlIGFsc28gY2FsbGVkIE1vZGVsLWRyaXZlbiBGb3Jtc1xyXG4gICAgZm9ybTMgPSBuZXcgQ29udHJvbEdyb3VwKHtcclxuICAgICAgICAvL0NvbnRyb2wgaGFzIDMgcG9ycGVydGllcyB1IGNhbiBzZWUgaWYgdSBob3ZlciBvdmVyIGl0OlxyXG4gICAgICAgIC8vMS4gdmFsdWU/IHdpdGNoIGlzIG9wdGlvbmFsIGJlY2F1c2UgaXQgaGFzIGEgJz8nIGFmdGVyIGl0IGFuZCB3ZSBzZXQgaXQgYXMgYW4gZW1wdHkgc3RyaW5nICcnXHJcbiAgICAgICAgLy8yLiB2YWxpZGF0b3I/IHNhbWUgaXMgb3B0aW9uYWwgd2UgdXNlIFZhbGlkYXRvcnMucmVxdWlyZWQgYW5kIHdlIGltcG9ydCBWYWxpZGF0b3JzIGNsYXNzXHJcbiAgICAgICAgLy8zLiBvbmUgb3IgbW9yZSBhc3luY3ZhbGlkYXRvcnM/IG9wdGlvbmFsIHdlIGRvbnQgdXNlIGl0IHlldFxyXG4gICAgICAgIHVzZXJuYW1lOiBuZXcgQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgcGFzc3dvcmQ6IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNpZ251cCgpe1xyXG4gICAgICAgIC8vKDcuNzUpIFZhbGlkYXRpbmcgVXBvbiBGb3JtIFN1Ym1pdCAoYm90aCBVc2VybmFtZSBhbmQgUGFzc3dvcmQpXHJcbiAgICAgICAgLy92YXIgcmVzdWx0ID0gYXV0aFNlcnZpY2UubG9naW4odGhpcy5mb3JtLnZhbHVlKTtcclxuICAgICAgICB0aGlzLmZvcm0uZmluZCgndXNlcm5hbWUnKS5zZXRFcnJvcnMoe1xyXG4gICAgICAgICAgICBpbnZhbGlkTG9naW46IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL3RoaXMgd2lsbCByZXR1cm4gYSBqc29uIG9iamVjdCB0aGF0IGluY2x1ZGVzIGFsbCB2YWx1ZXMgaW4gdGhlIGZvcm1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm0udmFsdWUpO1xyXG4gICAgfSAgICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
