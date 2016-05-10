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
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.totalLikes = 0;
                    this.iLike = true;
                }
                LikeComponent.prototype.Clicked = function () {
                    this.iLike = !this.iLike;
                    this.totalLikes += this.iLike ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "totalLikes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "iLike", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "\n    <span class=\"glyphicon glyphicon-heart\"\n          [class.highlighted]=\"iLike\"          \n          (click) = \"Clicked()\">          \n    </span>\n    {{totalLikes}}\n    ",
                        styles: ["\n        .glyphicon-heart{\n            cursor: pointer;\n            color: #ccc;\n       }\n        .highlighted{\n            color: deeppink;\n        }\n\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpa2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JBO2dCQUFBO29CQUNhLGVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ2YsVUFBSyxHQUFHLElBQUksQ0FBQztnQkFNMUIsQ0FBQztnQkFKRywrQkFBTyxHQUFQO29CQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO2dCQU5EO29CQUFDLFlBQUssRUFBRTs7aUVBQUE7Z0JBQ1I7b0JBQUMsWUFBSyxFQUFFOzs0REFBQTtnQkF0Qlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsTUFBTTt3QkFDaEIsUUFBUSxFQUFDLHlMQU1SO3dCQUNELE1BQU0sRUFBQyxDQUFDLHVLQVNQLENBQUM7cUJBQ0wsQ0FBQzs7aUNBQUE7Z0JBU0Ysb0JBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJELHlDQVFDLENBQUEiLCJmaWxlIjoibGlrZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlrZScsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24taGVhcnRcIlxyXG4gICAgICAgICAgW2NsYXNzLmhpZ2hsaWdodGVkXT1cImlMaWtlXCIgICAgICAgICAgXHJcbiAgICAgICAgICAoY2xpY2spID0gXCJDbGlja2VkKClcIj4gICAgICAgICAgXHJcbiAgICA8L3NwYW4+XHJcbiAgICB7e3RvdGFsTGlrZXN9fVxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5nbHlwaGljb24taGVhcnR7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICB9XHJcbiAgICAgICAgLmhpZ2hsaWdodGVke1xyXG4gICAgICAgICAgICBjb2xvcjogZGVlcHBpbms7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWtlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHRvdGFsTGlrZXMgPSAwO1xyXG4gICAgQElucHV0KCkgaUxpa2UgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBDbGlja2VkKCl7XHJcbiAgICAgICAgdGhpcy5pTGlrZSA9ICF0aGlzLmlMaWtlO1xyXG4gICAgICAgIHRoaXMudG90YWxMaWtlcyArPSB0aGlzLmlMaWtlID8gMSA6IC0xOyAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
