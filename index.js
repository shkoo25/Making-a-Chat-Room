var app = angular.module("chatRoomApp", []) 

	

	app.controller("chatController", function($scope, $http, $interval){
		
		var messageUpdate = function(){
		$http.get("https://tiy-chat-server.herokuapp.com/messages/recent")
			.success(function(data){ 
				$scope.texts = data 
				console.log($scope.texts)
			})
		}
		messageUpdate();
		$interval(messageUpdate, 2000)

	})

	app.controller("userAreaController", function($scope,$http,$interval){
		$http.get("https://tiy-chat-server.herokuapp.com/user")
		.success(function(data){
			$scope.users = data
			console.log($scope.users)
		})

	})

	app.controller("messageController", function($scope,$http,$interval){

		$scope.clickEnter = function() {
			$http.post("https://tiy-chat-server.herokuapp.com/message", {
				text: $scope.message, 
				user_id: "Steve"
			})
			.success(function(data){
				$scope.water = data
			})
		}
		

	})

	app.controller("userSelectController", function($scope,$http,$interval){

		$scope.clickAdd = function() {
			$http.post("https://tiy-chat-server.herokuapp.com/user",{
				username:$scope.username,
				fullname:$scope.fullname,
				status: $scope.status,
			})
			.success(function(data){
				$scope.user = data
			})

		}
	})



