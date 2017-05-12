var app = angular.module("favoriteFoodApp", []);

app.controller("foodCtrl", ($scope) => {
	$scope.food = "Zoe's favorite food is Blue Bell Ice Cream. Definitely.";
});

