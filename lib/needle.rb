require_relative './libraries.rb'

class Needle
  attr_reader :mm, :us, :label

  def initialize(mm, label=nil)
    @mm = mm
    @label = label
    @source = set_source
  end

  def us
    @source[mm]
  end

  def to_s
    "US #{us} (#{mm} mm)"
  end

  def circular_to_s
    "#{self.to_s} circular needle"
  end

  protected
  def index
    Libraries::NEEDLES.index { |hsh| hsh.key?(mm) }
  end

  def set_source
    Libraries::NEEDLES.find { |hsh| hsh.key?(mm) }
  end
end