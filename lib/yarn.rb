require_relative './libraries.rb'
require_relative './calculators.rb'

class Yarn
  include Calculators

  attr_reader :weight, :yards, :label

  def initialize(weight, yards, label=nil)
    @weight = weight.downcase
    @yards = yards
    @label = label
    @source = set_source
  end

  def position
    @source[:position]
  end

  def factor
    @source[:factor]
  end

  def meters
    to_meters(yards)
  end

  def adjust_weight_by(num)
    length = Libraries::YARNS.length
    not_too_small = index > 0 && num < 0
    not_too_large = index > length && num > length - 2
    if not_too_small && not_too_large
      Libraries::YARNS[index + num].keys.first
    end
  end

  protected
  def index
    Libraries::YARNS.index { |hsh| hsh.key?(weight) }
  end

  def set_source
    Libraries::YARNS.find { |hsh| hsh.key?(weight) }[weight]
  end
end