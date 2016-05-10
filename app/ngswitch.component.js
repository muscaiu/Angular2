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
    var NgSwitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgSwitchComponent = (function () {
                function NgSwitchComponent() {
                    this.viewMode = 'map';
                }
                NgSwitchComponent = __decorate([
                    core_1.Component({
                        selector: 'ngswitch',
                        template: "\n        <ul class=\"nav nav-pills\">\n            <li [class.active]=\"viewMode == 'map'\"><a (click)=\"viewMode='map'\">Map View</a></li>\n            <li [class.active]=\"viewMode == 'list'\"><a (click)=\"viewMode='list'\">List View</a></li>\n        </ul>\n        \n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'map'\" ngSwitchDefault> Map View Content </template>\n            <template [ngSwitchWhen]=\"'list'\"> List View Content </template>\n       </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgSwitchComponent);
                return NgSwitchComponent;
            }());
            exports_1("NgSwitchComponent", NgSwitchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBQTtvQkFDSSxhQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixDQUFDO2dCQWhCRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUMsMGZBVVI7cUJBQ0osQ0FBQzs7cUNBQUE7Z0JBR0Ysd0JBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELGlEQUVDLENBQUEiLCJmaWxlIjoibmdzd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmdzd2l0Y2gnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtcGlsbHNcIj5cclxuICAgICAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwidmlld01vZGUgPT0gJ21hcCdcIj48YSAoY2xpY2spPVwidmlld01vZGU9J21hcCdcIj5NYXAgVmlldzwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJ2aWV3TW9kZSA9PSAnbGlzdCdcIj48YSAoY2xpY2spPVwidmlld01vZGU9J2xpc3QnXCI+TGlzdCBWaWV3PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJ2aWV3TW9kZVwiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInbWFwJ1wiIG5nU3dpdGNoRGVmYXVsdD4gTWFwIFZpZXcgQ29udGVudCA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInbGlzdCdcIj4gTGlzdCBWaWV3IENvbnRlbnQgPC90ZW1wbGF0ZT5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdTd2l0Y2hDb21wb25lbnQge1xyXG4gICAgdmlld01vZGUgPSAnbWFwJzsgICAgXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
