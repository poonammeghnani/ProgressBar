var progessBarDemo = angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
progessBarDemo.controller('ProgressDemoCtrl', function ($scope, $log, ProgressDemoFactory) {
  $scope.limit = 100;
  $scope.bar = {'number':'', 'type':'success','dynamic':'10'};
  $scope.bar.numberOptions = [];
  $scope.bars = [];
  $scope.barConfig = {};
  $scope.buttons = [];
  
  $scope.createBars = function(barConfig){

	  var cBars = barConfig["bars"];
	  $scope.limit = barConfig["limit"];
	  $scope.buttons = barConfig["buttons"];
	  
	  for(var i=0; i< cBars.length;i++) {
		  var jsonData = {};
		  var jsonOptionData = {};
		  jsonData['number'] = i;
		  jsonData['type'] = 'success';
		  jsonData['dynamic'] = cBars[i];
		  $scope.bars[i]=jsonData;
		  
		  jsonOptionData['id'] = i;
		  jsonOptionData['name'] = 'ProgressBar#'+(i+1);
		  $scope.bar.numberOptions[i] = jsonOptionData;

	  }
		 $log.info($scope.buttons);
  }
  
  $scope.random = function(btnVal) {
	  var barNo = parseInt($scope.bar.number);
	  
	  var value = $scope.bars[barNo].dynamic + btnVal;
	  var type;
    
    if (value <= $scope.limit) {
      type = 'success';
    } else {
      type = 'danger';
    }	
    
    $scope.bars[barNo].type = type;
    if(value < 0)
    	$scope.bars[barNo].dynamic = 0;
    else
    	$scope.bars[barNo].dynamic = value;
    
  };
  ProgressDemoFactory.get().then(function(data){
	  $scope.barConfig = data;
	  $log.info($scope.barConfig);
	  $scope.createBars($scope.barConfig);
	}).catch(function(response){
		$log.info("Some error occured while fetching data from endpoint.");
	});

});

progessBarDemo.factory("ProgressDemoFactory", function($http, $q){
	return{
		get:function(){
			var deferred = $q.defer();
			var url = "http://pb-api.herokuapp.com/bars";
			$http({method: 'GET',
				url: url}).then(function(success){
					deferred.resolve(success.data);
				}, function(error){
					deferred.reject(error);
				});
			return deferred.promise;
		}
	}
});