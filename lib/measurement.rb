require_relative './calculators.rb'

class Measurement
  include Calculators

  attr_reader :label
  def initialize(label, inches)
    @label = label
    @inches = inches
  end

  def to_s
    "#{@inches} in / #{to_cm(@inches)} cm #{@label}"
  end
end