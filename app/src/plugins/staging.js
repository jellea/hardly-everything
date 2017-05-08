const xtend = require('xtend')

module.exports = Staging

function Staging (state, emitter) {
  state.staging = getEmptyState()

  emitter.on('staging:reset', function (data) {
    state.staging = getEmptyState()
    emitter.emit('render')
  })

  emitter.on('staging:entry', function (data) {
    state.staging.entry = xtend(state.staging.entry, data)
    emitter.emit('render')
  })
}

function getEmptyState () {
  return {
    id: '',
    entry: {
      title: '',
      tags: '',
      duration: 7,
      interval: 'days',
      visited: 0,
      timeRange: 50,
      url: ''
    }
  }
}