import { Component } from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';

@Component({
    selector: 'changepassword-form',
    templateUrl: 'dev/ChangePasswordForm/changepassword-form.component.html'
})
export class ChangePaswordFormComponent {    
    changepasswordForm: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.changepasswordForm = fb.group({
            changepasswordForm: ['',Validators.compose([
                Validators.required
            ])]
        })    
    }
    
    changePassword(){
        console.log(this.changepasswordForm.value)
    }
}