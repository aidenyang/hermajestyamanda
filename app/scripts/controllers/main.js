'use strict';

angular.module('hermajestyamandaApp')

.controller('main-control', function ($scope, $http) {
	var promise = $http.jsonp('https://www.googleapis.com/customsearch/v1?key=AIzaSyC5CN_SAp2quqY5VpExP7-7X3vomVMc8F4&cx=006334694207456473384:dpedvhja9em&q=queen+elizabeth&alt=json&searchtype=image&callback=JSON_CALLBACK&num=1');
	promise.success(function(data){
		$scope.majestyurl = data.items[0].pagemap.cse_image[0];		
		console.log($scope.majestyurl);
	})

});

