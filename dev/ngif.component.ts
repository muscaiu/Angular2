import { Component} from 'angular2/core';

@Component({
    selector: 'ngif',
    template: `
        <div [hidden]="courses.length == 0">
            List of courses
        </div>
        
        <div [hidden]="courses.length > 0">
            You don't have any courses yet.
        </div>
    `
})
export class NgIfComponent {
    courses = [];
}