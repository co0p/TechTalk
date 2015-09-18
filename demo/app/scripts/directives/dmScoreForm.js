'use strict';

function dmScoreForm($rootScope, _, ScoreService) {

  return {
    templateUrl: 'views/dmScoreForm.html',
    link: function(scope) {

      init();

      // create data structure in template
      function init() {
        scope.isValid = false;
        scope.players = {};
        scope.goals = {};
      }

      // react on changes, set valid to true necessary fields are present, otherwise false
      scope.$watch('[players, goals]', function(newVal) {
        var players = newVal[0];
        var goals = newVal[1];
        scope.isValid = (players.a1 || players.a2) &&
                        (players.b1 || players.b2) &&
                        _.isNumber(goals.a) && _.isNumber(goals.b);
      }, true);

      // informs the world about new data
      function informWorld() {
        $rootScope.$broadcast('newData', true);
      }

      // submit score, on success reset the form
      scope.submit = function submit(players, goals) {
        var score = ScoreService.generateScore(players, goals);
        ScoreService.add(score).then(informWorld).then(init);
      };
    }
  };
}

angular.module('demoApp').directive('dmScoreForm', dmScoreForm);
