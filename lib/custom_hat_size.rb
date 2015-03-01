require_relative './calculators.rb'

class CustomHatSize
  attr_reader :size, :height, :ribbing

  def initialize(size, height, ribbing)
    @size = size
    @height = height
    @ribbing = ribbing
  end

  def label
    "#{size.label}: #{size.measurements_string}"
  end
end