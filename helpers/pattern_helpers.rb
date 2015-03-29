require_relative '../lib/needle.rb'
require_relative '../lib/patterns/patterns.rb'

module PatternHelpers
  def by_name(name)
    self.send(name)
  end

  def featured_pattern
    Patterns::MISDIRECTED
  end

  def forest_park
    Patterns::FOREST_PARK
  end

  def in_winter
    Patterns::IN_WINTER
  end

  def misdirected
    Patterns::MISDIRECTED
  end

  def very_pdx
    Patterns::VERY_PDX
  end

  def winter_sea
    Patterns::WINTER_SEA
  end

  def patterns
    Patterns::ALL
  end
end