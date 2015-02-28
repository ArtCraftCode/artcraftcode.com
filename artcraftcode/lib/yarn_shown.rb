require_relative './yarn.rb'

class YarnShown < Yarn
  def color=(color)
    @color = color
  end

  def color
    @color
  end

  def detail=(detail)
    @detail = detail
  end

  def detail
    @detail
  end
end