class CustomPattern < Pattern
  def fields=(fields)
    @fields = fields
  end

  def fields
    @fields
  end

  def options=(options)
    @options = options
  end

  def options
    @custom_options
  end

  def note=(note)
    @note = note
  end
  
  def note
    @note
  end
end