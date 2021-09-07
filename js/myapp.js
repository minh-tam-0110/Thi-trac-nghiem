var app = angular.module("myApp",['ngRoute']);
app.run(function($rootScope, $http){
    $http.get("db/Subjects.js").then(function(response){
        $rootScope.subjects = response.data;
    })
    $http.get("db/Students.js").then(function(response){
        $rootScope.students = response.data;
    })

    $rootScope.student = null;

    console.log($rootScope.students)

    $rootScope.dangxuat = function() {
        $rootScope.student = null;
                $rootScope.indexStudent = -1;
                window.location.href = "#!index";
    }

})

app.config(function($routeProvider){
    $routeProvider
    .when("/trangchu", {templateUrl:"trangchu.html"})
    .when("/dangnhap", {templateUrl:"DangNhap.html", controller:"dangnhapCtrl"})
    .when("/dangky", {templateUrl:"dangky.html", controller:"dangkyCtrl"})
    .when("/QuenMatKhau", {templateUrl:"QuenMatKhau.html", controller:"quenmatkhaudCtrl"})
    .when("/CapNhatTaiKhoan", {templateUrl:"CapNhatTaiKhoan.html", controller:"capnhapthongtinCtrl"})
    .when("/DoiMatKhau", {templateUrl:"DoiMatKhau.html", controller:"doimatkhauCtrl"})
    .when("/KiemTra", { templateUrl: "KiemTra.html", controller: "myCtrl" })
    .when("/HoiDap", { templateUrl: "HoiDap.html", controller: "" })
    .when("/Tin", { templateUrl: "Tin.html", controller: "" })
    .when("/Dangxuat", { templateUrl: "Tin.html", controller: "" })
    // .when("/tracnghiem/:idMh/:tenMh", { templateUrl: "tracnghiem.html", controller: "quizCtrl" })
    .otherwise({ redirectTo: "/trangchu" });
});

