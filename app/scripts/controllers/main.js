'use strict';

angular.module('hermajestyamandaApp')

.controller('main-control', function ($scope, $http) {
	$scope.notReady = true;
	$scope.bynestweet = "loading...";
	$scope.randompicindex = Math.floor((Math.random()*10)+0);

	var params= {
		screen_name:"amandabynes",
		include_rts: "false",
		count: "200"
	};

	var cb = new Codebird;
	cb.setConsumerKey("7SPZ0zOMFBzGh6zgQf3Jg", "guB52d3iXKGLxR8wt9AVt4TyNujp9UvkHY64yRM");
	
	cb.__call(
		"oauth2_token",
		{},
		function (reply) {
			var bearer_token = reply.access_token;
			cb.setBearerToken(bearer_token);
		}
		);	
	cb.__call(
		"statuses_userTimeline",
		params,
		function(data){
			$scope.tweets = [];
			$scope.timelinelength = data.length;
			for (var i=0; i<$scope.timelinelength; i++){
				$scope.tweets.push(data[i].text);	
			}
			$scope.randompicindex = Math.floor((Math.random()*10)+0);
			$scope.randomtweetindex = Math.floor((Math.random()*$scope.timelinelength)+0);
			$scope.bynestweet = $scope.tweets[$scope.randomtweetindex];
			$scope.notReady = false;
			$scope.$apply();
			
		}, 
		true
		);
	$scope.newpair = function(){
		$scope.randompicindex = Math.floor((Math.random()*10)+0);
		$scope.randomtweetindex = Math.floor((Math.random()*$scope.timelinelength)+0);
		$scope.bynestweet = $scope.bynestweet = $scope.tweets[$scope.randomtweetindex];

	}


});

