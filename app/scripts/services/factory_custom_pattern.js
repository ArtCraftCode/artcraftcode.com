'use strict';

/* Sevices */
angular.module('factory.custom_pattern', ['app.calculator_services'])
.factory('CustomHatPattern', ['calculator', 'hatCalculator', function(calculator, hatCalculator) {
  var gaugeInch, gaugeRow, size, multiple;

  function CustomHatPattern(customSize, originalPattern, decreaseMultiple) {
    this.customSize       = customSize;
    this.originalPattern  = originalPattern;
    this.decreaseMultiple = decreaseMultiple;
    if (this.originalPattern && this.customSize) {
      gaugeInch = this.originalPattern.gaugeInch,
      gaugeRow  = this.originalPattern.gaugeRowInch,
      size      = this.customSize.value,
      multiple  = this.originalPattern.custom_fields.multiple;
    }
  }

  CustomHatPattern.prototype.generate = function() {
    // this is a hacky way to get around the way i set up the attributes
    CustomHatPattern.prototype.cast_on = calculator.castOn(size, gaugeInch, multiple);
    CustomHatPattern.prototype.size_label = this.customSize.label;
    CustomHatPattern.prototype.brim_rows = hatCalculator.brimRows(gaugeRow, this.customSize.ribbing);
    CustomHatPattern.prototype.brim_height = this.customSize.ribbing;
    CustomHatPattern.prototype.body_height = hatCalculator.bodyHeight(this.cast_on, this.customSize.height, this.decreaseMultiple, this.babyDecreases());
  }

  CustomHatPattern.prototype.set = function(attribute, value) {
    this[attribute] = value;
    return this[attribute];
  }

  CustomHatPattern.prototype.babyDecreases = function() {
    if (size < 17) {
      return true;
    } else {
      return false;
    }
  };

  return (CustomHatPattern);
}]);