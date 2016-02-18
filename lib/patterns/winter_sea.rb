require_relative './utils.rb'

module WinterSea
  DESCRIPTION = "An asymmetrically shaped shawl that's surprisingly easy to wear with a delicate drape for style."
  GAUGE = "20 sts and 30 rows per 4 in/10 cm, stockinette stitch."
  NOTIONS = ['split-ring marker', 'darning needle']
  VERSION = {
    current: "1 (January 4, 2015)",
    updates: []
  }
  IMAGES = ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/closeup.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/hanging.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/tail.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/fence.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/wingspan.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/bundle.JPG']

  SETUP = [
    "kfb, p7, kfb.",
    "k1, p1, k7, p1. kfb.",
    "kfb, k3, p5, k2, kfb.",
    "k1, p3, k5, p3, k1, kfb.",
    "kfb, p1, k5, p3, k4, kfb.",
    "k1, p5, k3, p5, k2, kfb.",
    "kfb, k1, p1, k7, p1, k6, kfb.",
    "k1, (p7, k1) twice, p2, kfb."
  ]

  BODY = [
    "pfb, *k7, p1, repeat from * to last 4 sts, k3, kfb.",
    "p5, k1, *p7, k1, repeat from * to last st, kfb.",
    "kfb, p3, *k5, p3, repeat from * to last 4 sts, k3, kfb.",
    "*p5, k3, repeat from * to last 2 sts, p1, kfb.",
    "kfb, k1, p5, *k3, p5, repeat from * to last 4 sts, k3, kfb.",
    "k2, *p3, k5, repeat from * to last 3 sts, p2, kfb.",
    "kfb, p1, *k1, p7, repeat from * to last 4 sts, k1, p2, kfb.",
    "k4, *p1, k7, repeat from * to last 4 sts, p1, k2, kfb.",
    "kfb, *p7, k1, repeat from * to last 8 sts, p7, kfb.",
    "k1, *p1, k7, repeat from * to last 2 sts, p1, kfb.",
    "kfb, *k3, p5 to last 3 sts, k2, kfb.",
    "k1, p3, *k5, p3, repeat from * to last 2 sts, k1, kfb.",
    "kfb, p1, *k5, p3, repeat from * to last 5 sts, k4, kfb.",
    "k1, p5, *k3, p5, repeat from * to last 3 sts, k2, kfb.",
    "kfb, k1, p1, *k7, p1, repeat from * to last 7 sts, k6, kfb.",
    "k1, *p7, k1, repeat from * to last 3 sts, p2, kfb."
  ]

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
    ravelry: Ravelry.new("winter-sea-shawl-2"),
    url: 'winter_sea',
    instructions: {
      setup: SETUP,
      body: BODY
    }
  }
end