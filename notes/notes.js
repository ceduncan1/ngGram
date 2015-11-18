directive
link: function (scope, element, attrs) {
  element.on('click', function () {
    scope.$apply(function(){
      scope.car.name = 'Tim';
    });
  });
}