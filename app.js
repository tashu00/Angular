
 var app = angular.module("ClockApp", []);
     app.controller("TimeCtrl" , Time);

      function Time($scope){
          var currentDate = new Date();
          $scope.timeString = currentDate.toTimeString();
          $scope.updateTime = function(){
               $scope.userName ="";
              var currentDate = new Date();
               $scope.timeString = currentDate.toTimeString();
          }
      }