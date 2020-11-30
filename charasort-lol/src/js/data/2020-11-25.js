dataSetVersion = "2020-11-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Role",
    key: "role",
    tooltip: "Check this to restrict certain lanes.",
    checked: false,
    sub: [
      { name: "Toplane", key: "top" },
      { name: "Jungle", key: "jgl" },
      { name: "Midlane", key: "mid" },
      { name: "AD Carry", key: "adc" },
      { name: "Support", key: "sup" }
    ]
  },
  {
    name: "Filter by Classes",
    key: "class",
    tooltip: "Check this to restrict certain classes",
    checked: false,
    sub: [ 
        { name: "Controller", key: "controller" },
        { name: "Fighter", key: "fighter" },
        { name: "Mage", key: "mage" },
        { name: "Marksman", key: "adc" },
        { name: "Assassin", key: "assassin" },
        { name: "Tank", key: "tank" },
        { name: "Specialist", key: "specialist" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Aatrox",
    img: "uJtnjI4.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Ahri",
    img: "Tti92eq.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Akali",
    img: "0QEntch.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Alistar",
    img: "U82aE8v.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Amumu",
    img: "QVYwlPB.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Anivia",
    img: "6ytkoeT.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Annie",
    img: "LfeKZar.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Aphelios",
    img: "F4QMGG3.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Ashe",
    img: "2hUzo6c.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Aurelion Sol",
    img: "QNKn2zE.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Azir",
    img: "P5qUffI.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Bard",
    img: "nBw3mrd.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Blitzcrank",
    img: "Rj6rHHd.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Brand",
    img: "b3RHMDH.png",
    opts: {
      role: ["sup","mid"],
      class: [""]
    }
  },
  {
    name: "Braum",
    img: "f1tDFms.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Caitlyn",
    img: "V1BYh6U.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Camille",
    img: "wKF122B.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Cassiopeia",
    img: "g8WLbG4.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Cho'Gath",
    img: "mgtQG7y.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Corki",
    img: "KqvQqcm.png",
    opts: {
      role: [""], // kekekekekekekkekekekekekkekekekek
      class: [""]
    }
  },
  {
    name: "Darius",
    img: "eReVRdv.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Diana",
    img: "EA9DTr4.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Draven",
    img: "SX45mgB.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Dr. Mundo",
    img: "hKExN33.png",
    opts: {
      role: ["top","jgl"],
      class: [""]
    }
  },
  {
    name: "Ekko",
    img: "SLO8KAz.png",
    opts: {
      role: ["jgl","mid"],
      class: [""]
    }
  },
  {
    name: "Elise",
    img: "qIpd6qA.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Evelynn",
    img: "Npp6bEB.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Ezreal",
    img: "PcWywcz.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Fiddlesticks",
    img: "P8ApbkD.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Fiora",
    img: "QeXB6CB.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Fizz",
    img: "F8LzPlJ.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Galio",
    img: "4Ltlkz2.png",
    opts: {
      role: ["mid","sup"],
      class: [""]
    }
  },
  {
    name: "Gangplank",
    img: "Gm2SeoM.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Garen",
    img: "blx0JdO.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Gnar",
    img: "jKz9gJD.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Gragas",
    img: "yVZzf0t.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Graves",
    img: "wEzipHJ.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Hecarim",
    img: "U0kR7bp.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Heimerdinger",
    img: "Md5OSuq.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Illaoi",
    img: "cvOHODG.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Irelia",
    img: "1GxqNBY.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Ivern",
    img: "RNTIMaN.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Janna",
    img: "ebPG5oO.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Jarvan IV",
    img: "HzT0sbZ.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Jax",
    img: "6yxdU7L.png",
    opts: {
      role: ["top","jgl"],
      class: [""]
    }
  },
  {
    name: "Jayce",
    img: "xGtknaI.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Jhin",
    img: "FdI7A1g.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Jinx",
    img: "uSj2WTa.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Kai'Sa",
    img: "csuyAMj.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Kalista",
    img: "uQn7EN9.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Karma",
    img: "5ZCnRAA.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Karthus",
    img: "mIuraWs.png",
    opts: {
      role: ["mid","jgl"],
      class: [""]
    }
  },
  {
    name: "Kassadin",
    img: "BPcrQs2.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Katarina",
    img: "kIoyvDK.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Kayle",
    img: "JiebDx9.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Kayn",
    img: "3mPCeHP.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Kennen",
    img: "tpCiOKD.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Kha'Zix",
    img: "txV1tTJ.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Kled",
    img: "L7eZdMa.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Kog'Maw",
    img: "6N9kNuK.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "LeBlanc",
    img: "TaAPbXN.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Lee Sin",
    img: "TT5OFoG.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Leona",
    img: "ZnRwJHS.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Lillia",
    img: "EABIuzw.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Lissandra",
    img: "Wf2nc4O.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Lucian",
    img: "OBPBUux.png",
    opts: {
      role: ["mid","top","adc"],
      class: [""]
    }
  },
  {
    name: "Lulu",
    img: "qPQh3eZ.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Lux",
    img: "RdbGYcA.png",
    opts: {
      role: ["sup","mid"],
      class: [""]
    }
  },
  {
    name: "Malphite",
    img: "xPRBDgR.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Malzahar",
    img: "GYZZUKu.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Maokai",
    img: "L3Pv2gv.png",
    opts: {
      role: ["top","sup"],
      class: [""]
    }
  },
  {
    name: "Master Yi",
    img: "ywJUp35.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Miss Fortune",
    img: "jOvwMGU.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Mordekaiser",
    img: "yMYPaAP.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Morgana",
    img: "EgZzt0R.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Nami",
    img: "10LlT74.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Nasus",
    img: "vNmnBY4.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Nautilus",
    img: "zxg9nls.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Neeko",
    img: "ZyKW2nu.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Nidalee",
    img: "XrSL4Oj.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Nocturne",
    img: "XGaWaYt.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Nunu & Willump",
    img: "O9QDyAo.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Olaf",
    img: "bxadj7p.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Orianna",
    img: "JrUX2C3.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Ornn",
    img: "yFk7cOU.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Pantheon",
    img: "LjT2d9z.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Poppy",
    img: "T0ucAl3.png",
    opts: {
      role: ["top","jgl"],
      class: [""]
    }
  },
  {
    name: "Pyke",
    img: "BKN615l.png",
    opts: {
      role: ["sup","mid"],
      class: [""]
    }
  },
  {
    name: "Qiana",
    img: "O4cZbnz.png",
    opts: {
      role: ["mid","jgl"],
      class: [""]
    }
  },
  {
    name: "Quinn",
    img: "9gk6I91.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Rakan",
    img: "JIAyW0u.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Rammus",
    img: "J5F74Qa.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Rek'Sai",
    img: "VgfNOG1.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Renekton",
    img: "I8iWykA.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Rengar",
    img: "KOYR7G1.png",
    opts: {
      role: ["jgl","top"],
      class: [""]
    }
  },
  {
    name: "Riven",
    img: "A70ruil.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Rumble",
    img: "ikBKCBI.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Ryze",
    img: "t2WNOOs.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Samira",
    img: "B4knUrj.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Sejuani",
    img: "D7R2gtE.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Senna",
    img: "vY00fJk.png",
    opts: {
      role: ["adc","sup"],
      class: [""]
    }
  },
  {
    name: "Seraphine",
    img: "bPMcJXz.png",
    opts: {
      role: ["mid","sup"],
      class: [""]
    }
  },
  {
    name: "Sett",
    img: "okNWVgg.png",
    opts: {
      role: ["sup","top"],
      class: [""]
    }
  },
  {
    name: "Shaco",
    img: "aDWTWw6.png",
    opts: {
      role: ["jgl","sup"],
      class: [""]
    }
  },
  {
    name: "Shen",
    img: "iDeletG.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Shyvanna",
    img: "25lXKo4.png",
    opts: {
      role: ["jggl"],
      class: [""]
    }
  },
  {
    name: "Singed",
    img: "2aUODGH.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Sion",
    img: "RTp9bGj.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Sivir",
    img: "syLRqWF.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Skarner",
    img: "WalvSt2.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Sona",
    img: "R6Adr7v.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Soraka",
    img: "gMDENAX.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Swain", 
    img: "yg9uoAO.png",
    opts: {
      role: ["sup","adc"],
      class: [""]
    }
  },
  {
    name: "Sylas",
    img: "PzfcBMu.png",
    opts: {
      role: ["top","mid","jgl"],
      class: [""]
    }
  },
  {
    name: "Syndra",
    img: "2WZN7G2.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Tahm Kench",
    img: "NAa0Wp9.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Taliyah",
    img: "AtjYNV6.png",
    opts: {
      role: ["jgl","mid"],
      class: [""]
    }
  },
  {
    name: "Talon",
    img: "cds7brN.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Taric",
    img: "iyboFcr.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Teemo",
    img: "euTy3Gs.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Thresh",
    img: "xvfI9tJ.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Tristana",
    img: "BBOpxW5.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Trundle",
    img: "KFc28tF.png",
    opts: {
      role: ["jgl","top"],
      class: [""]
    }
  },
  {
    name: "Tryndamere",
    img: "Dl7G3xd.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Twisted Fate",
    img: "UzPM6b7.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Twitch",
    img: "fEbz1xg.png",
    opts: {
      role: ["adc","sup"],
      class: [""]
    }
  },
  {
    name: "Udyr",
    img: "bKtfSoK.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Urgot",
    img: "Rv94Min.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Varus",
    img: "I6JoRy4.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Vayne",
    img: "iEQ0pxg.png",
    opts: {
      role: ["adc","top"],
      class: [""]
    }
  },
  {
    name: "Veigar",
    img: "FbTzV7Q.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Vel'Koz",
    img: "e23YeBY.png",
    opts: {
      role: ["mid","sup"],
      class: [""]
    }
  },
  {
    name: "Viktor",
    img: "PQqAQ6R.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Vi",
    img: "XFM4YH7.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Vladimir",
    img: "0OJQwiL.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Volibear",
    img: "BIGuMO6.png",
    opts: {
      role: ["jgl","top"],
      class: [""]
    }
  },
  {
    name: "Warwick",
    img: "iOaa1zk.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Wukong",
    img: "2l9oXVh.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Xayah",
    img: "I3I5mx4.png",
    opts: {
      role: ["adc"],
      class: [""]
    }
  },
  {
    name: "Xerath",
    img: "ajxYkcs.png",
    opts: {
      role: ["mid","sup"],
      class: [""]
    }
  },
  {
    name: "Xin Zhao",
    img: "0zm6IGY.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Yasuo",
    img: "rbDNR0A.png",
    opts: {
      role: ["top","mid","adc"],
      class: [""]
    }
  },
  {
    name: "Yone",
    img: "Bqd6gkX.png",
    opts: {
      role: ["top","mid"],
      class: [""]
    }
  },
  {
    name: "Yorick",
    img: "x6Lbzc3.png",
    opts: {
      role: ["top"],
      class: [""]
    }
  },
  {
    name: "Yuumi",
    img: "JuSn8uN.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Zac",
    img: "aWyZ50O.png",
    opts: {
      role: ["jgl"],
      class: [""]
    }
  },
  {
    name: "Zed",
    img: "EXG7oIR.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Ziggs",
    img: "FWJ15HP.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Zilean",
    img: "JpWwETB.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  },
  {
    name: "Zoe",
    img: "os86vh5.png",
    opts: {
      role: ["mid"],
      class: [""]
    }
  },
  {
    name: "Zyra",
    img: "kSLCMJD.png",
    opts: {
      role: ["sup"],
      class: [""]
    }
  }
];