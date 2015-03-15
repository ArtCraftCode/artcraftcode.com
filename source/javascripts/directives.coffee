angular.module('directives', [])
.directive 'customButton', [() ->
  {
    restrict: 'E',
    template: '{{option.label}}',
    scope: {
      option: '='
    },
    link: (scope, element, attrs) ->
      scope.selected = false;
      element.on 'click', (event) ->
        scope.selected = !scope.selected
        if scope.selected
          scope.$emit('customized', scope.option)
          element.parent().find('custom-button').removeClass('selected')
          element.addClass 'selected'
      return
  }
]