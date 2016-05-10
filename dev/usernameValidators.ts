import {Control} from 'angular2/common'

export class UsernameValidators{
    //(7.73) Async Validator
    static shouldBeUnique(control: Control){
        //(1) to make this work, instead of returning an object we need to return a promisse
        //we have a Promisse that takes to 2 parameters and return is after =>
        //setTimeout is imitating a server callback
        return new Promise((resolve, reject)=> {setTimeout(function(){
               if (control.value == "cris")
                    //when using a Promise function we call resolve to return a value 
                    //to the consumer of the Promise
                    resolve({ shouldBeUnique: true})
               else
                    resolve(null);
           }, 3000); 
        });
    }
    //(7.72) Custom Valdiator
    //(1) cannotContainSpace method will take a parameter of type Control and import the Control Class
    static cannotContainSpace(control: Control){
        //(2) if the validation rule is false, return null, 
        //(2) otherwise return an Ojbect and set it to true
        //(3) We have created a custom validator
        //now let's use it ... go to component and import usernameValidators
        if (control.value.indexOf(' ') >= 0)
            return {cannotContainSpace : true};        
        return null;
    }
}