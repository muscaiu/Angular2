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
    var SubscriptionFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SubscriptionFormComponent = (function () {
                function SubscriptionFormComponent() {
                    this.frequencies = [
                        { id: 1, label: 'Daily' },
                        { id: 2, label: 'Weekly' },
                        { id: 3, label: 'Monthly' }
                    ];
                }
                SubscriptionFormComponent.prototype.onSubscribe = function (form) {
                    console.log(form.value);
                };
                SubscriptionFormComponent = __decorate([
                    core_1.Component({
                        selector: 'subscription-form',
                        templateUrl: 'dev/subscription-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], SubscriptionFormComponent);
                return SubscriptionFormComponent;
            }());
            exports_1("SubscriptionFormComponent", SubscriptionFormComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmlwdGlvbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBO29CQUNJLGdCQUFXLEdBQUc7d0JBQ1YsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7d0JBQ3pCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO3dCQUMxQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtxQkFDOUIsQ0FBQztnQkFLTixDQUFDO2dCQUhHLCtDQUFXLEdBQVgsVUFBWSxJQUFJO29CQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixDQUFDO2dCQWJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjt3QkFDN0IsV0FBVyxFQUFFLHNDQUFzQztxQkFDdEQsQ0FBQzs7NkNBQUE7Z0JBV0YsZ0NBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELGlFQVVDLENBQUEiLCJmaWxlIjoic3Vic2NyaXB0aW9uLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3Vic2NyaXB0aW9uLWZvcm0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdkZXYvc3Vic2NyaXB0aW9uLWZvcm0uY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb25Gb3JtQ29tcG9uZW50IHtcclxuICAgIGZyZXF1ZW5jaWVzID0gW1xyXG4gICAgICAgIHsgaWQ6IDEsIGxhYmVsOiAnRGFpbHknIH0sIFxyXG4gICAgICAgIHsgaWQ6IDIsIGxhYmVsOiAnV2Vla2x5JyB9LFxyXG4gICAgICAgIHsgaWQ6IDMsIGxhYmVsOiAnTW9udGhseScgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgb25TdWJzY3JpYmUoZm9ybSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybS52YWx1ZSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
