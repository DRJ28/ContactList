var module = angular.module('contactList',[]);
module.controller('maincontroller',['$scope', function($scope){
	$scope.contactlist = [];
	debugger;
	if (localStorage.getItem('list')) {
		//if localStorage exist
		var list = localStorage.getItem('list');
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
			var discard = false;
			$scope.contactlist.forEach(function(ob){
				if (ob == obj) {
					discard = true;
					return;
				}
			});
			if (!discard) {
				$scope.contactlist.push(obj);	
			}
			
			debugger;
			$scope.saveToLocalStorage();
			$scope.addName = '';
			$scope.addNumber = '';
		};
	}
	$scope.editContact = function(index){
		console.log('contact to edit ' + index);
		$scope.addNumber = $scope.contactlist[index].number;
		$scope.addName = $scope.contactlist[index].name
	}
	$scope.deleteContact = function(index){
		console.log('contact to delete ' + index);
		debugger;
		$scope.contactlist.splice(index,1);
		$scope.saveToLocalStorage();
	}
	$scope.saveToLocalStorage = function(){
		var str = JSON.stringify($scope.contactlist);
		localStorage.setItem('list', str);	
	}
}]);