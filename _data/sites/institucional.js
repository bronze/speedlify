module.exports={
  // name: "Bernoulli Institucional", // optional, falls back to object key
  description: "Bernoulli Institucional",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT||process.env.SITE_NAME!=="speedlify",
  skip: false,
  options: {
    // frequency: 60*23, // 24 hours
    frequency: 60*11+30, // 11h, 30m
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "site"
  },
  urls: [
    "https://www.bernoulli.com.br/",
    "https://www.bernoulli.com.br/educacao/",
    "https://www.bernoulli.com.br/colegio/",
    "https://www.bernoulli.com.br/pre-vestibular/",
    "https://www.bernoulli.com.br/sistema-de-ensino/",
  ]
};