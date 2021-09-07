app.controller('capnhapthongtinCtrl', function($rootScope, $scope) {
    $scope.capnhat = function() {
        $rootScope.students[$rootScope.indexStudent] = angular.copy($rootScope.student);
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Cập nhật thông tin cá nhân thành công!',
        // });
        alert("Cập nhật thành công")
        window.location.href = "#!index";
    }
});