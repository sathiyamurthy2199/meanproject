app.controller('checkboxctrl',function($scope) {
	$scope.user.allusersSelected = false;
	$scope.selectEntity = function () {
	            for (var i = 0; i < $scope.user.length; i++) {
	                if (!$scope.user[i].isChecked) {
	                    $scope.user.allusersSelected = false;
	                    return;
	                }
	            }
	
	            $scope.user.allusersSelected = true;
	        };
	        $scope.selectAll = function () {
	            // Loop through all the entities and set their isChecked property
	            for (var i = 0; i < $scope.user.length; i++) {
	                $scope.user[i].isChecked = $scope.user.allusersSelected;
	            }
	        };
})
