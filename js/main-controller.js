var module = angular.module('contactList',[]);
module.controller('maincontroller',['$scope', function($scope){
	$scope.contactlist = [];
	/*if (localStorage.getItem('list')) {
		var list = localStorage.getItem('list')
		$scope.contactlist = JSON.parse(list);
	};*/
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
			localStorage.setItem('list', $scope.contactlist)	
			$scope.addName = '';
			$scope.addNumber = '';
		};
	}
}]);