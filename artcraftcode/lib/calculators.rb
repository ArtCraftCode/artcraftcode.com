module Calculators
  def to_meters(yards)
    (yards.to_i * 0.914).round(0)
  end
end