var app = angular.module("ToDoApp",[]);
var model = [];
app.controller("mainCtrl", function($scope){
   $scope.data = model;
   $scope.AddTodo = function(){
      if($scope.modelCompleted){
         $scope.data.push({
            name: $scope.modelName,
            description: $scope.modelDescription,
            date: $scope.modelDate,
            completed: $scope.completed = "Пройден"
         })
      }else{
         $scope.data.push({
            name: $scope.modelName,
            description: $scope.modelDescription,
            date: $scope.modelDate,
            completed: $scope.completed = "Не пройден"
         })
      };
   };
});
