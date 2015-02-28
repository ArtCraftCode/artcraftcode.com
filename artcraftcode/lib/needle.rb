require_relative './libraries.rb'

class Needle
  attr_reader :mm, :us

  def initialize(mm)
    @mm = mm
    @us = Libraries::NEEDLES[mm]
  end

  def to_s
    "US #{us} (#{mm} mm)"
  end

  def circular_to_s
    "#{self.to_s} circular needle"
  end
end