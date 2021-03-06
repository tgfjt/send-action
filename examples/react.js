var sendAction = require('send-action')
var dom = require('react-dom')
var react = require('react')

/*
* Create send function.
*/
var send = sendAction({
  onaction: onaction,
  onchange: onchange,
  state: { value: 'ok' }
})

var appEl = document.body.appendChild(document.createElement('div'))
appEl.id = 'app'

/*
* Set up the action handler to modify state based on the actions triggered
*/
function onaction (action, state) {
  if (action.type === 'example') {
    return { value: action.value }
  }
}

/*
* Subscribe to changes to the store for rendering & logging
*/
function onchange (action, state, oldState) {
  render(state)
}

/*
* Render the html of the app with react
*/
function render (state) {
  return dom.render(react.createElement(div, state), appEl)
}

/*
* Send an action to the store
*/
send({ type: 'example', value: 'cool' })

/*
* Alternate `send` syntax
*/
send('example', { value: 'awesome' })

/*
* Create a component to render
*/
var div = react.createClass({
  render: function () {
    return react.createElement('div', {}, this.props.value)
  }
})
