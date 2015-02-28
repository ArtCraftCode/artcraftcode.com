class Pattern
  attr_reader :version, :version_updates, :gauge, :notions, :images, :designer, :description, :yarns, :yarns_shown, :needles, :sizes
  def initialize(data)
    @data = data
    @version = data[:version][:current]
    @version_updates = data[:version][:updates]
    @gauge = data[:gauge]
    @notions = data[:notions]
    @images = data[:images]
    @designer = data[:designer]
    @description = data[:description]
    # @ravelry = Ravelry.new(data[:ravelry])
    build_lists
  end

  protected
  def build_lists
    build_yarns
    build_yarns_shown
    build_needles
    # build_sizes
  end

  def build_yarns
    @yarns = @data[:yarns].map do |data|
      # Yarn.new(data)
    end
  end

  def build_yarns_shown
    @yarns_shown = @data[:yarns_shown].map do |data|
      # YarnShown.new(data)
    end
  end

  def build_needles
    @needles = @data[:needles].map do |mm|
      # Needle.new(mm)
    end
  end

  def build_sizes
    @sizes = []
    # @sizes = @data[:sizes].map do |data|
    #   FinishedSize.new(data)
    # end
  end
end