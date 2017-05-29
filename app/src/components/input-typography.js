var Component = require('rooch/component')
var h = require('rooch/h')
var html = require('rooch/html')
var x = require('xtend')
var objectValues = require('object-values')

var typography = require('../css/typography')

class Typography extends Component {
  constructor () {
    super()

    this.state = {
      active: false,
    }

    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleCurrentClick = this.handleCurrentClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleOptionClick (data, event) {
    this.setState({ active: false })
    this.emit('options:values', {
      key: 'font',
      value: data
    })
  }

  handleCurrentClick (data, event) {
    this.emit('options:typography')
    this.setState({ active: !this.state.active })
  }

  handleScroll (event) {
    event.stopPropagation()
  }

  elOption (data) {
    return html`
      <div
        class="px1 curp fs1-5 line"
        onclick=${event => this.handleOptionClick(data, event)}
        style="
          font-family: ${data.value}, sans-serif;
          font-weight: ${data.weight || 400};
        "
      >${data.name}</div> 
    `
  }

  elContainer () {
    var options = objectValues(this.props.options)
    return html`
      <div
        class="
          bg-white tc-black input-dropdown-options
          ${this.state.active ? 'db' : 'dn'}
        "
        onscroll=${this.handleScroll}
      >
        ${options.map(option => this.elOption(option))}
      </div>
    `
  }

  elCurrent () {
    return html`<div
      class="psr c12 curp x xje line"
      onclick=${event => this.handleCurrentClick({ }, event)}
    >
      <label class="psa t0 l0 px1">
        Font
      </label>
      <div class="px1 design-font">
        ${this.props.current.name}
      </div>
    </div>`
  }

  render () {
    return html`
      <div class="usn c12 psr">
        ${this.elCurrent()}
        ${this.elContainer()}
      </div>
    `
  }
}

module.exports = Typography
