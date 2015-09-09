angular.module('demoApp').directive('dmScoreForm', dmScoreForm);

function dmScoreForm() {
  return {
    templateUrl: 'views/dmScoreForm.html'
  };
}
