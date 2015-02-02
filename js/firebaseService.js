var app = angular.module('parseQ');

app.service('firebaseService', function($http, $q, $firebase, fbConstant){

	var fbUrl = fbConstant.firebaseUrl;
	
	this.getQuestions = function() {
		return $firebase(new Firebase(fbUrl + '/q'))
	}

	// this.getQuestions = function() {
	// 	var deferred = $q.defer();
	// 	$http ({
	// 		method: 'GET',
	// 		url: 'https://api.parse.com/1/classes/question'
	// 	})
	// 		.then(function(data){
	// 			return deferred.resolve(data)
	// 		})
	// 	return deferred.promise
	// }
	// this.postQuestion = function(question){
	// 	return $http({
	// 		method: 'POST',
	// 		data: question,
	// 		url: 'https://api.parse.com/1/classes/question'
	// 	})
	// }
	// this.updateQuestion = function(question){
	// 	return $http({
	// 		method: 'PUT',
	// 		data: question,
	// 		url: 'https://api.parse.com/1/classes/question/' + question.objectId
	// 	})
	// }
	// this.deleteQuestion = function(question){
	// 	return $http({
	// 		method: 'DELETE',
	// 		data: question,
	// 		url: 'https://api.parse.com/1/classes/question/' + question.objectId
	// 	})
	// }	
})