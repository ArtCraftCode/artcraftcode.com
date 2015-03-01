require_relative '../lib/needle.rb'
require_relative '../lib/patterns/patterns.rb'

module PatternHelpers
  def featured_pattern
    Patterns::WINTER_SEA
  end

  def patterns
    Patterns::ALL
  end
end