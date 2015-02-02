var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, firebaseService){
	$scope.getData = function() {
		$scope.questions = firebaseService.getQuestions().$asArray();
		console.log($scope.questions);
	}
	$scope.postData = function(){
		var obj = {}
		obj.question = $scope.question;
		obj.color = 'red';
		$scope.questions.$add(obj);
		$scope.question = '';
	}
	$scope.updateData = function(obj) {
		for(var i = 0; i < $scope.questions.length; i++){
			if($scope.questions[i].$id === obj.$id){
				$scope.questions[i].color = 'yellow';
				$scope.questions.$save(obj);
				return;				
			}
		}
	}
	$scope.deleteData = function(obj) {
		for(var i = 0; i < $scope.questions.length; i++){
			if($scope.questions[i].$id === obj.$id){
				$scope.questions.$remove(i);
				return;				
			}
		}
	}

	$scope.getData();


	// $scope.getData = function() {
	// 	firebaseService.getQuestions()
	// 		.then(function(data){
	// 			$scope.questions = data.data.results;
	// 		})
	// }
	// $scope.postData = function(){
	// 	var obj = {}
	// 	obj.question = $scope.question;
	// 	obj.color = 'red';
	// 	firebaseService.postQuestion(obj)
	// 		.success(function(){
	// 			$scope.getData();
	// 			$scope.question = '';
	// 		})
	// 		.error(function(){
	// 			alert('There was an error.')
	// 			$scope.getData();
	// 		})
	// }
	// $scope.updateData = function(data) {
	// 	data.color = 'yellow'
	// 	firebaseService.updateQuestion(data)
	// 		.success(function(){
	// 			$scope.getData();
	// 		})
	// 		.error(function(){
	// 			alert('There was an error')
	// 		})
	// }
	// $scope.deleteData = function(data) {
	// 	firebaseService.deleteQuestion(data)
	// 		.success(function(){
	// 			$scope.getData();
	// 		})
	// 		.error(function(){
	// 			alert('There was an error')
	// 		})
	// }
	// $scope.getData();
})