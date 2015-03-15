angular.module('factories', ['services'])
.factory('CustomHatPattern', ['calculator', 'hatCalculator', (calculator, hatCalculator)->
  gaugeInch = undefined
  gaugeRow = undefined
  size = undefined
  multiple = undefined

  CustomHatPattern = (customSize, originalPattern, decreaseMultiple) ->
    @customSize = customSize
    @originalPattern = originalPattern
    @decreaseMultiple = decreaseMultiple
    if @originalPattern and @customSize
      gaugeInch = @originalPattern.gauge_inch
      gaugeRow = @originalPattern.gauge_row_inch
      size = @customSize.value
      multiple = @originalPattern.multiple
    return

  CustomHatPattern::generate = ->
    # this is a hacky way to get around the way i set up the attributes
    CustomHatPattern::cast_on = calculator.castOn(size, gaugeInch, multiple)
    CustomHatPattern::size_label = @customSize.label
    CustomHatPattern::brim_rows = hatCalculator.brimRows(gaugeRow, @customSize.ribbing)
    CustomHatPattern::brim_height = @customSize.ribbing
    CustomHatPattern::body_height = hatCalculator.bodyHeight(@cast_on, @customSize.height, @decreaseMultiple, @babyDecreases())
    return

  CustomHatPattern::set = (attribute, value) ->
    @[attribute] = value
    @[attribute]

  CustomHatPattern::babyDecreases = ->
    if size < 17
      true
    else
      false

  CustomHatPattern
])