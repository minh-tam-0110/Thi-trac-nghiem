app.controller('dangnhapCtrl', function($scope, $rootScope) {
    $scope.login = function() {
        var ig = true;
        for(var i = 0; i < $rootScope.students.length; i++) {
            if ($rootScope.students[i].username == $scope.username && $rootScope.students[i].password == $scope.password) {
                alert("Thành công")
                $rootScope.indexStudent = $rootScope.students[i].index;
                $rootScope.student = $rootScope.students[i];
                window.location.href = "#!index";

                ig = false;
                return;
            };

        }
        if (ig == true) {
            alert("Thất bại")
        }
    };

});
