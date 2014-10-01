var app = angular.module('parseQ');

app.controller('mainCtrl', function($scope, parseService){
	$scope.postData = function(){
		var obj = {}
		obj.question = $scope.question;
		obj.color = 'red';
		parseService.postQuestion(obj)
			.success(function(){
				$scope.getData();
				$scope.question = '';
			})
			.error(function(){
				alert('There was an error.')
				$scope.getData();
			})
	}
	$scope.getData = function() {
		parseService.getQuestions()
			.then(function(data){
				$scope.questions = data.data.results;
				console.log($scope.questions);
			})
	}
	$scope.updateData = function(data) {
		console.log(data)
		data.color = 'yellow'
		parseService.updateQuestion(data)
			.success(function(){
				$scope.getData();
			})
			.error(function(){
				alert('There was an error')
			})
	}
	$scope.deleteData = function(data) {
		console.log(data)
		parseService.deleteQuestion(data)
			.success(function(){
				$scope.getData();
			})
			.error(function(){
				alert('There was an error')
			})
	}
	$scope.getData();
})