app.controller("indexCtrl", function($scope, $rootScope) {
    $scope.start = 0;
    $scope.tiep = function () {
        if($scope.start < (($scope.subjects.length / 4) - 1) * 4) {
            $scope.start += 4;
        }
        
    }
    $scope.lui = function () {
        if ($scope.start > 0) {
            $scope.start -= 4;
        }
    }
    // $scope.start = 0;
    // $scope.page = Math.ceil($rootScope.subjects.length / 4); 
    // $scope.tiep = function() {
    //     if ($scope.start < ($scope.page - 1) * 4) {
    //         $scope.start += 4;
    //     }
    // }
});