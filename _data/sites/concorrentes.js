module.exports={
  // name: "Bernoulli Institucional", // optional, falls back to object key
  description: "Concorrentes",
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
    "https://somoseducacao.com.br/",
    "https://www.geekie.com.br/",
    "https://cloeedu.com.br/",
    "https://www.sistemapoliedro.com.br/",
    "https://saseducacao.com.br/",
    "https://www.sistemapositivo.com.br/",
    "https://ftd.com.br/",
    "https://sae.digital/",
    "https://www.moderna.com.br/",
    "https://sistemafb.com.br/",
    "https://www.santillana.com.br/",
    // "https://etapa.com.br/",
    // "https://www.objetivo.br/",
    // "https://www.redepitagoras.com.br/",
    // "https://sejaetico.com.br/",
    // "https://www.maxieduca.com.br/",
    // "https://www.educacaoconquista.com.br/",
    "https://coc.com.br/",
    // "https://seb.com.br/",
    // "https://www.conexia.com.br/",
    // "https://ampliaplataforma.com.br/",
    // "https://www.sistemadeensinoph.com.br/",
    // "https://www.mackenzie.br/",
    // "https://www.audeeducacao.com.br/",
    // "https://www.redecristadeeducacao.com.br/",
    // "https://ensinoelite.com.br/",
    // "https://gruposaltaedu.com/",
    // "https://raizeducacao.com.br/",
    // "https://www.sistemadeensinosucesso.com.br/",
  ]
};