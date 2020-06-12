const { EventEmitter } = require('events')
const assert = require('assert')

module.exports = class MediaPlaybackReady extends EventEmitter {
  command (selector, timeout, message) {
    this.startTime = new Date().getTime()
    const self = this
    const executeArgs = [selector]

    function checkFunction (selector, cb) {
      const element = document.querySelector(selector)
      cb(element.readyState)
    };

    function callback (result) {
      const now = new Date().getTime()
      if (result.value === 4) {
        const msg = message || `Media element ${selector} started playing in ${now - self.startTime} ms`
        this.assert.ok(result.value, msg)
        self.emit('complete')
      } else if (now - self.startTime < timeout) {
        self.api.executeAsync(checkFunction, executeArgs, callback)
      } else {
        const failMsg = message || `Media element ${selector} failed to start in ${now - self.startTime} ms`
        assert.equal(result.value, 4, failMsg)
        self.emit('complete')
      }
    };

    this.api.executeAsync(checkFunction, executeArgs, callback)

    return this
  }
}
