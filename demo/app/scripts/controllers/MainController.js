'use strict';

function MainController() {
  var vm = this;
  vm.stats = [1,2,3,4,5,6];
}

angular.module('demoApp').controller('MainController', MainController);
