import {Component} from 'angular2/core'

@Component({
    selector:'elvisoperator',
    template:`
         {{task.title}} <br>
         {{task.asigneee?.name}}
        `    
})

export class ElvisOperatorComponent{
    task={
        title:"Elvis Operator",
        asigneee: null
        //{
            //name:"Cris"
        //}
    }
}