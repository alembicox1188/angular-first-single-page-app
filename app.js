var app = angular
  .module("singlePageApp", ['ngRoute']);
app .config([
  "$routeProvider",
  function($routeProvider){
    $routeProvider
    	.when('/',{
    	  templateUrl: "home.html",
        controller : "homeController"
      	})
      	.when('/page1',{
      	 templateUrl: "page1.html",
      	 controller : "page1Controller"
      	})
      	.otherwise({
      	 redirectTo : "/"
      	});
}]);

app.controller(
  "homeController", 
  ["$scope", 
  	function($scope){
  		$scope.message = "home page loaded";
    }
  ]
);

app.controller(
  "page1Controller", 
  ["$scope", 
  	function($scope){
  		$scope.message = "page one loaded";
    }
  ]
);
