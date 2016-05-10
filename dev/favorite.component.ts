import {Component} from'angular2/core'
@Component ({
    selector:'favorite',
    template:`
        <i class="glyphicon"       
            [ngClass]="{
                'glyphicon-star-empty': !isFavorite,
                'glyphicon-star' : isFavorite
            }"
            (click)="OnClick()"> 
        </i>
    `,
    styles:[`
          .glyphicon-star{
              color: orange;
          }
    `]
})
export class FavoriteComponent{
    isFavorite = false;    
        OnClick(){
            this.isFavorite = !this.isFavorite;
            console.log(this.isFavorite);  
        }
}