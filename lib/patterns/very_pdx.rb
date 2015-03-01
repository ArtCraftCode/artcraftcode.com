require_relative './utils.rb'

module VeryPDX
  DESCRIPTION = "A unisex cap with a double brim for warmth and smooth finish."
  GAUGE = "13 sts, 20 rows per 4in/10cm in stockinette stitch using largest needle"
  NOTIONS = ['stitch marker', 'waste yarn', 'darning needle']
  VERSION = {
    current: '3 (January 25, 2015)',
    updates: [
      'Version 2: Corrected missing CC for brim CO; corrected missing yarn weight labels for custom sizes.',
      'Verison 3: Corrected last line of brim instructions before folding; originally read "Using smallest circular needle, k all sts", changed to "Using largest circular needle, k all sts".'
    ]
  }
  IMAGES = ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/very-pdx-1.jpg']

  def self.yarns
    yarns = []
    yarns << Yarn.new("aran", 135, "MC")
    yarns << Yarn.new("aran", 25, "CC")
    yarns
  end

  def self.yarns_shown
    yarns = []
    mc = YarnShown.new("aran", 135, "MC")
    mc.detail = "madelinetosh tosh chunky"
    mc.color = "Steam Age"
    yarns << mc

    cc = YarnShown.new("aran", 25, "CC")
    cc.detail = "The Plucky Knitter Primo Aran"
    cc.color = "Think Pink"
    yarns << cc
    yarns
  end

  def self.needles
    needles = []
    needles << Needle.new(5, "contrast brim")
    needles << Needle.new(5.5, "brim RS and hat body")
    needles
  end

  def self.sizes
    sizes = Libraries::HAT_SIZES
    as_written = []
    as_written << Measurement.new("circumference", 21)
    sizes << Size.new("women's small (as written)", as_written)
    sizes
  end

  DATA = {
    name: "Very PDX",
    designer: "Liz Abinante",
    description: DESCRIPTION,
    yarns: self.yarns,
    yarns_shown: self.yarns_shown,
    needles: self.needles,
    gauge: GAUGE,
    sizes: self.sizes,
    notions: NOTIONS,
    version: VERSION,
    images: IMAGES,
    ravelry: Ravelry.new("very-pdx-hat")
  }

  CUSTOM_FIELDS = {
    cast_on: 72,
    brim_rows: 11,
    brim_height: 2,
    body_height: 6.5,
    multiple: 4,
    baby_decreases: false
  }

  CUSTOM_OPTIONS = Libraries::HAT_SIZES

  CUSTOM_NOTE = "The finished measurements are the actual measurements of the hat. Choose a size that gives you approximately 1in/2.54cm negative ease. I knit a women\'s small (21in/53cm) for myself and my head is approximately 22in/56cm around."
end