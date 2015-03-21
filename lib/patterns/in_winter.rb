require_relative './utils.rb'

module InWinter
  DESCRIPTION = 'A wrapped stitch motif resemmling bundles of wheat is paired with simple lace. Knit using vibrant colors, this comforting shawl is sure to chase away winter blues.'

  NEEDLES = [Needle.new(4, 'Color A'), Needle.new(5, 'Colors B, C')]

  IMAGES =  [
              'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/in-winter/IMG_6976.JPG',
              'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/in-winter/IMG_6999.JPG',
              'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/in-winter/IMG_7001.JPG',
              'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/in-winter/IMG_7002.JPG',
              'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/in-winter/IMG_7003.JPG'
            ]

  NOTIONS = ['4 stitch markers', 'cable needle', 'darning needle']

  GAUGE = "17 sts, 32 rows per 4in/10cm, garter stitch using smallest needle. 14 sts, 28 rows per 4 in/10cm, garter stitch using largest needle"

  VERSION = {
    current: "1 (March 21, 2015)",
    updates: []
  }

  A = [
    "(RS) k3, pm, yo, k1, yo, pm, k1, pm, yo, k1, yo, pm, k3.",
    "(WS) k to 2nd m, slm, p1, slm, k to end.",
    "k3, slm, yo, k to m, yo, slm, k1, slm, yo, k to m, yo, slm, k3."
  ]

  B = [
    { row: 1, text: "(RS) k3, slm, yo, k to last m (removing 2nd and 3rd markers as you come to them), yo, slm, k3." },
    { row: 2, text: "(WS) k3, slm, k2, *wrap3, rpt from * to 2 sts before m, k2, slm, k3." },
    { row: 3, text: "k3, slm, yo, k2, *drop5, rpt from * to 2 sts before m, k2, yo, slm, k3." },
    { row: 4, text: "k all sts." },
    { row: 5, text: "k3, slm, yo, k to m, yo, slm, k3." },
    { row: 6, text: "k all sts." },
    { row: 7, text: "k3, slm, yo, k to m, yo, slm, k3." },
    { row: 8, text: "k3, slm, k2, *wrap3, rpt from * to 1 st before m, k1, slm, k3." },
    { row: 9, text: "k3, slm, yo, k1, drop7, *drop5, rpt from * to 8 sts before m, drop6, k2, yo, slm, k3. " },
    { row: "10-13", text: "as Rows 4-7." },
    { row: "14-15", text: "as Rows 4-5." },
    { row: 16, text: "k3, slm, k1, *wrap3, rpt from * to 2 sts before m, k2, slm, k3." },
    { row: 17, text: "k3, slm, yo, k2, *drop5, rpt from * to last 7 sts, drop6, k1, yo, slm, k3." },
    { row: "18-21", text: "as Rows 4-7." },
    { row: "22-25", text: "as Rows 4-7." }
  ]

  C = [
    { row: 1, text: "(RS) k3, slm, yo, kfb, k to 1 st before m, kfb, yo, slm, k3." },
    { row: 2, text: "(WS) k all sts." },
    { row: 3, text: "k3, slm, yo, *k2tog, yo, k1, rpt from * to m, yo, slm, k3." },
    { row: 4, text: "k all sts." },
    { row: 5, text: "k3, slm, yo, k to m, yo, slm, k3." },
    { row: 6, text: "k all sts." },
    { row: 7, text: "k3, slm, yo, k to m, yo, slm, k3." },
    { row: 8, text: "k3, slm, yo, *k2tog, yo, k1, rpt from * to m, yo, slm, k3." },
    { row: "9-12", text: "as Rows 5-8." },
    { row: "13-15", text: "as Rows 5-8." }
  ]

  def self.yarns
    yarns = []
    yarns << Yarn.new('dk', 196, 'Color A')
    yarns << Yarn.new('dk', 165, 'Color B')
    yarns << Yarn.new('dk', 155, 'Color C')
    yarns
  end

  def self.yarns_shown
    yarns = []
    yarnA = YarnShown.new('dk', 196, 'Color A')
    yarnA.detail = "Madelinetosh Tosh DK (225 yards / 205 meters per 115 grams)"
    yarnA.color = "Silver Fox"
    yarns << yarnA
    yarnB = YarnShown.new('dk', 165, 'Color B')
    yarnB.detail = "Madelinetosh Tosh DK (225 yards / 205 meters per 115 grams)"
    yarnB.color = "Button Jar Blue"
    yarns << yarnB
    yarnC = YarnShown.new('dk', 155, 'Color C')
    yarnC.detail = "Madelinetosh Tosh DK (225 yards / 205 meters per 115 grams)"
    yarnC.color = "Logwood"
    yarns << yarnC
    yarns
  end

  def self.sizes
    sizes = []
    sizes << Measurement.new("wingspan", 56.75)
    sizes << Measurement.new("depth", 25.5)
    [Size.new('One', sizes)]
  end

  DATA = {
    name: 'In Winter',
    ravelry: Ravelry.new('in-winter'),
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
    url: 'in_winter',
    instructions: {
      a: A,
      b: B,
      c: C
    }
  }
end