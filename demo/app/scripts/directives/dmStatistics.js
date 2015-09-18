'use strict';

function dmStatistics(ScoreService, $rootScope) {

  return {
    scope: {
      stats: '='
    },
    templateUrl: 'views/dmStatistics.html',
    link: function(scope, element, attrs) {

      // make updateStats function accessible to template
      scope.updateStats = updateStats;

      // when directive is destroyed, call remove function of listener
      scope.$on('$destroy',

        // returns a destroy function of this listener
        $rootScope.$on('newData', function() {
          updateStats();
        })
      );

      function updateStats() {
        ScoreService.get().then(function(data) {
          scope.stats = data;
        });
      }
    }
  };
}

angular.module('demoApp').directive('dmStatistics', dmStatistics);
