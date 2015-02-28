module Calculators
  def to_meters(yards)
    (yards.to_i * 0.914).round(0)
  end

  def to_cm(inches)
    (inches * 2.54).round(1)
  end
end