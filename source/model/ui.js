const xtend = require('xtend')

const namespace = 'ui'



exports.state = {
  // panelActive: false,
  panelActive: true,
  stagingActive: false,
  entriesViewAll: false
}

exports.reducers = {
  update: (data, state) => xtend(state, data)
}

exports.namespace = namespace