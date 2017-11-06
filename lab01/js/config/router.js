angular.module("lab1").config(function ($stateProvider) {
    var funcione = {
        name: "funcione",
        url: "/",
        templateUrl: "view/paginaInicial.html"
    };
    
    $stateProvider.state(funcione);
});