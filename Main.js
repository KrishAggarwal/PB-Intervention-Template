app.config([
  "$stateProvider",
  "$locationProvider",
  "$urlRouterProvider",
  function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "./Routes/Home/Home.html",
        controller: "homeController",
        // resolve: {
        //   homeLoad: [
        //     "$ocLazyLoad",
        //     function ($ocLazyLoad) {
        //       return $ocLazyLoad.load("./Routes/Home/Home.js");
        //     },
        //   ],
        // },
      })
      .state("interventions", {
        url: "/interventions",
        templateUrl: "./Routes/Intervention/Intervention.html",
        controller: "interventionController",
      });
    $urlRouterProvider.otherwise("/interventions");

    // $locationProvider.html5Mode(true);
  },
]);
app.controller("myController", function ($scope) {
  $scope.navRouteHeading = [
    {
      icon: "fa-solid fa-house-user",
      name: "home",
      active: false,
    },
    {
      icon: "fa-solid fa-hourglass-start",
      name: "waiting rooms",
      active: false,
    },
    {
      icon: "fa-solid fa-users",
      name: "queues",
      active: false,
    },
    {
      icon: "fa-solid fa-comments",
      name: "messaging",
      active: false,
    },
    {
      icon: "fa-solid fa-building",
      name: "office visit",
      active: false,
    },
    {
      icon: "fa-solid fa-calendar-days",
      name: "calender",
      active: false,
    },
    {
      icon: "fa-solid fa-users-gear",
      name: "member search",
      active: false,
    },
    {
      icon: "fa-solid fa-gauge-high",
      name: "dashboard",
      active: false,
    },
    {
      icon: "fa-solid fa-chart-simple",
      name: "interventions",
      active: true,
    },
    {
      icon: "fa-solid fa-snowflake",
      name: "psychographics",
      active: false,
    },
  ];
  $scope.classActive = function (obj) {
    for (let i = 0; i < $scope.navRouteHeading.length; ++i)
      $scope.navRouteHeading[i].active = false;
    obj.active = true;
  }
});
