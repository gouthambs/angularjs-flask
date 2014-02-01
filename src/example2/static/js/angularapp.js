//


function FormController($scope)
{
    $scope.buttonClicked = function()
    {
        $scope.modText = "Hello "+$scope.inputText; 
    };
    
};