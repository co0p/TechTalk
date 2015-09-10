angular.module('demoApp').directive('dmStatisticsDetails', dmStatisticsDetails);

function dmStatisticsDetails() {
  return {
    scope: {
      stats: '='
    },
    templateUrl: 'views/dmPlayerList.html',
    link: function(scope, element, attrs) {

      scope.players = [];

      // react to changes of the object
      scope.$watch(scope.stats, function() {

      });
    }
  };
}
