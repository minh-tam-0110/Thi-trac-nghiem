app.controller('dangkyCtrl', function($rootScope, $scope) {
    $scope.dangky = function() {
        $rootScope.students.push(angular.copy($scope.studentR));
        $scope.studentR = {};
        $scope.repassword = '';
        alert("thành công");
        window.location.href = "#!dangnhap";
    }
});
