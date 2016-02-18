require_relative './utils.rb'

module Misdirected
  DESCRIPTION = 'A warm, oversized, easy-to-knit lace cowl that\'s great for color scraps!'

  NEEDLES = [Needle.new(4.5)]

  IMAGES = [ 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/IMG_6598.JPG',
             'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/IMG_6600.JPG',
             'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/IMG_6602.JPG',
             'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/IMG_6604.JPG' ]

  NOTIONS = ['darning needle']

  GAUGE = "24 sts per 4 inch/10 cm, 28 rows per 4 inch/10 cm, stockinette."

  VERSION = {
    current: "1 (March 29, 2015)",
    updates: []
  }

  def self.yarns
    [Yarn.new('dk', 220, 'MC'), Yarn.new('dk', 170, 'CC')]
  end

  def self.yarns_shown
    yarns = []
    mc = YarnShown.new('dk', 220, 'MC')
    mc.detail = "Wooly Wonka Freya DK (100% BFL, 300 yards/274 meters per 100 grams)"
    mc.color = "Pewter (gray)"
    cc = YarnShown.new('dk', 170, 'MC')
    cc.detail = "Wooly Wonka Freya DK (100% BFL, 300 yards/274 meters per 100 grams)"
    cc.color = "Winterfell (green)"
    yarns << mc
    yarns << cc
  end

  def self.sizes
    sizes = []
    sizes << Measurement.new("tall", 21)
    sizes << Measurement.new("circumference", 34)
    [Size.new('One', sizes)]
  end

  MC_LACE = [ "k4, *k6, k2tog, yo, repeat from * to last 5 sts, k5.",
              "k4, p1, *k1, p7, repeat from * to last 4 sts, k4.",
              "k4, *k5, k2tog, yo, p1, repeat from * to last 5 sts, k5.",
              "k4, p1, *k2, p6, repeat from * to end.",
              "k4, *k4, k2tog, yo, p2, repeat from * to last 5 sts, k5.",
              "k4, p1, *k3, p5, repeat from * to end.",
              "k4, *k3, k2tog, yo, p3, repeat from * to last 5 sts, k5.",
              "k4, p1, *k4, p4, repeat from * to end.",
              "k4, *k2, k2tog, yo, p4, repeat from * to last 5 sts, k5.",
              "k4, p1, *k5, p3, repeat from * to end.",
              "k4, *k1, k2tog, yo, p5, repeat from * to last 5 sts, k5.",
              "k4, p1, *k6, p2, repeat from * to end.",
              "k4, *k2tog, yo, p6, repeat from * to last 5 sts, k5.",
              "k4, p1, *k7, p1, repeat from * to end." ]

  CC_LACE = [ "k5, *yo, ssk, k6, repeat from * to last 4 sts, k4.",
              "k4, *p7, k1, repeat from * to last 5 sts, p1, k4.",
              "k5, *p1, yo, ssk, k5, repeat from * to last 4 sts, k4.",
              "k4, *p6, k2, repeat from * to last 5 sts, p1, k4.",
              "k5, *p2, yo, ssk, k4, repeat from * to last 4 sts, k4.",
              "k4, *p5, k3, repeat from * to last 5 sts, p1, k4.",
              "k5, *p3, yo, ssk, k3, repeat from * to last 4 sts, k4.",
              "k4, *p4, k4, repeat from * to last 5 sts, p1, k4.",
              "k5, *p4, yo, ssk, k2, repeat from * to last 4 sts, k4.",
              "k4, *p3, k5, repeat from * to last 5 sts, p1, k4.",
              "k5, *p5, yo, ssk, k1, repeat from * to last 4 sts, k4.",
              "k4, *p2, k6, repeat from * to last 5 sts, p1, k4.",
              "k5, *p6, yo, ssk, repeat from * to last 4 sts, k4.",
              "k4, *p1, k7, repeat from * to last st, p1." ]

  DATA = {
    name: 'Misdirected Cowl',
    ravelry: Ravelry.new('misdirected-cowl'),
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
    url: 'misdirected',
    instructions: {
      mc_lace: MC_LACE,
      cc_lace: CC_LACE
    }
  }
end