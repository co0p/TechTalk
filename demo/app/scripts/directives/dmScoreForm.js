angular.module('demoApp').directive('dmScoreForm', dmScoreForm);

function dmScoreForm(_, ScoreService) {
  return {
    templateUrl: 'views/dmScoreForm.html',
    link: function(scope, element, attrs) {

      // create data structure in template
      scope.score = {
        players: {},
        goals: {}
      };

      // forward functionality to template
      scope.isValidToSubmit = isValidToSubmit;
      scope.submit = submit;

      // return true if all necessary fields are present, otherwise false
      function isValidToSubmit(score) {
        return !(_.isEmpty(score.players.a1) || _.isEmpty(score.players.b1)) &&
        _.isNumber(score.goals.a) && _.isNumber(score.goals.b);

      }

      // submit score, on success reset the form
      function submit(score) {
        ScoreService.add(score).then(function() {
          scope.score.players = {};
          scope.score.goals = {};
        });
      }
    }
  };
}
