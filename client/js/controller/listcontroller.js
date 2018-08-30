

        app.controller('testController', function($scope){
          $scope.currentPage = 0;
          $scope.pageSize = 10;
          $scope.numberOfPages= () => {
            return Math.ceil(
              $scope.user.length / $scope.pageSize
            );
          }

        });

        app.filter('startFrom', function() {
          return function (input, start) {
            if (!input || !input.length) { return; }
            start = +start; //parse to int
            return input.slice(start);
          }
        });
