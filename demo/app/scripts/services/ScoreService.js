'use strict';

function ScoreService($http, $q, _, URL) {

  // returns the current score statistics
  function get() {
    var deferred = $q.defer();
    $http.get(URL).then(function(response) {
      deferred.resolve(processData(response.data));
    }, function(err) {
      deferred.reject(err);
    });
    return deferred.promise;
  }

  // adds new data to the score statistics
  function add(scores) {
    var promises = [];
    angular.forEach(scores, function(score) {
      promises.push($http.post(URL, score));
    });
    return $q.all(promises);
  }

  // helper returns nice stats based on result
  function processData(newData) {
    var reducedData = {};

    angular.forEach(newData, function(item) {
      if (!reducedData[item.name]) {
        reducedData[item.name] = {
          name: item.name,
          goals: 0,
          wins: 0,
          games: 0
        };
      }
      reducedData[item.name].goals += item.goals;
      reducedData[item.name].wins += item.win ? 1 : 0;
      reducedData[item.name].games++;
    });

    var stats = {};
    stats.date = Date.now();
    stats.gameCount = _(newData).pluck('date').unique().size();
    stats.playerCount = _.size(reducedData);
    stats.goals = _(reducedData).reduce(function(total, item) {
                    return item.goals + total;
                  }, 0);
    stats.items = _.sortBy(reducedData, 'wins').reverse();

    return stats;
  }



  // helper: generates score bases on players and goals
  function generateScore(players, goals) {
    var score = [];
    var date = Date.now();
    var winA = goals.a > goals.b;

    if (players.a1 && players.a2) {
      goals.a = goals.a / 2;
    }
    if (players.b1 && players.b2) {
      goals.b = goals.b / 2;
    }

    angular.forEach(['a1', 'a2', 'b1', 'b2'], function (player) {
      if (players[player]) {
        score.push({
          name: players[player],
          goals: player.indexOf('a') === 0 ? goals.a : goals.b,
          date: date,
          win: player.indexOf('a') === 0 ? winA : !winA
        });
      }
    });

    return score;
  }

  // public api
  return {
    get: get,
    add: add,
    generateScore: generateScore
  };
}

angular.module('demoApp').factory('ScoreService', ScoreService);
