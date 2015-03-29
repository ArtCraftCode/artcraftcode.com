require_relative '../pattern.rb'
require_relative '../custom_pattern.rb'

# patterns
require_relative './forest_park.rb'
require_relative './in_winter.rb'
require_relative './misdirected_cowl.rb'
require_relative './very_pdx.rb'
require_relative './winter_sea.rb'

module Patterns
  def self.very_pdx
    custom = CustomPattern.new(VeryPDX::DATA)
  end

  FOREST_PARK = Pattern.new(ForestPark::DATA)
  IN_WINTER = Pattern.new(InWinter::DATA)
  MISDIRECTED = Pattern.new(Misdirected::DATA)
  VERY_PDX = self.very_pdx
  WINTER_SEA = Pattern.new(WinterSea::DATA)

  ALL = [
          # MISDIRECTED,
          WINTER_SEA,
          FOREST_PARK,
          IN_WINTER,
          VERY_PDX
        ]
end