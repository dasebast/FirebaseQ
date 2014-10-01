var app = angular.module('parseQ');

app.service('parseService', function($http){
	this.postQuestion = function(question){
		// var deferred = $q.defer();
		return $http({
			method: 'POST',
			data: question,
			url: 'https://api.parse.com/1/classes/question'
		})
		// 	.then(function(data){
		// 		return deferred.resolve(data);
		// 	})
		// return deferred.promise;
	}
	this.getQuestions = function() {
		return $http ({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/question'
		})
	}
	this.updateQuestion = function(question){
		return $http({
			method: 'PUT',
			data: question,
			url: 'https://api.parse.com/1/classes/question/' + question.objectId
		})
	}
	this.deleteQuestion = function(question){
		return $http({
			method: 'DELETE',
			data: question,
			url: 'https://api.parse.com/1/classes/question/' + question.objectId
		})
	}	
})