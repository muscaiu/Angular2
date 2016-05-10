import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div class="colors">
            <i class="glyphicon glyphicon-menu-up arrow"
               [class.highlighted]="myVote == 1"
               (click) = "upVote()">
            </i>
            
            {{myVote + voteCount}}
            
            <i class="glyphicon glyphicon-menu-down arrow"
               [class.highlighted]="myVote == -1"
               (click) = "downVote()">
            </i>
        </div>
    `,
    styles:[`
        .arrow{
            cursor:pointer;
        }
        .highlighted{
            color:orange;
        }
        .colors{
            color:gray;
            width:20px;            
        }
    `]
})
export class VoteComponent {
    @Input() myVote = 0;
    @Input()voteCount = 0;
    
   // @Output() vote = new EventEmitter;
    
    upVote(){
        if (this.myVote == 1)return;
        this.myVote++;
       // this.vote.emit({myVote: this.myVote});
    }
    downVote(){
        if(this.myVote == -1)return;
        this.myVote--;
       // this.vote.emit({myVote: this.myVote});
    }
}