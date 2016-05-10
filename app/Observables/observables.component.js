/// <reference path="../../typings/tsd.d.ts" />
System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var ObservablesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            ObservablesComponent = (function () {
                function ObservablesComponent() {
                    //Using Reactive Extensions and Observables
                    var keyups = Rx_1.Observable.fromEvent($("#artistSearch"), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length >= 3; })
                        .debounceTime(400)
                        .distinctUntilChanged();
                    keyups.subscribe(function (data) { return console.log(data); });
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
                ObservablesComponent = __decorate([
                    core_1.Component({
                        selector: 'observables',
                        template: "\n        <input id=\"artistSearch\" \n        type=\"text\" \n        class=\"form-control\" \n        placeholder=\"search for artists...\">\n    ",
                        styles: ["\n        .observables{\n            padding: 50px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ObservablesComponent);
                return ObservablesComponent;
            }());
            exports_1("ObservablesComponent", ObservablesComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9ic2VydmFibGVzL29ic2VydmFibGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CL0M7Z0JBQ0k7b0JBQ0ksMkNBQTJDO29CQUMzQyxJQUFJLE1BQU0sR0FBRyxlQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBQyxPQUFPLENBQUM7eUJBQ3hELEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFkLENBQWMsQ0FBQzt5QkFDeEIsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQWhCLENBQWdCLENBQUM7eUJBQ2hDLFlBQVksQ0FBQyxHQUFHLENBQUM7eUJBQ2pCLG9CQUFvQixFQUFFLENBQUM7b0JBRTVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7b0JBRTVDLG1DQUFtQztvQkFDbkMsK0NBQStDO29CQUMvQywyRUFBMkU7b0JBQzNFLDBDQUEwQztvQkFDMUMsZ0NBQWdDO29CQUNoQyxVQUFVO29CQUNWLFdBQVc7b0JBRVgsbUNBQW1DO29CQUNuQyxpQ0FBaUM7b0JBQ2pDLDJCQUEyQjtvQkFDM0Isa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLE1BQU07Z0JBQ1YsQ0FBQztnQkF2Q0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHNKQUtUO3dCQUNELE1BQU0sRUFBQyxDQUFDLHNFQUlQLENBQUM7cUJBQ0wsQ0FBQzs7d0NBQUE7Z0JBMkJGLDJCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTtZQTFCRCx1REEwQkMsQ0FBQSIsImZpbGUiOiJPYnNlcnZhYmxlcy9vYnNlcnZhYmxlcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb2JzZXJ2YWJsZXMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8aW5wdXQgaWQ9XCJhcnRpc3RTZWFyY2hcIiBcclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGFydGlzdHMuLi5cIj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6W2BcclxuICAgICAgICAub2JzZXJ2YWJsZXN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVzQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vVXNpbmcgUmVhY3RpdmUgRXh0ZW5zaW9ucyBhbmQgT2JzZXJ2YWJsZXNcclxuICAgICAgICB2YXIga2V5dXBzID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoJChcIiNhcnRpc3RTZWFyY2hcIiksXCJrZXl1cFwiKVxyXG4gICAgICAgICAgICAubWFwKGUgPT4gZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIC5maWx0ZXIodGV4dCA9PiB0ZXh0Lmxlbmd0aCA+PSAzKVxyXG4gICAgICAgICAgICAuZGVib3VuY2VUaW1lKDQwMClcclxuICAgICAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAga2V5dXBzLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcclxuICAgICAgICBcclxuICAgICAgICAvL0JhZCBpbXBsZW1lbnRhdGlvbiAodXNpbmcgalF1ZXJ5OlxyXG4gICAgICAgIC8vIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgLy8gICAgIHZhciB1cmwgPSBcImh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3NlYXJjaD90eXBlPWFydGlzdCZxPVwiICsgdGV4dDtcclxuICAgICAgICAvLyAgICAgJC5nZXRKU09OKHVybCwgZnVuY3Rpb24gKGFydGlzdHMpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGFydGlzdHMpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9LCA0MDApO1xyXG5cclxuICAgICAgICAvLyAkKFwic2VhcmNoXCIpLmtleXVwKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciB0ZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gICAgIGlmICh0ZXh0Lmxlbmd0aCA8IDMpXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIGRlYm91bmNlZCh0ZXh0KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
