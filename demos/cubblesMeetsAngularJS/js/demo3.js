/* global angular */
(function () {
  'use strict';

  var app = angular.module('angularCubbles', []);

  // create directive cubx-component
  app.directive('cubxComponent', [function () {
    return {
      restrict: 'E',
      scope: {
        cubxRoot: '=',
        slotValues: '=',
        cubxName: '='
      },
      link: linkCubxComponent
    };
  }]);

  // create controller
  app.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.dataA = 50;
    $scope.dataB = 20;
    $scope.dataC = 75;
    $scope.cubxRoot = 'com.incowia.lib.chart-library@0.3.0';
    $scope.slotValues = {
      dataColumns: {
        value: [
          ['dataA', $scope.dataA], ['dataB', $scope.dataB], ['dataC', $scope.dataC]
        ]
      }
    };

    $scope.$watch('dataA', function (newValue) {
      $scope.slotValues.dataColumns.value[0][1] = newValue;
    });
    $scope.$watch('dataB', function (newValue) {
      $scope.slotValues.dataColumns.value[1][1] = newValue;
    });
    $scope.$watch('dataC', function (newValue) {
      $scope.slotValues.dataColumns.value[2][1] = newValue;
    });
  }]);

  // link function is called each time the directive cubx-component is instantiated
  var linkCubxComponent = function ($scope, element) {
    // create inner HTML of directive dynamically
    var html = '<div cubx-core-crc>' +
      '<' + $scope.cubxName + ' cubx-webpackage-id="' + $scope.cubxRoot + '"></' + $scope.cubxName + '>' +
      '</div>';
    element.html(html);

    // when CIF is ready set slot values given to directive via attribute "slotValues"
    document.addEventListener('cifReady', function () {
      // initially cal setDataColumns when cif is ready
      setDataColumns($scope, element);

      // register watcher for all data columns
      $scope.$watch('slotValues.dataColumns.value', function (newValue) {
        setDataColumns($scope, element);
      }, true);
    });

    // build custom event for starting bootstrap of CIF
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('CubxComponentLinked', true, true, {});
    // dispatch this event
    document.dispatchEvent(event);
  };

  // set slot of cubbles component instance 'pie-chart'
  var setDataColumns = function ($scope, element) {
    var cubbleCompInstance = element.find($scope.cubxName)[0];

    if ($scope.slotValues.hasOwnProperty('dataColumns')) {
      cubbleCompInstance.setInputSlot('dataColumns', {payload: $scope.slotValues.dataColumns.value});
    }
  };
})();
