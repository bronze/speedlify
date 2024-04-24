module.exports={
  description: "Produtos Concorrentes",
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
    "https://www.plurall.net/",
    "https://one.geekie.com.br/",
    "https://cloeedu.com.br/",
    "https://pmais.p4ed.com/",
    "https://portalsaseducacao.com.br/",
    "https://positivoon.com.br/",
    "https://app.souionica.com.br/",
    "https://ava.sae.digital/",
    "https://www.modernacompartilha.com.br/",
    "https://identity.santillanaconnect.com/",
  ]
};