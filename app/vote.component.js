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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.myVote = 0;
                    this.voteCount = 0;
                }
                // @Output() vote = new EventEmitter;
                VoteComponent.prototype.upVote = function () {
                    if (this.myVote == 1)
                        return;
                    this.myVote++;
                    // this.vote.emit({myVote: this.myVote});
                };
                VoteComponent.prototype.downVote = function () {
                    if (this.myVote == -1)
                        return;
                    this.myVote--;
                    // this.vote.emit({myVote: this.myVote});
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voteCount", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n        <div class=\"colors\">\n            <i class=\"glyphicon glyphicon-menu-up arrow\"\n               [class.highlighted]=\"myVote == 1\"\n               (click) = \"upVote()\">\n            </i>\n            \n            {{myVote + voteCount}}\n            \n            <i class=\"glyphicon glyphicon-menu-down arrow\"\n               [class.highlighted]=\"myVote == -1\"\n               (click) = \"downVote()\">\n            </i>\n        </div>\n    ",
                        styles: ["\n        .arrow{\n            cursor:pointer;\n        }\n        .highlighted{\n            color:orange;\n        }\n        .colors{\n            color:gray;\n            width:20px;            \n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0NBO2dCQUFBO29CQUNhLFdBQU0sR0FBRyxDQUFDLENBQUM7b0JBQ1osY0FBUyxHQUFHLENBQUMsQ0FBQztnQkFjMUIsQ0FBQztnQkFaRSxxQ0FBcUM7Z0JBRXBDLDhCQUFNLEdBQU47b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7d0JBQUEsTUFBTSxDQUFDO29CQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ2YseUNBQXlDO2dCQUM1QyxDQUFDO2dCQUNELGdDQUFRLEdBQVI7b0JBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFBQSxNQUFNLENBQUM7b0JBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDZix5Q0FBeUM7Z0JBQzVDLENBQUM7Z0JBZEQ7b0JBQUMsWUFBSyxFQUFFOzs2REFBQTtnQkFDUjtvQkFBQyxZQUFLLEVBQUU7O2dFQUFBO2dCQWhDWjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUsaWRBY1Q7d0JBQ0QsTUFBTSxFQUFDLENBQUMseU5BV1AsQ0FBQztxQkFDTCxDQUFDOztpQ0FBQTtnQkFpQkYsb0JBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELHlDQWdCQyxDQUFBIiwiZmlsZSI6InZvdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2b3RlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvcnNcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1lbnUtdXAgYXJyb3dcIlxyXG4gICAgICAgICAgICAgICBbY2xhc3MuaGlnaGxpZ2h0ZWRdPVwibXlWb3RlID09IDFcIlxyXG4gICAgICAgICAgICAgICAoY2xpY2spID0gXCJ1cFZvdGUoKVwiPlxyXG4gICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7e215Vm90ZSArIHZvdGVDb3VudH19XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbWVudS1kb3duIGFycm93XCJcclxuICAgICAgICAgICAgICAgW2NsYXNzLmhpZ2hsaWdodGVkXT1cIm15Vm90ZSA9PSAtMVwiXHJcbiAgICAgICAgICAgICAgIChjbGljaykgPSBcImRvd25Wb3RlKClcIj5cclxuICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5hcnJvd3tcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oaWdobGlnaHRlZHtcclxuICAgICAgICAgICAgY29sb3I6b3JhbmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sb3Jze1xyXG4gICAgICAgICAgICBjb2xvcjpncmF5O1xyXG4gICAgICAgICAgICB3aWR0aDoyMHB4OyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWb3RlQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG15Vm90ZSA9IDA7XHJcbiAgICBASW5wdXQoKXZvdGVDb3VudCA9IDA7XHJcbiAgICBcclxuICAgLy8gQE91dHB1dCgpIHZvdGUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgXHJcbiAgICB1cFZvdGUoKXtcclxuICAgICAgICBpZiAodGhpcy5teVZvdGUgPT0gMSlyZXR1cm47XHJcbiAgICAgICAgdGhpcy5teVZvdGUrKztcclxuICAgICAgIC8vIHRoaXMudm90ZS5lbWl0KHtteVZvdGU6IHRoaXMubXlWb3RlfSk7XHJcbiAgICB9XHJcbiAgICBkb3duVm90ZSgpe1xyXG4gICAgICAgIGlmKHRoaXMubXlWb3RlID09IC0xKXJldHVybjtcclxuICAgICAgICB0aGlzLm15Vm90ZS0tO1xyXG4gICAgICAgLy8gdGhpcy52b3RlLmVtaXQoe215Vm90ZTogdGhpcy5teVZvdGV9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
