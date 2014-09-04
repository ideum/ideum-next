//= require jquery
//= require angular/angular
//= require angular/angular-animate
//= require ./slider
//= require_self
//= require ./animations
//= require ./footer

(function () {
  'use strict';

  var App = angular.module('ideum', [
    'ngAnimate',
    'ideum.slider'
  ]);

})();
