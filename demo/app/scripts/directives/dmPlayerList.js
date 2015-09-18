angular.module('demoApp').directive('dmPlayerList', dmPlayerList);

function dmPlayerList() {
  return {
    templateUrl: 'views/dmPlayerList.html',
  };
}
