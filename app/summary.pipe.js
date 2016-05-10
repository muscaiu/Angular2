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
    var SummaryPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SummaryPipe = (function () {
                function SummaryPipe() {
                }
                SummaryPipe.prototype.transform = function (value, args) {
                    //THIS MEANS if we have args and args has an element we parse that element to an integer and return it
                    var limit = (args && args[0]) ? parseInt(args[0]) : 50;
                    if (value)
                        return value.substring(0, limit) + "...";
                };
                SummaryPipe = __decorate([
                    core_1.Pipe({ name: 'summary' }), 
                    __metadata('design:paramtypes', [])
                ], SummaryPipe);
                return SummaryPipe;
            }());
            exports_1("SummaryPipe", SummaryPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQU9BLENBQUM7Z0JBTkcsK0JBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFjO29CQUNuQyxzR0FBc0c7b0JBQ3RHLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxFQUFFLENBQUM7b0JBQ3RELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQzt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNoRCxDQUFDO2dCQVJMO29CQUFDLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQzs7K0JBQUE7Z0JBU3hCLGtCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCxxQ0FPQyxDQUFBIiwiZmlsZSI6InN1bW1hcnkucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5AUGlwZSh7bmFtZTogJ3N1bW1hcnknfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdW1tYXJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogc3RyaW5nW10pe1xyXG4gICAgICAgIC8vVEhJUyBNRUFOUyBpZiB3ZSBoYXZlIGFyZ3MgYW5kIGFyZ3MgaGFzIGFuIGVsZW1lbnQgd2UgcGFyc2UgdGhhdCBlbGVtZW50IHRvIGFuIGludGVnZXIgYW5kIHJldHVybiBpdFxyXG4gICAgICAgIHZhciBsaW1pdCA9IChhcmdzICYmIGFyZ3NbMF0pID8gcGFyc2VJbnQoYXJnc1swXSk6IDUwO1xyXG4gICAgICAgIGlmKHZhbHVlKSBcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygwLGxpbWl0KSArIFwiLi4uXCI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
