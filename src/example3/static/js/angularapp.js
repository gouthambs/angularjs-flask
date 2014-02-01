//
var exampleApp = angular.module('exampleApp',[]);

exampleApp.controller('FormController1',
    function($scope)
    {
        $scope.buttonClicked = function()
        {
            $scope.modText = "Hello "+$scope.inputText+ " from controller 1"; 
        };
        
    }); 
    
exampleApp.controller('FormController2',
    function($scope)
    {
        $scope.buttonClicked = function()
        {
            $scope.modText = "Hello "+$scope.inputText+ " from controller 2"; 
        };
        
    }); 