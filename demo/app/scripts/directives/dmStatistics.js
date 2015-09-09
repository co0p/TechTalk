angular.module('demoApp').directive('dmStatistics', dmStatistics);

function dmStatistics(){
  return {
    template: '<p class="lead"><span>1.223</span> games have been played by <span>12</span> players scoring <span>123</span> goals.</p>'
  };
}
