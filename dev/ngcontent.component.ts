import {Component} from 'angular2/core'

@Component({
    selector:'ngcontent',
    template:`
        <div class="panel panel-default">            
            <div class="panel-heading">
                Heading from ngcontentComponent
                <ng-content select = ".heading"></ng-content>
            </div>
                        
            <div class="panel-body">
                Body from ngcontentComponent
                <ng-content select = ".body"></ng-content>
            </div>
        </div>
    `
})
//Inserting content into the template of our component from the outside:
export class NgContentComponent{
        
}