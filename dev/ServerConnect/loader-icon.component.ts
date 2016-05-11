import { Component} from 'angular2/core';

@Component({
    selector: 'loader-icon',
    template: `
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
    `
})
export class LoaderIconComponent {
       
}