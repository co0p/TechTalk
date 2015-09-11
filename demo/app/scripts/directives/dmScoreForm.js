angular.module('demoApp').directive('dmScoreForm', dmScoreForm);

function dmScoreForm(ScoreService) {
  return {
    templateUrl: 'views/dmScoreForm.html',
    link: function(scope, element, attrs) {
      scope.teamA = {};
      scope.teamB = {};

      scope.onSubmit = onSubmit;

      function onSubmit(teamA, teamB) {
        ScoreService.add(teamA);
        ScoreService.add(teamB);
      }
    }
  };
}
