var module = angular.module('contactList',[]);
module.controller('maincontroller',['$scope', function($scope){
	$scope.contactlist = [
		{
			"name": "Dheeraj",
			"number": "+918275755512"
		}
	]
	$scope.addName = '';
	$scope.addNumber = '';
	$scope.addToList = function(){
		console.log($scope.addName, $scope.addNumber);
		var obj = {
			"name": $scope.addName,
			"number": $scope.addNumber
		}
		if ($scope.addName != '' && $scope.addNumber != '') {
			$scope.contactlist.push(obj);	
			$scope.addName = '';
			$scope.addNumber = '';
		};
	}
}]);