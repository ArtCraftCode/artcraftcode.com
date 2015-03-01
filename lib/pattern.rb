class Pattern
  attr_reader :name, :version, :version_updates, :gauge, :notions, :images, :designer, :description, :yarns, :yarns_shown, :needles, :sizes, :ravelry
  def initialize(data)
    @name = data[:name]
    @version = data[:version][:current]
    @version_updates = data[:version][:updates]
    @gauge = data[:gauge]
    @notions = data[:notions]
    @images = data[:images]
    @designer = data[:designer]
    @description = data[:description]
    @ravelry = data[:ravelry]
    @yarns = data[:yarns]
    @yarns_shown = data[:yarns_shown]
    @needles = data[:needles]
    @sizes = data[:sizes]
  end
end