module.exports={
  name: "Bernoulli Produtos", // optional, falls back to object key
  description: "Bernoulli Produtos",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT||process.env.SITE_NAME!=="speedlify",
  skip: false,
  options: {
    frequency: 60*11+30, // 11h, 30m
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run",
  },
  urls: [
    "https://mb4.bernoulli.com.br/",
    "https://meu.bernoulli.com.br/xp/3.5.2/index.html",
    "https://diveb.bernoulli.com.br/",
    "https://play.bernoulli.com.br/",
  ]
};