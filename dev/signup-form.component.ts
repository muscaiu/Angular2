import { Component } from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidators } from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'dev/signup-form.component.html'
})
export class SignupFormComponent {
    //(7.72) - throws errors for some reason :(
    // form: ControlGroup;
    // constructor(fb:FormBuilder){
    //     fb.group({
    //         //(7.72)(1) to use .required and .connotContainWhiteSpace we must use Validators.compose() metohd
    //         //(7.72)(2) in html add placeholder for the custom Validation
    //         username:['', Validators.compose([
    //             Validators.required, 
    //             UsernameValidators.cannotContainSpace
    //         ])],
    //         password: ['', Validators.required]
    //     })
    // }
    
    //(7.71)
    //Using FormBuilder (the more compact way then below in 7.70)
    form: ControlGroup;
    //(7.71)(1) we use a parameter of type FormBuilder and we import it
    constructor(fb:FormBuilder){
        //(7.71)(3) finally we store the values into our form property
        //(7.71)(3) fb.group is for creating a ControlGroup Object
        this.form = fb.group({
            //(7.71)(2)each element of the array represents one of the elements of the ControlGroup Class
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]),
                //(7.73) Async Validators
                //thi is the 3-rd element of the array and it's the async validator from usernameValidators.ts
                UsernameValidators.shouldBeUnique],
                
            password: ['', Validators.required]
            
        })
    }
    
    //(7.70)
    //Building a Basic Form that will return an error message is the value in input box is ''
    //forms built this way are also called Model-driven Forms
    form3 = new ControlGroup({
        //Control has 3 porperties u can see if u hover over it:
        //1. value? witch is optional because it has a '?' after it and we set it as an empty string ''
        //2. validator? same is optional we use Validators.required and we import Validators class
        //3. one or more asyncvalidators? optional we dont use it yet
        username: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });
    
    signup(){
        //(7.75) Validating Upon Form Submit (both Username and Password)
        //var result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });
        
        //this will return a json object that includes all values in the form
        console.log(this.form.value);
    }    
}