(function () {
  "use strict";

  angular.module("LunchCheckApp", [] )
  .controller("LunchCheckController", function ($scope) {
    $scope.lunchlist = "";
    $scope.checkStatusVal = "";
    $scope.checkListItems= fucntion (){
      var msg  = getcheckmessage($scope.lunchlist);
      $scope.checkStatusVal = msg;
    };

    fucntion getcheckmessage(splitstring){
      var finalmsg = "Please enter data first";
      var splitlist = splitstring.split(',');

      if( splitlist.length==0 || splitstring="" ){
        finalmsg = "Please enter data first"
      }
      if( splitlist.length<=3){
        finalmsg = "Enjoy!";
      }
      if(splitlist.length>3){
        finalmsg = "Too much!";
      }
      return finalmsg;
    }

  });
})();
