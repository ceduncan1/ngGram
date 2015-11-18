let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'tempaltes/app-layout/home.tpl.html'
    })
    .state('root.photos', {
      url: '/photos',
      controller: 'PhotosController as vm',
      templateUrl: 'templates/app-photos/photos.tpl.html'
    })
  ;
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;