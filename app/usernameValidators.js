System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                //(7.73) Async Validator
                UsernameValidators.shouldBeUnique = function (control) {
                    //(1) to make this work, instead of returning an object we need to return a promisse
                    //we have a Promisse that takes to 2 parameters and return is after =>
                    //setTimeout is imitating a server callback
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "cris")
                                //when using a Promise function we call resolve to return a value 
                                //to the consumer of the Promise
                                resolve({ shouldBeUnique: true });
                            else
                                resolve(null);
                        }, 3000);
                    });
                };
                //(7.72) Custom Valdiator
                //(1) cannotContainSpace method will take a parameter of type Control and import the Control Class
                UsernameValidators.cannotContainSpace = function (control) {
                    //(2) if the validation rule is false, return null, 
                    //(2) otherwise return an Ojbect and set it to true
                    //(3) We have created a custom validator
                    //now let's use it ... go to component and import usernameValidators
                    if (control.value.indexOf(' ') >= 0)
                        return { cannotContainSpace: true };
                    return null;
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJuYW1lVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUE7Z0JBQUE7Z0JBMkJBLENBQUM7Z0JBMUJHLHdCQUF3QjtnQkFDakIsaUNBQWMsR0FBckIsVUFBc0IsT0FBZ0I7b0JBQ2xDLG9GQUFvRjtvQkFDcEYsc0VBQXNFO29CQUN0RSwyQ0FBMkM7b0JBQzNDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUFLLFVBQVUsQ0FBQzs0QkFDNUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7Z0NBQ3ZCLGtFQUFrRTtnQ0FDbEUsZ0NBQWdDO2dDQUNoQyxPQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTs0QkFDckMsSUFBSTtnQ0FDQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDWixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELHlCQUF5QjtnQkFDekIsa0dBQWtHO2dCQUMzRixxQ0FBa0IsR0FBekIsVUFBMEIsT0FBZ0I7b0JBQ3RDLG9EQUFvRDtvQkFDcEQsbURBQW1EO29CQUNuRCx3Q0FBd0M7b0JBQ3hDLG9FQUFvRTtvQkFDcEUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsRUFBQyxrQkFBa0IsRUFBRyxJQUFJLEVBQUMsQ0FBQztvQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFDTCx5QkFBQztZQUFELENBM0JBLEFBMkJDLElBQUE7WUEzQkQsbURBMkJDLENBQUEiLCJmaWxlIjoidXNlcm5hbWVWYWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sfSBmcm9tICdhbmd1bGFyMi9jb21tb24nXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlcm5hbWVWYWxpZGF0b3Jze1xyXG4gICAgLy8oNy43MykgQXN5bmMgVmFsaWRhdG9yXHJcbiAgICBzdGF0aWMgc2hvdWxkQmVVbmlxdWUoY29udHJvbDogQ29udHJvbCl7XHJcbiAgICAgICAgLy8oMSkgdG8gbWFrZSB0aGlzIHdvcmssIGluc3RlYWQgb2YgcmV0dXJuaW5nIGFuIG9iamVjdCB3ZSBuZWVkIHRvIHJldHVybiBhIHByb21pc3NlXHJcbiAgICAgICAgLy93ZSBoYXZlIGEgUHJvbWlzc2UgdGhhdCB0YWtlcyB0byAyIHBhcmFtZXRlcnMgYW5kIHJldHVybiBpcyBhZnRlciA9PlxyXG4gICAgICAgIC8vc2V0VGltZW91dCBpcyBpbWl0YXRpbmcgYSBzZXJ2ZXIgY2FsbGJhY2tcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PiB7c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PSBcImNyaXNcIilcclxuICAgICAgICAgICAgICAgICAgICAvL3doZW4gdXNpbmcgYSBQcm9taXNlIGZ1bmN0aW9uIHdlIGNhbGwgcmVzb2x2ZSB0byByZXR1cm4gYSB2YWx1ZSBcclxuICAgICAgICAgICAgICAgICAgICAvL3RvIHRoZSBjb25zdW1lciBvZiB0aGUgUHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzaG91bGRCZVVuaXF1ZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgIH0sIDMwMDApOyBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vKDcuNzIpIEN1c3RvbSBWYWxkaWF0b3JcclxuICAgIC8vKDEpIGNhbm5vdENvbnRhaW5TcGFjZSBtZXRob2Qgd2lsbCB0YWtlIGEgcGFyYW1ldGVyIG9mIHR5cGUgQ29udHJvbCBhbmQgaW1wb3J0IHRoZSBDb250cm9sIENsYXNzXHJcbiAgICBzdGF0aWMgY2Fubm90Q29udGFpblNwYWNlKGNvbnRyb2w6IENvbnRyb2wpe1xyXG4gICAgICAgIC8vKDIpIGlmIHRoZSB2YWxpZGF0aW9uIHJ1bGUgaXMgZmFsc2UsIHJldHVybiBudWxsLCBcclxuICAgICAgICAvLygyKSBvdGhlcndpc2UgcmV0dXJuIGFuIE9qYmVjdCBhbmQgc2V0IGl0IHRvIHRydWVcclxuICAgICAgICAvLygzKSBXZSBoYXZlIGNyZWF0ZWQgYSBjdXN0b20gdmFsaWRhdG9yXHJcbiAgICAgICAgLy9ub3cgbGV0J3MgdXNlIGl0IC4uLiBnbyB0byBjb21wb25lbnQgYW5kIGltcG9ydCB1c2VybmFtZVZhbGlkYXRvcnNcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZS5pbmRleE9mKCcgJykgPj0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHtjYW5ub3RDb250YWluU3BhY2UgOiB0cnVlfTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
