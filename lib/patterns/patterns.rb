require_relative '../pattern.rb'
require_relative '../custom_pattern.rb'

# patterns
require_relative './forest_park.rb'
require_relative './winter_sea.rb'
require_relative './very_pdx.rb'

module Patterns
  def self.very_pdx
    custom = CustomPattern.new(VeryPDX::DATA)
    custom.fields = VeryPDX::CUSTOM_FIELDS
    custom.options = VeryPDX::CUSTOM_OPTIONS
    custom.note = VeryPDX::CUSTOM_NOTE
    custom
  end

  FOREST_PARK = Pattern.new(ForestPark::DATA)
  WINTER_SEA = Pattern.new(WinterSea::DATA)
  VERY_PDX = self.very_pdx
end