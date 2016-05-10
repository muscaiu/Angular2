import {Component} from'angular2/core'
import {CourseService} from './course.service'

@Component({
    selector:'courses',
    template:`
         <h3>{{title}}</h3> 
        
          <a href="#" class="list-group-item" *ngFor="#course of courses">
                {{course}}
            </a>

    `,
    providers:[CourseService],
})

export class CoursesComponent{ 
     title = 'CoursesComponent';     
     courses;  
     constructor(courseService:CourseService){
         this.courses = courseService.getCourses();
     }
}