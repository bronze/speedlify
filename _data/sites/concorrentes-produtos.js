module.exports={
  // name: "Produtos Concorrentes", // optional, falls back to object key
  description: "Concorrentes Produtos",
  // skip if localhost
  // skip if this is a new fork of the speedlify (not Zach’s)
  // skip: !process.env.CONTEXT||process.env.SITE_NAME!=="speedlify",
  skip: false,
  options: {
    frequency: 1, // 11h, 30m
    // Use "run" if the sites don’t share assets on the same origin
    //           and we can reset chrome with each run instead of
    //           each site in every run (it’s faster)
    // Use "site" if sites are all on the same origin and share assets.
    freshChrome: "run",
  },
  urls: [
    "https://login.plurall.net/",
    "https://one.geekie.com.br/",
    "https://cloeapp.com/",
    "https://app.souionica.com.br/",
    "https://ava.sae.digital/",
    // "https://pmais.p4ed.com/", redirect to bug ass url
    // "https://poliedro-login.p4ed.com/realms/poliedro/protocol/openid-connect/auth?client_id=pmais&redirect_uri=https%3A%2F%2Fpmais.p4ed.com%2Fkeycloak&state=a4b683cb-9d51-4ed6-899a-0061fc67ca65&response_mode=fragment&response_type=code&scope=openid&nonce=0d663a57-5c2e-456b-897d-cc96276a1819",
    // "https://portalsaseducacao.com.br/", 2 redirects
    "https://portalsaseducacao.com.br/?redirect=https%3A%2F%2Fhome.portalsaseducacao.com.br%2F",
    "https://positivoon.com.br/",
    "https://portal.educacaoconquista.com.br/login",
    // "https://compartir.stn-neds.com/", redirect to santilla
    "https://identity.santillanaconnect.com/",
    "https://portal.coc.com.br/login/",
    // "https://aluno.sistemaetapa.com.br/",
    // "https://portaisetapa.b2clogin.com/portaisetapa.onmicrosoft.com/B2C_1_SignUpSignInAluno/oauth2/v2.0/authorize?client_id=5756c6a4-d537-47e6-bf13-585e3f43454d&response_type=code&redirect_uri=https://aluno.sistemaetapa.com.br&response_mode=query&scope=openid%20offline_access",
    "https://sso.lex.education/",
    // "https://portal.audeeducacao.com.br/",
    // "https://portalrm.raizeducacao.com.br/FrameHTML/Web/App/Edu/PortalEducacional/login/",
    // "https://www.sistemadeensinosucesso.com.br/area-aluno.php",
  ]
};