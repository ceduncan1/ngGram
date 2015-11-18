import angular from 'angular';
import '../app-core/index';

import PhotoController from './controllers/photo.controller';

import PhotoService from './services/photo.service';

// import caryImage from './directives/cary-image.directive;

angular
  .module('app.photos', ['app.core'])
  .controller('PhotoController', PhotoController)
  .service('PhotoService', PhotoService)
  // .directive('caryImage', caryImage)
;