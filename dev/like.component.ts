import { Component, Input } from 'angular2/core';

@Component({
    selector: 'like',
    template:`
    <span class="glyphicon glyphicon-heart"
          [class.highlighted]="iLike"          
          (click) = "Clicked()">          
    </span>
    {{totalLikes}}
    `,
    styles:[`
        .glyphicon-heart{
            cursor: pointer;
            color: #ccc;
       }
        .highlighted{
            color: deeppink;
        }

    `]
})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() iLike = true;
    
    Clicked(){
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;               
    }
}