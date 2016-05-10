System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            author: "Windward",
                            handle: "@windwardstudios",
                            body: "Looking for a better company reporting or docgen app?",
                            totalLikes: 0,
                            iLike: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?2",
                            author: "AngularJS News",
                            handle: "@angularjs_news",
                            body: "Right Relevance : Influencers, Articles and Conversations ",
                            totalLikes: 5,
                            iLike: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?3",
                            author: "UX & Bootstrap",
                            handle: "@3rdwave",
                            body: "10 Reasons Why Web Projects Fail ",
                            totalLikes: 1,
                            iLike: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people?1",
                            author: "w000t",
                            handle: "@w00t",
                            body: "This is fun!",
                            totalLikes: 1000,
                            iLike: true
                        }];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR3ZWV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQW9DQSxDQUFDO2dCQW5DRyxnQ0FBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQzt3QkFDUDs0QkFDSSxRQUFRLEVBQUUsd0NBQXdDOzRCQUNsRCxNQUFNLEVBQUUsVUFBVTs0QkFDbEIsTUFBTSxFQUFFLGtCQUFrQjs0QkFDMUIsSUFBSSxFQUFFLHVEQUF1RDs0QkFDN0QsVUFBVSxFQUFFLENBQUM7NEJBQ2IsS0FBSyxFQUFFLEtBQUs7eUJBQ2Y7d0JBQ0Q7NEJBQ0ksUUFBUSxFQUFFLHdDQUF3Qzs0QkFDbEQsTUFBTSxFQUFFLGdCQUFnQjs0QkFDeEIsTUFBTSxFQUFFLGlCQUFpQjs0QkFDekIsSUFBSSxFQUFFLDREQUE0RDs0QkFDbEUsVUFBVSxFQUFFLENBQUM7NEJBQ2IsS0FBSyxFQUFFLElBQUk7eUJBQ2Q7d0JBQ0Q7NEJBQ0ksUUFBUSxFQUFFLHdDQUF3Qzs0QkFDbEQsTUFBTSxFQUFFLGdCQUFnQjs0QkFDeEIsTUFBTSxFQUFFLFVBQVU7NEJBQ2xCLElBQUksRUFBRSxtQ0FBbUM7NEJBQ3pDLFVBQVUsRUFBRSxDQUFDOzRCQUNiLEtBQUssRUFBRSxJQUFJO3lCQUNkO3dCQUNEOzRCQUNJLFFBQVEsRUFBRSx3Q0FBd0M7NEJBQ2xELE1BQU0sRUFBRSxPQUFPOzRCQUNmLE1BQU0sRUFBRSxPQUFPOzRCQUNmLElBQUksRUFBRSxjQUFjOzRCQUNwQixVQUFVLEVBQUUsSUFBSTs0QkFDaEIsS0FBSyxFQUFFLElBQUk7eUJBQ2QsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBQ0wsbUJBQUM7WUFBRCxDQXBDQSxBQW9DQyxJQUFBO1lBcENELHVDQW9DQyxDQUFBIiwiZmlsZSI6InR3ZWV0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVHdlZXRTZXJ2aWNle1xyXG4gICAgZ2V0VHdlZXRzKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzEwMC8xMDAvcGVvcGxlPzFcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIldpbmR3YXJkXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZTogXCJAd2luZHdhcmRzdHVkaW9zXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IFwiTG9va2luZyBmb3IgYSBiZXR0ZXIgY29tcGFueSByZXBvcnRpbmcgb3IgZG9jZ2VuIGFwcD9cIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogMCxcclxuICAgICAgICAgICAgaUxpa2U6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICBpbWFnZVVybDogXCJodHRwOi8vbG9yZW1waXhlbC5jb20vMTAwLzEwMC9wZW9wbGU/MlwiLFxyXG4gICAgICAgICAgICBhdXRob3I6IFwiQW5ndWxhckpTIE5ld3NcIixcclxuICAgICAgICAgICAgaGFuZGxlOiBcIkBhbmd1bGFyanNfbmV3c1wiLFxyXG4gICAgICAgICAgICBib2R5OiBcIlJpZ2h0IFJlbGV2YW5jZSA6IEluZmx1ZW5jZXJzLCBBcnRpY2xlcyBhbmQgQ29udmVyc2F0aW9ucyBcIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogNSxcclxuICAgICAgICAgICAgaUxpa2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiBcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS8xMDAvMTAwL3Blb3BsZT8zXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJVWCAmIEJvb3RzdHJhcFwiLFxyXG4gICAgICAgICAgICBoYW5kbGU6IFwiQDNyZHdhdmVcIixcclxuICAgICAgICAgICAgYm9keTogXCIxMCBSZWFzb25zIFdoeSBXZWIgUHJvamVjdHMgRmFpbCBcIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogMSxcclxuICAgICAgICAgICAgaUxpa2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiBcImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS8xMDAvMTAwL3Blb3BsZT8xXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJ3MDAwdFwiLFxyXG4gICAgICAgICAgICBoYW5kbGU6IFwiQHcwMHRcIixcclxuICAgICAgICAgICAgYm9keTogXCJUaGlzIGlzIGZ1biFcIixcclxuICAgICAgICAgICAgdG90YWxMaWtlczogMTAwMCxcclxuICAgICAgICAgICAgaUxpa2U6IHRydWVcclxuICAgICAgICB9XTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
