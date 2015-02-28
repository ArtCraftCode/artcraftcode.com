require_relative '../lib/needle.rb'
require_relative '../lib/patterns/patterns.rb'

module PatternHelpers
  def patterns
    pattern = Patterns::FOREST_PARK
    pattern.designer
  end
end