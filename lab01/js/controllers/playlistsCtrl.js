angular.module("lab1").controller("playlistsCtrl", function ($scope, $state, playlistsService) {

    $scope.playlists = playlistsService.playlists;

});