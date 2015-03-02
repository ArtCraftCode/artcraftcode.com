class Ravelry
  def initialize(perma)
    @perma = perma
  end

  def link
    "http://www.ravelry.com/patterns/library/#{@perma}"
  end

  def button
    "http://api.ravelry.com/badges/projects?p=#{@perma}&amp;t=.gif"
  end
end