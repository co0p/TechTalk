angular.module('demoApp').factory('ScoreService', ScoreService);

function ScoreService($http, $q, _, URL) {
  'use strict';

  function processData(newData) {
    var stats = {};
    stats.date = Date.now();
    stats.playerCount = _(newData).pick('name').unique().length;
    stats.items = newData;
    return stats;
  }

  function get() {
    var deferred = $q.defer();
    $http.get(URL).then(function(response) {
        deferred.resolve(processData(response.data));
    });

    return deferred.promise;
  }

  function add(score) {
    $http.post(URL, score);
  }

  return {
    get: get,
    add: add
  }
}
