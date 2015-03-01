require_relative './forest_park.rb'
require_relative '../pattern.rb'

module Patterns
  FOREST_PARK = Pattern.new(ForestPark::DATA)
  WINTER_SEA = Pattern.new(WinterSea::DATA)
end