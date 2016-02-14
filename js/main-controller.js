var module = angular.module('contactList',[]);
module.controller('maincontroller',['$scope', function($scope){
	$scope.contactlist = [];
	debugger;
	if (localStorage.getItem('list')) {
		//if localStorage exist
		var list = localStorage.getItem('list')
		$scope.contactlist = JSON.parse(list);
	};
	$scope.addName = '';
	$scope.addNumber = '';
	$scope.addToList = function(){
		debugger;
		console.log($scope.addName, $scope.addNumber);
		var obj = {
			"name": $scope.addName,
			"number": $scope.addNumber
		}
		if ($scope.addName != '' && $scope.addNumber != '') {
			$scope.contactlist.push(obj);
			/*chrome.storage.local.set({'name': 787687677575}, function(){
				alert('stored');
			});*/
			debugger;
			var str = JSON.stringify($scope.contactlist);
			localStorage.setItem('list', str);	
			$scope.addName = '';
			$scope.addNumber = '';
		};
	}
	$scope.editContact = function(index){
		console.log('contact to edit ' + index);
	}
	$scope.deleteContact = function(index){
		console.log('contact to delete ' + index);
	}
}]);