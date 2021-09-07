app.controller('quenmatkhaudCtrl', function($rootScope, $scope) {
    $scope.getPass = function() {
        // var ck = true;
        
        // for(var i = 0; i < $rootScope.students.length; i ++) {
        //     if($rootScope.students[i].email == $scope.email && $rootScope.students[i].username == $scope.username) {
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'Lấy lại tài khoản thành công!',
        //             text: 'Mật khẩu của bạn: ' +$rootScope.students[i].password,
        //         });
        //         ck = false;
        //         return;
        //     }
        // };
        // if (ck) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Lấy lại tài khoản thất bại!',
        //         text: 'Vui lòng nhập lại thông tin',
        //     });
        // }
        var email = $scope.email;
            var tc = false;
            var motsv;
            for (var i = 0; i < listsv.length; i++) {
                motsv = listsv[i];
                if (email == motsv.email) {
                    sessionStorage.setItem("pass", motsv.password);
                    alert(motsv.password);
                    tc = true;
                    break;
                }


            }
    }

});