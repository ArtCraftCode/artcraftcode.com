angular.module('services', [])
.factory('calculator', ->
  {
    toYards: (num) ->
      Number(num * 1.0936).toFixed 1
    toMeters: (num) ->
      Number(num / 1.0936).toFixed 1
    inToCm: (num) ->
      Number(num * 2.54).toFixed 1
    nearestMultiple: (num, multiple) ->
      num + multiple - num % multiple
    estimateYardage: (area, yardageFactor) ->
      area * yardageFactor
    areaCircle: (radius) ->
      3.142 * radius * radius
    areaRectangle: (width, height) ->
      width * height
    areaHat: (circumference, bodyHeight) ->
      radius = circumference / 3.142 / 2
      @areaRectangle(bodyHeight, circumference) + @areaCircle(radius)
    castOn: (size, gauge, multiple) ->
      raw = Math.floor(size * gauge)
      @nearestMultiple raw, multiple
  }
)
.factory('hatCalculator', ->
  {
    brimRows: (gauge, ribbing) ->
      Math.floor gauge * ribbing
    bodyHeight: (castOn, height, multiple, adjusted) ->
      # multiple (int)
      # adjusted is often for baby sizes (boolean)
      if adjusted and multiple and castOn % multiple != 0
        height - 1
      else if multiple and castOn % multiple != 0
        height = 0.6
      else
        height

  }
)