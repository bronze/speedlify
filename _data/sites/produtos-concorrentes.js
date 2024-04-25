module.exports={
  // name: "Produtos Concorrentes", // optional, falls back to object key
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
    "https://cloeapp.com/",
    // "https://pmais.p4ed.com/", redirect to bug ass url
    // "https://portalsaseducacao.com.br/", 2 redirects
    "https://positivoon.com.br/",
    "https://app.souionica.com.br/",
    "https://ava.sae.digital/",
    // "https://compartir.stn-neds.com/", redirect to santilla
    "https://identity.santillanaconnect.com/",
  ]
};