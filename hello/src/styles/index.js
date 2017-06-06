const sf = require('sheetify')
const gr8 = require('gr8')
require('./typography')

var options = {
  fontSize: [0.7, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
    .map(function (size) {
      return { [size.toString().replace('.', '-')]: size * 1.75 }
    }),
  spacing: [0, 0.25, 0.5, 1, 1.5, 2, 3]
    .map(function (size) {
      return { [size.toString().replace('.', '-')]: size * 1.25 }
    }),
  responsive: true
}

sf('./reset.css', { global: true })
sf('./index.css', { global: true })

gr8(options).attach()