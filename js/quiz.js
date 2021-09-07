app.controller('quizCtrl', function ($scope, $http, $routeParams) {
    $scope.cacmonhoc = [];
    $scope.idMh = $routeParams.idMh;
    $scope.tenMh = $routeParams.tenMh;
    $http.get("/assets/db/Quizs/" + $scope.idMh + ".js").then(
        function (response) {
            $scope.questions = response.data
        }
    )
    $scope.index = 0;
    $scope.start = 0;
    $scope.startQuiz = function () {
        $scope.start+=1;
        $scope.index+=1;
    }

});