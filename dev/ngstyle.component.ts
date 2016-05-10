import {Component} from 'angular2/core'

@Component({
    selector: 'ngstyle',
    template: `
        <button 
            [style.backgroundColor]="canSave ? 'blue' : 'gray'"
            [style.color]="canSave ? 'white' : 'black'"
            [style.fontWeight] = "canSave ? 'bold' : 'normal'"
            
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'gray', 
                color: canSave ? 'white' : 'black',
                fontWeight : canSave ? 'bold' : 'black'
            }"            
        >Submit</button>
    `
})

export class NgStyleComponent{
    canSave = true;    
}