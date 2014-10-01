var app = angular.module('myDirectives', []);

app.directive('pending', function() {
	return {
		restrict: 'AE',
		scope: {
			request: '&'
		},
		link: function(scope, elem, attrs){
			var loader = angular.element('<img src="/js/myDirectives/ajax-loader.gif">').hide();
			elem.after(loader);
			elem.click(function() {
				elem.hide();
				console.log('clicked...');
				loader.show();
				scope.request()
					.then(function(){  //requires a promise to be passed to it
						console.log('Loaded!') //in order to run correctly
						elem.show();
						loader.hide();
					})
			})
		}
	}
})

app.directive('notify', function() {
	return{
		restrict: 'AE',
		scope: {
			title: '=',
			body: '=',
			icon: '='
		},
		link: function(scope, elem, attrs){
			console.log(scope.title)
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
    		Notification.requestPermission();
            elem.click(function(){
            	var notification = new Notification(scope.title, {body: scope.body, icon: scope.icon});
            })
		}
	}
})