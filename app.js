(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LucnhChecker', LucnhChecker);

LucnhChecker.$inject = ['$scope', '$filter'];
    
function LucnhChecker($scope, $filter) {
  $scope.InpLunchList='';
  $scope.Message = "";
  
  $scope.CheckLunchList = function () {
    var LunchList = $scope.InpLunchList.split(',');
    //console.log(LunchList.filter(String).length);
    var ItemCount = LunchList.filter(String).length;
      //console.log(LunchList)
      //console.log(ItemCount)
      $scope.Message = "";
      if(ItemCount==0){
          $scope.Message = "Please enter data first"
      }
      else if(ItemCount<0 || ItemCount<=3){
          $scope.Message = "Enjoy!"
      }
      else{
          $scope.Message = "Too much!"
      }
    return $scope.Message;
  };

}

})();
