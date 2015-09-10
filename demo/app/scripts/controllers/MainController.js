'use strict';

function MainController(ScoreService) {
  var vm = this;
  vm.stats = {};

  // initially load the data and make it available to view
  ScoreService.get().then(function(stats) {
    vm.stats = stats;
  });
}

angular.module('demoApp').controller('MainController', MainController);
