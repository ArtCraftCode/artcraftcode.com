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


  DATA = {
    name: "Very PDX",
    designer: "Liz Abinante",
    description: DESCRIPTION,
    yarns_shown: self.yarns_shown,
    needles: self.needles,
    gauge: GAUGE,
    notions: NOTIONS,
    version: VERSION,
    images: IMAGES,
    ravelry: Ravelry.new("very-pdx-hat"),
    url: 'very-pdx',
    instructions: {
      # !(pattern.babyDecreases() && pattern.decrease_4)
      standard: [
        "*k7, k2tog, rpt from * to end.",
        "k all sts.",
        "*k6, k2tog, rpt from * to end.",
        "k all sts.",
        "*k5, k2tog, rpt from * to end.",
        "k all sts.",
        "*k4, k2tog, rpt from * to end.",
        "k all sts.",
        "*k3, k2tog, rpt from * to end.",
        "*k2, k2tog, rpt from * to end.",
        "*k1, k2tog, rpt from * to end.",
        "*k2tog, rpt from * to end."
      ],
      # pattern.babyDecreases() && !pattern.decrease_4
      baby: [
        "*k4, k2tog, rpt from * to end.",
        "k all sts.",
        "*k3, k2tog, rpt from * to end.",
        "k all sts.",
        "*k2, k2tog, rpt from * to end.",
        "*k1, k2tog, rpt from * to end.",
        "*k2tog, rpt from * to end.",
      ],
      # pattern.babyDecreases() && pattern.decrease_4
      baby4: [
        "*k8, k2tog, rpt from * to end.",
        "k all sts.",
        "*k7, k2tog, rpt from * to end.",
        "k all sts.",
        "*k6, k2tog, rpt from * to end.",
        "k all sts.",
        "*k5, k2tog, rpt from * to end.",
        "k all sts.",
        "*k4, k2tog, rpt from * to end.",
        "*k3, k2tog, rpt from * to end.",
        "*k2, k2tog, rpt from * to end.",
        "*k1, k2tog, rpt from * to end.",
        "*k2tog, rpt from * to end."
      ],
      # !pattern.babyDecreases() && !pattern.decrease_4
      adult4: [
        "*k8, k2tog, rpt from * to end.",
        "k all sts.",
        "*k7, k2tog, rpt from * to end.",
        "k all sts.",
        "*k6, k2tog, rpt from * to end.",
        "k all sts.",
        "*k5, k2tog, rpt from * to end.",
        "k all sts.",
        "*k4, k2tog, rpt from * to end.",
        "k all sts.",
        "*k3, k2tog, rpt from * to end.",
        "k all sts.",
        "*k2, k2tog, rpt from * to end.",
        "*k1, k2tog, rpt from * to end.",
        "*k2tog, rpt from * to end."
      ]
    }
  }
end