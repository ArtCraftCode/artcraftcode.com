require_relative './utils.rb'

module ForestPark
  DESCRIPTION = 'A simple cabled cowl with garter stitch ribbing.'

  NEEDLES = [Needle.new(4.5)]

  IMAGES = ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-1.jpg', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-2.jpg']

  NOTIONS = ['stitch marker', 'cable needle (optional)', 'darning needle']

  GAUGE = "16 sts, 24 rows per 4in/10cm, garter stitch ribbing."

  VERSION = {
    current: "3 (January 4, 2015)",
    updates: [ 'Version 2: corrected Cable Set Two, Round 2. Originally ended with p1, k2, p1. Corrected to p1, k1, p1.', 'Version 3: corrected Cable Set Two, Round 3. Originally ended with p1, m1l, k1, m1r, p1. Corrected to p1, m1l, kfb, m1r, p1.'
    ]
  }

  CABLE_SET_ONE = [
    "*k5, p2, k8, p2, k5, p2, rpt from * to end.",
    "*k1, p3, k1, p2, k8, p2, k1, p3, k1, p2, rpt from * to end.",
    "*k5, p2, k8, p2, k5, p2, rpt from * to end.",
    "*k1, p3, k1, p2, C4F, C4B, p2, k1, p3, k1, p2, rpt from * to end."
  ]

  CABLE_SET_TWO = [
    "*k5, p2, k8, p2, k5, p1, m1p, p1, rpt from * to end.",
    "*k1, p3, k1, p2, k8, p2, k1, p3, k1, p1, k1, p1, rpt from * to end.",
    "*k5, p2, k8, p2, k5, p1, m1l, kfb, m1r, p1, rpt from * to end.",
    "*k1, p3, k1, p2, C4F, C4B, p2, k1, p3, k1, pfb, C4F, pfb, rpt from * to end.",
    "*k5, p2, k8, p2, k5, p2, k4, p2, rpt from * to end.",
    "*k1, p3, k1, p2, k8, p2, k1, p3, k1, p2, k4, p2, rpt from * to end.",
    "*k5, p2, k8, p2, k5, p2, k4, p2, rpt from * to end.",
    "*k1, p3, k1, p2, C4F, C4B, p2, k1, p3, k1, p2, C4F, p2, rpt from * to end."
  ]

  def self.yarns
    yarn = Yarn.new('aran', 300)
    [yarn]
  end

  def self.yarns_shown
    yarn = YarnShown.new('aran', 300)
    yarn.detail = "The Plucky Knitter Primo Aran (75% Merino, 20% Cashmere, 5% Nylon); 200 yards/183 meters per 115 grams (1.5 skeins)"
    yarn.color = "Forest Park"
    [yarn]
  end

  def self.sizes
    sizes = []
    sizes << Measurement.new("tall", 10.5)
    sizes << Measurement.new("circumference at smallest opening", 24)
    sizes << Measurement.new("circumference at largest opening", 33)
    [Size.new('One', sizes)]
  end

  DATA = {
    name: 'Forest Park Cowl',
    ravelry: Ravelry.new('forest-park-cowl'),
    designer: 'Liz Abinante',
    description: DESCRIPTION,
    version: VERSION,
    gauge: GAUGE,
    notions: NOTIONS,
    images: IMAGES,
    yarns: self.yarns,
    yarns_shown: self.yarns_shown,
    needles: NEEDLES,
    sizes: self.sizes,
    url: 'forest_park',
    instructions: {
      cable_set_one: CABLE_SET_ONE,
      cable_set_two: CABLE_SET_TWO
    }
  }
end