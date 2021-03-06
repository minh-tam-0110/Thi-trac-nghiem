app.controller("chitietCtrl", function ($scope, $rootScope, $http, $routeParams) {
    for (let i = 0; i < $scope.subjects.length; i++) {
        if ($rootScope.subjects[i].Id == $routeParams.id) {
            $rootScope.subject = $rootScope.subjects[i];
            break;
        }
    }
    $scope.test = function() {
        if ($rootScope.student == null) {
            Swal.fire({
                icon: 'error',
                title: 'Bạn chưa đăng nhập!',
                text: 'Hãy quay lại sau khi đăng nhập!'
            });
        } else {
            Swal.fire({
                title: 'Bắt đầu thi?',
                text: "Bạn đã sẳn sàng!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có! Bắt đầu thi.',
                cancelButtonText: 'Chưa'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "#!quiz/" + $scope.subject.Id+ "/" + $scope.subject.Name;
                }
            })
        }
    }
    // $scope.test = function () {
    //     window.location.href = "#!quiz/:" + $scope.subject.Id;
    // }
})