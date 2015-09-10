angular.module('demoApp').directive('dmStatistics', dmStatistics);

function dmStatistics(ScoreService) {
  'use strict';

  return {
    scope: {
      stats: '='
    },
    templateUrl: 'views/dmStatistics.html',

    link: function(scope, element, attrs) {
      scope.updateStats = updateStats;

      function updateStats() {
        ScoreService.get().then(function(data) {
          scope.stats = data;
        });
      }
    }
  };
}
