class Size
  attr_reader :label
  def initialize(label, measurements)
    @label = label
    @measurements = measurements
  end

  def measurements_string
    @measurements.map(&:to_s).join('; ')
  end
end