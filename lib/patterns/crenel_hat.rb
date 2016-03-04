require_relative "./utils.rb"

module CrenelHat
  DESCRIPTION = "Ribbing transitions into colorwork with this simple unisex hat. Great for using scraps and an easy introduction to stranded colorwork with some longer floats."

  NEEDLES = [Needle.new(4)]

  IMAGES =  [
              'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/wingspan.JPG'
            ]

  NOTIONS = ["1 stitch marker", "preferred needles in size required for small circumference in-the-round knitting"]

  GAUGE = "Gauge is not critical for this project. Use the best needle for working with your worsted weight yarn. Stitches should be lofty, not too tight."

  VERSION = {
    current: "2 (March 4, 2016)",
    updates: ["Version 2: Corrected flip-flopped needle sizes (US 4 6.00 mm - lol whoops! - should be US 6 4.00 mm). This was correct on the Ravelry page, and is now correct in the pattern."]
  }

  CAST_ON = [
    "Using your circular needle and ribbing color, cast on 91 stitches.",
    "Place marker and join for knitting in the round, taking care not to twist."
  ]

  RIBBING = [
    "Using Ribbing color:",
    "Ribbing: *k1, p1, k3, p1, k1, repeat from * to end of round.",
    "Work in Ribbing pattern for approximately 1.5in/3.8cm."
  ]

  BODY = [
    "Using Main color:",
    "Work Rounds 1-7 of the chart.",
    "Continue working in main color until hat is 2in/5cm from desired length."
  ]

  DECREASES = [
    { round: 1, text: "*k7, k2tog, repeat from * to end of round." },
    { round: "2, 4, 6, 8, 10, 12", text: "k all stitches." },
    { round: 3, text: "*k6, k2tog, repeat from * to end of round." },
    { round: 5, text: "*k5, k2tog, repeat from * to end of round." },
    { round: 7, text: "*k4, k2tog, repeat from * to end of round." },
    { round: 9, text: "*k3, k2tog, repeat from * to end of round." },
    { round: 11, text: "*k2, k2tog, repeat from * to end of round." },
    { round: 13, text: "*k1, k2tog, repeat from * to end of round." },
    { round: 14, text: "*k2tog, repeat from * to end of round." }
  ]

  def self.yarns
    yarns = []
    yarns << Yarn.new("worsted", 70, "Ribbing color")
    yarns << Yarn.new("worsted", 150, "Main color")
    yarns
  end

  def self.yarns_shown
    yarns = []
    yarnA = YarnShown.new("worsted", 70, "Ribbing color")
    yarnA.detail = "The Plucky Knitter Trusty (250 yards / 228 meters per 100 grams)"
    yarnA.color = "Magnet & Steel"
    yarns << yarnA
    yarnB = YarnShown.new("worsted", 150, "Main color")
    yarnB.detail = "The Plucky Knitter Trusty (250 yards / 228 meters per 100 grams)"
    yarnB.color = "Pollen"
    yarns << yarnB
    yarns
  end

  def self.sizes
    sizes = []
    sizes << Size.new("Women's medium", [Measurement.new("circumference", 21)])
    sizes << Size.new("Men's medium", [Measurement.new("circumference", 23)])
  end

  DATA = {
    name: "Crenel Hat",
    ravelry: Ravelry.new("crenel-hat"),
    designer: "Liz Abinante",
    description: DESCRIPTION,
    version: VERSION,
    gauge: GAUGE,
    notions: NOTIONS,
    images: IMAGES,
    yarns: self.yarns,
    yarns_shown: self.yarns_shown,
    needles: NEEDLES,
    sizes: self.sizes,
    url: "crenel_hat",
    instructions: {
      cast_on: CAST_ON,
      ribbing: RIBBING,
      body: BODY,
      decreases: DECREASES,
      finishing: ["Weave in ends and block hat if desired."]
    }
  }
end