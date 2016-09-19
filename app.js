(function () {
  "use strict";

  angular.module("LunchCheckApp", [] )
  //.controller("LunchCheckController", function ($scope) {
.controller("LunchCheckController", LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController( $scope ) {
  //.controller("LunchCheckController", function ($scope) {
    $scope.lunchlist="";
    $scope.checkStatusVal = "";
    $scope.checkListItems = function () {
      var msg  = getcheckmessage($scope.lunchlist);
      $scope.checkStatusVal = msg;
    };

    function getcheckmessage(string) {
      var finalmsg = "Please enter data first";
      var splitlist = string.split(',');
      var numofitems=0;
      var i;

      for (i=0; i < splitlist.length; i++){

        if( splitlist[i] !=" " && splitlist[i] !=null && splitlist[i].trim() !=""  ){
            numofitems+=1;
        }
      }




      if( numofitems==0 || string == "" || string.trim().length == 0){

        finalmsg = "Please enter data first"
      }
      if( numofitems!=0 && numofitems <=3 ){
        finalmsg = "Enjoy!";
      }
      if( numofitems!=0 &&  numofitems > 3 ){
        finalmsg = "Too much!";
      }

      return finalmsg;
    };

  }//);

})();
