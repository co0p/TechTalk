'use strict';

function MainController(ScoreService) {
  var vm = this;
  vm.showError = false;
  vm.stats = {};

  // initially load the data and make it available to view
  ScoreService.get().then(function(stats) {
    vm.stats = stats;
    vm.showError = false;
  }, function(err) {
    vm.showError = true;
  });
}

angular.module('demoApp').controller('MainController', MainController);
