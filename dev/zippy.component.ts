import { Component, Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
    <div class="zippy">
        <div 
            class="zippy-title"
            (click)="toggle()">
            {{ title }} 
            <i 
                class="pull-right glyphicon" 
                [ngClass]="
                    { 
                        'glyphicon-chevron-down': !isExpanded, 
                        'glyphicon-chevron-up': isExpanded 
                    }">
            </i>
        </div>
        
        <div *ngIf="isExpanded" class="zippy-content">
            <ng-content></ng-content> 
        </div>
    </div>
    `,
    styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }
    `],
})
export class ZippyComponent {
    isExpanded = false;
    @Input() title: string;
    
    toggle(){
        this.isExpanded = !this.isExpanded;
    }
    
}

//  <div class="panel-group">
//         <div class="panel panel-default">                            
//             <div class="panel-heading" 
//                 (click)="toggle()">
//                      Who can see my stuff?
                     
//                  <i class="glyphicon"
//                     [ngClass]="{
//                         'glyphicon-chevron-up': hideStuff,
//                         'glyphicon-chevron-down': !hideStuff
//                     }">
//                  </i>
                 
//             </div>
//             <div class="panel-body" *ngIf="hideStuff">Panel Body</div>
            
//             <div class="panel-heading" (click)="toggle()">
//                  Who can contact me?
//                 <i class="glyphicon"
//                     [class.glyphicon-chevron-up]="hideContact"
//                     [class.glyphicon-chevron-down]="!hideContact"
//                     >
//                 </i>
//             </div>             
//             <div class="panel-body animated swing" 
//                 *ngIf="hideContact">
//               Panel Body
//             </div>            
//         </div>
//     </div>