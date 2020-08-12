const PROXY_CONFIG = [
  {
    context: ['/api'],
    //target: 'http://localhost:3000/',
    target: 'http://amazoniassist-api-com-br.umbler.net/',
    secure: false,
    logLevel: 'debug'
  }
]
module.exports = PROXY_CONFIG;
