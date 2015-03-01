require_relative './utils.rb'

module WinterSea
  DESCRIPTION = "An asymmetrically shaped shawl that\'s surprisingly easy to wear."
  GAUGE = "20 sts and 30 rows per 4 in/10 cm, stockinette stitch."
  NOTIONS = ['split-ring marker', 'darning needle']
  VERSION = {
    current: "1 (January 4, 2015)",
    updates: []
  }
  IMAGES = ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/closeup.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/hanging.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/tail.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/fence.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/wingspan.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/bundle.JPG']

  def self.yarns
    yarn = Yarn.new('worsted', 390)
    [yarn]
  end

  def self.yarns_shown
    yarn = YarnShown.new('worsted', 390)
    yarn.detail = "Madelinetosh Tosh Vintage (100% superwash merino; 200 yards/182 meters per 100 grams), 1.9 skeins"
    yarn.color = "Opaline"
    [yarn]
  end

  def self.needles
    needle = Needle.new(4.5)
    [needle]
  end

  def self.sizes
    sizes = []
    sizes << Measurement.new("wingspan", 53.25)
    sizes << Measurement.new("deepest point", 19)
    [Size.new('One', sizes)]
  end

  DATA = {
    name: "Winter Sea",
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
    ravelry: Ravelry.new("winter-sea-shawl-2")
  }
end