require_relative '../pattern.rb'
require_relative '../custom_pattern.rb'

# patterns
require_relative './forest_park.rb'
require_relative './in_winter.rb'
require_relative './winter_sea.rb'
require_relative './very_pdx.rb'

module Patterns
  def self.very_pdx
    custom = CustomPattern.new(VeryPDX::DATA)
  end

  FOREST_PARK = Pattern.new(ForestPark::DATA)
  WINTER_SEA = Pattern.new(WinterSea::DATA)
  IN_WINTER = Pattern.new(InWinter::DATA)
  VERY_PDX = self.very_pdx
  ALL = [IN_WINTER, FOREST_PARK, WINTER_SEA, VERY_PDX]
end