require_relative './utils.rb'

module InWinter
  DESCRIPTION = 'A description should go here at some point.'

  NEEDLES = [Needle.new(4), Needle.new(5)]

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
    current: "1 (March 5, 2015)",
    updates: []
  }

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
    url: 'in-winter'
  }
end