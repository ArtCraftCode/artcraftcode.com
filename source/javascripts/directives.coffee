angular.module('directives', [])
.directive 'customButton', [() ->
  {
    restrict: 'E',
    template: '{{option.label}}',
    scope: {
      option: '=',
      pattern: '='
    },
    link: (scope, element, attrs) ->
      scope.selected = false;
      element.on 'click', (event) ->
        scope.selected = !scope.selected
        if scope.selected
          scope.pattern.size = scope.option
          element.addClass 'selected'
        else
          element.removeClass 'selected'
          scope.pattern.size = undefined
      return
  }
]