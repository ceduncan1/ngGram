import angular from 'angular';

import './app-core/index';
import './app-layout/index';
import './app-photos/index';

angular
  .module('app', ['app.core', 'app.layout', 'app.cars'])
;