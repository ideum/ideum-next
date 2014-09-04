(function () {
  'use strict';

  var App = angular.module('ideum.slider');

  App.directive('ideumSlider', ['$window', function ($window) {
    return {
      template:
        '<div class="slides" ng-transclude>' +
        '</div>' +

        '<button class="previous" ng-click="slidePrev()"><i class="icon-arrow-left"></i></button>' +
        '<button class="next" ng-click="slideNext()"><i class="icon-arrow-right"></i></button>',

      transclude: true,
      link: function (scope, element, attrs) {
        element.addClass('slider');

        var slides = element.find('.slides');

        var currentSlide = 0,
            slideWidth;

        var calculateSlideWidth = function () {
          var slide = element.find('.slide'),
              rawWidth = slide.width(),
              parentWidth = slide.offsetParent().width();

          slideWidth = rawWidth / parentWidth * 100;
        };

        calculateSlideWidth();
        angular.element($window).on('resize', calculateSlideWidth);

        scope.slidePrev = function () {
          scope.slideTo(currentSlide - 1);
        };

        scope.slideNext = function () {
          scope.slideTo(currentSlide + 1);
        };

        scope.slideTo = function (to) {
          currentSlide = parseInt(to, 10);

          var offset = -(currentSlide * slideWidth) + '%';

          slides
            .css('-webkit-transform', 'translateX('+offset+')')
            .css('transform', 'translateX('+offset+')');
        };
      }
    };
  }]);

  App.directive('ideumSlide', [function () {
    return {
      link: function (scope, element, attrs) {
        element.addClass('slide');
      }
    };
  }]);

})();
