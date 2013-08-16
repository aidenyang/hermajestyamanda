'use strict';

angular.module('hermajestyamandaApp')
  .controller('main-control', function ($scope, $http) {
  	$http({
		method: 'jsonp',
		url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyC5CN_SAp2quqY5VpExP7-7X3vomVMc8F4&cx=006334694207456473384:dpedvhja9em&searchType=image&q=queen+elizabeth&alt=json'
		})
	.success(function(data){
		console.log(data);
	})
  });
