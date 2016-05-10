/// <reference path="../../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'observables',
    template: `
        <input id="artistSearch" 
        type="text" 
        class="form-control" 
        placeholder="search for artists...">
    `,
    styles:[`
        .observables{
            padding: 50px;
        }
    `]
})
export class ObservablesComponent {
    constructor() {
        //Using Reactive Extensions and Observables
        var keyups = Observable.fromEvent($("#artistSearch"),"keyup")
            .map(e => e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged();
        
        keyups.subscribe(data => console.log(data));
        
        //Bad implementation (using jQuery:
        // var debounced = _.debounce(function (text) {
        //     var url = "https://api.spotify.com/v1/search?type=artist&q=" + text;
        //     $.getJSON(url, function (artists) {
        //         console.log(artists);
        //     });
        // }, 400);

        // $("search").keyup(function (e) {
        //     var text = e.target.value;
        //     if (text.length < 3)
        //         return;
        //     debounced(text);
        // });
    }
}