(function(){
'use strict';

angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.lunchdishes = "";
		$scope.message = "";
		$scope.messageColor = "";
   		$scope.inputBorderColor = "";

		$scope.dishCheck = function (){
			var numberDecision = numbOfDishes($scope.lunchdishes);

			if (numberDecision === 0){
				$scope.message = "Please enter data first";
				$scope.messageColor = "red";
        		$scope.inputBorderColor = "has-error";
			}
			else if (numberDecision <= 3){
				$scope.message = "Enjoy!";
				$scope.messageColor ="green";
        		$scope.inputBorderColor = "has-success";
        		$scope.lunchdishes = "";
			}
			else if (numberDecision > 3){
				$scope.message = "Too Much!";
				$scope.messageColor = "green";
        		$scope.inputBorderColor = "has-success";
        		$scope.lunchdishes = "";
			}

		}

		function numbOfDishes(dishes){
			var foods = dishes.split(",");
    		var numbOfItems = 0;
    		 for (var i = 0; i < foods.length; i++) {
			      if (foods[i].trim() != "") {
			        numbOfItems ++;
			      }
			    }
			    return numbOfItems;
		}
	}
})();