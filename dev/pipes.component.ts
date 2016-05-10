import { Component} from 'angular2/core';
import{SummaryPipe} from './summary.pipe'
@Component({
    selector: 'pipes',
    template:`
        {{ course.title | uppercase | lowercase }}
        <br>
        {{ course.students | number }}
        <br>
        {{ course.rating | number:'2.2-2' }}
        <br>
        {{ course.price | currency:'AUD':true:'2.2-2'}}
        <br>
        {{ course.releaseDate | date:'MMM yyyy' }}
        <br>
        {{ course  | json}}
        <br>
        <hr>
        {{ post.title }}
        <br>
        {{ post.body | summary:11}}
    `, 
    pipes:[SummaryPipe]
})
export class PipesComponent {
    //curtom pipes
    post = {
        title:"Custom Pipes",
        body:`
         Lorem ipsum dkj powq dpoqwdp qw
         qwdj pqwdj oqpwdj pqwjd
         oq dpoqwkjd poqwkj dpoqjwkpodjqpwo
        `
    }
    
    course= {
        title: "Angular2",
        students: 5981,
        rating: 4.974112,
        price: 99.95,
        releaseDate: new Date(2016, 4, 1)
    }
}