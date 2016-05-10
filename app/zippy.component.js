System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.isExpanded = false;
                }
                ZippyComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n    <div class=\"zippy\">\n        <div \n            class=\"zippy-title\"\n            (click)=\"toggle()\">\n            {{ title }} \n            <i \n                class=\"pull-right glyphicon\" \n                [ngClass]=\"\n                    { \n                        'glyphicon-chevron-down': !isExpanded, \n                        'glyphicon-chevron-up': isExpanded \n                    }\">\n            </i>\n        </div>\n        \n        <div *ngIf=\"isExpanded\" class=\"zippy-content\">\n            <ng-content></ng-content> \n        </div>\n    </div>\n    ",
                        styles: ["\n        .zippy {\n            border: 1px solid #ccc;\n            border-radius: 2px;\n        }\n        \n        .zippy .zippy-title {\n            padding: 20px;\n            font-weight: bold;\n        }\n        \n        .zippy .zippy-title:hover{\n            background: #f0f0f0;\n            cursor: pointer;\n        }\n        \n        .zippy .zippy-content {\n            padding: 20px;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppcHB5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQThDQTtnQkFBQTtvQkFDSSxlQUFVLEdBQUcsS0FBSyxDQUFDO2dCQU92QixDQUFDO2dCQUpHLCtCQUFNLEdBQU47b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBSkQ7b0JBQUMsWUFBSyxFQUFFOzs2REFBQTtnQkE5Q1o7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLDhrQkFvQlQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsc2FBbUJSLENBQUM7cUJBQ0wsQ0FBQzs7a0NBQUE7Z0JBU0YscUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELDJDQVFDLENBQUE7Ozs7QUFFRCw2QkFBNkI7QUFDN0Isd0VBQXdFO0FBQ3hFLDBDQUEwQztBQUMxQyxzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBRTdDLHdDQUF3QztBQUN4QyxtQ0FBbUM7QUFDbkMsNkRBQTZEO0FBQzdELCtEQUErRDtBQUMvRCwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBRXhCLHFCQUFxQjtBQUNyQix5RUFBeUU7QUFFekUsNkRBQTZEO0FBQzdELHVDQUF1QztBQUN2Qyx1Q0FBdUM7QUFDdkMsaUVBQWlFO0FBQ2pFLG9FQUFvRTtBQUNwRSx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLGtDQUFrQztBQUNsQyxzREFBc0Q7QUFDdEQsdUNBQXVDO0FBQ3ZDLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsaUJBQWlCO0FBQ2pCLGFBQWEiLCJmaWxlIjoiemlwcHkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnemlwcHknLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ6aXBweVwiPlxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiemlwcHktdGl0bGVcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKClcIj5cclxuICAgICAgICAgICAge3sgdGl0bGUgfX0gXHJcbiAgICAgICAgICAgIDxpIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwdWxsLXJpZ2h0IGdseXBoaWNvblwiIFxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dseXBoaWNvbi1jaGV2cm9uLWRvd24nOiAhaXNFeHBhbmRlZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdnbHlwaGljb24tY2hldnJvbi11cCc6IGlzRXhwYW5kZWQgXHJcbiAgICAgICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImlzRXhwYW5kZWRcIiBjbGFzcz1cInppcHB5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuemlwcHkge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC56aXBweSAuemlwcHktdGl0bGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnppcHB5IC56aXBweS10aXRsZTpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuemlwcHkgLnppcHB5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgWmlwcHlDb21wb25lbnQge1xyXG4gICAgaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICAgIFxyXG4gICAgdG9nZ2xlKCl7XHJcbiAgICAgICAgdGhpcy5pc0V4cGFuZGVkID0gIXRoaXMuaXNFeHBhbmRlZDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4vLyAgPGRpdiBjbGFzcz1cInBhbmVsLWdyb3VwXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCIgXHJcbi8vICAgICAgICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlKClcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgV2hvIGNhbiBzZWUgbXkgc3R1ZmY/XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICdnbHlwaGljb24tY2hldnJvbi11cCc6IGhpZGVTdHVmZixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgJ2dseXBoaWNvbi1jaGV2cm9uLWRvd24nOiAhaGlkZVN0dWZmXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJoaWRlU3R1ZmZcIj5QYW5lbCBCb2R5PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgIFdobyBjYW4gY29udGFjdCBtZT9cclxuLy8gICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICBbY2xhc3MuZ2x5cGhpY29uLWNoZXZyb24tdXBdPVwiaGlkZUNvbnRhY3RcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5nbHlwaGljb24tY2hldnJvbi1kb3duXT1cIiFoaWRlQ29udGFjdFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9pPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5IGFuaW1hdGVkIHN3aW5nXCIgXHJcbi8vICAgICAgICAgICAgICAgICAqbmdJZj1cImhpZGVDb250YWN0XCI+XHJcbi8vICAgICAgICAgICAgICAgUGFuZWwgQm9keVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
