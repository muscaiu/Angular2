System.register(['angular2/core', './course.service'], function(exports_1, context_1) {
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
    var core_1, course_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = 'CoursesComponent';
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n         <h3>{{title}}</h3> \n        \n          <a href=\"#\" class=\"list-group-item\" *ngFor=\"#course of courses\">\n                {{course}}\n            </a>\n\n    ",
                        providers: [course_service_1.CourseService],
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUdLLDBCQUFZLGFBQTJCO29CQUZ2QyxVQUFLLEdBQUcsa0JBQWtCLENBQUM7b0JBR3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM5QyxDQUFDO2dCQWxCTjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBQyxTQUFTO3dCQUNsQixRQUFRLEVBQUMsa0xBT1I7d0JBQ0QsU0FBUyxFQUFDLENBQUMsOEJBQWEsQ0FBQztxQkFDNUIsQ0FBQzs7b0NBQUE7Z0JBUUYsdUJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELCtDQU1DLENBQUEiLCJmaWxlIjoiY291cnNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSdhbmd1bGFyMi9jb3JlJ1xyXG5pbXBvcnQge0NvdXJzZVNlcnZpY2V9IGZyb20gJy4vY291cnNlLnNlcnZpY2UnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidjb3Vyc2VzJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICAgPGgzPnt7dGl0bGV9fTwvaDM+IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiICpuZ0Zvcj1cIiNjb3Vyc2Ugb2YgY291cnNlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tjb3Vyc2V9fVxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgYCxcclxuICAgIHByb3ZpZGVyczpbQ291cnNlU2VydmljZV0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ291cnNlc0NvbXBvbmVudHsgXHJcbiAgICAgdGl0bGUgPSAnQ291cnNlc0NvbXBvbmVudCc7ICAgICBcclxuICAgICBjb3Vyc2VzOyAgXHJcbiAgICAgY29uc3RydWN0b3IoY291cnNlU2VydmljZTpDb3Vyc2VTZXJ2aWNlKXtcclxuICAgICAgICAgdGhpcy5jb3Vyc2VzID0gY291cnNlU2VydmljZS5nZXRDb3Vyc2VzKCk7XHJcbiAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
